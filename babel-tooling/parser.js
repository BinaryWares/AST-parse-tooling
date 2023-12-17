import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default;

let code = `const result = (10 + 2) * 80;`;

let ast = parse(code);

let numericValues = [];

traverse(ast, {
  enter(path) {
    if (path.isNumericLiteral()) {
      numericValues.push(path.node.value);
    }
  },
});

console.log(numericValues);