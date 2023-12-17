import {parse} from '@babel/parser';

let code = `const result = 10 + (2 * 80);`;

let ast = parse(code);
const astBody = ast.program.body[0];
const astDeclaration = astBody.declarations[0];
const astExpression = astBody.expression;



let numericLiterals = [];
const getNumericLiterals = (astExpression) => {
    for (let key in astExpression) {
        if (key === 'left' || key === 'right') {
            if(key === 'left' && astExpression.left.type === 'NumericLiteral') {
                numericLiterals.push(astExpression.left.value);
            }
            if(key === 'right' && astExpression.right.type === 'NumericLiteral') {
                numericLiterals.push(astExpression.right.value);
            }
            getNumericLiterals(astExpression[key]);
        }
    }
}

getNumericLiterals(astDeclaration?.init || astExpression);

console.log(numericLiterals);