/**
 * Convert text to uppercase
 *
 * @param {String} name
 * @returns Uppercased string
 */
function toUpper(name) {
    return 'string' === typeof name && name.toUpperCase();
}


module.exports = {
    toUpper
};
