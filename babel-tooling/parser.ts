import { parse } from "@babel/parser";
import traverse from "@babel/traverse";

const getNumericLieralsInCode = (code: string): number[] => {
  let ast = parse(code);

  let numericValues: number[] = [];
  
  traverse(ast, {
    enter(path) {
      if (path.isNumericLiteral()) {
        numericValues.push(path.node.value);
      }
    },
  });

  return numericValues;
}

export default getNumericLieralsInCode;