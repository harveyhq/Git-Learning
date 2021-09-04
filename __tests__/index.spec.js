const { toUpper:upper } = require("../src/index");

describe("Test some function", () => {
    // test
    test("test", () => {
        expect(upper("UnIcOrNs aRe GoOd")).toEqual("UNICORNS ARE GOOD");
    });
});
