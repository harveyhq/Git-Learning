/**
 * Convert text to uppercase
 *
 * @param {String} name
 * @returns Uppercased string
 */
function toUpper(name) {
    return 'string' === typeof name && name.toUpperCase();
}

/**
 * Convert text to uppercase and decorates it
 *
 * @param {String} name
 * @returns String
 */
function decorateToUpper(name) {
    return module.exports.toUpper(name) && module.exports.toUpper(name) + ' [decorated]';
}


module.exports = {
    toUpper,
    decorateToUpper
};
