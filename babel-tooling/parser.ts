import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

let code = `const result = (10 + 2) * 80;`;

let ast = parse(code);

let numericValues: number[] = [];

traverse(ast, {
  enter(path) {
    if (path.isNumericLiteral()) {
      numericValues.push(path.node.value);
    }
  },
});

console.log(numericValues);