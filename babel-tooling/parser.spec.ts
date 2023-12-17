import getNumericLieralsInCode from "./parser";

describe("getNumericLieralsInCode", () => {
    it("should return an array of numeric literals in the code", () => {
        const code = `const result = (10 + 2) * 80;`;
        const result = getNumericLieralsInCode(code);
        expect(result).toEqual([10, 2, 80]);
    });

    it("should return an empty array if there are no numeric literals in the code", () => {
        const code = `const result = "Hello, world!";`;
        const result = getNumericLieralsInCode(code);
        expect(result).toEqual([]);
    });

});
