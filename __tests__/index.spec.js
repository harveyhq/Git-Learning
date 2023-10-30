const lib = require('../src/index');

const { toUpper, decorateToUpper, capitalize } = lib;

describe('Test some function', () => {
    // Test
    test('it should make string uppercased', () => {
        expect(toUpper('UnIcOrNs')).toEqual('UNICORNS');
    });

    test('it should make string uppercased and append [decorated] to the end', () => {
        expect(decorateToUpper('UnIcOrNs')).toEqual('UNICORNS [decorated]');
    });

    test('mock toUpper()', () => {
        const fakeToUpper = jest.spyOn(lib, 'toUpper').mockReturnValue('AAA');
        expect(fakeToUpper('ccc')).toBe('AAA');
    });

    test('it should mke string capitalized', () => {
        expect(capitalize('aRiNa')).toBe('Arina');
    });
});
