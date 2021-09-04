const { toUpper:upper, decorateToUpper } = require("../src/index");

describe("Test some function", () => {
    // test
    test("it should make string uppercased", () => {
        expect(upper("UnIcOrNs")).toEqual("UNICORNS");
    });

    test("it should make string uppercased and append [decorated] to the end", () => {
        expect(decorateToUpper("UnIcOrNs")).toEqual("UNICORNS [decorated]");
    });

    test("mock toUpper()", () => {
        const f = require("../src/index");
        jest.spyOn(f, 'toUpper').mockReturnValue('ccc');
        expect(f.decorateToUpper('aaa')).toBe('ccc [decorated]');
    });
});
