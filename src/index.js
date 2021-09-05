'use strict';

/**
 * Convert text to uppercase
 *
 * @param {string} name Any string
 * @returns {string|false} Uppercased string
 */
function toUpper(name) {
    return typeof name === 'string' && name.toUpperCase();
}

/**
 * Convert text to uppercase and decorates it
 *
 * @param {string} name Any string
 * @returns {string} Uppercased string
 */
function decorateToUpper(name) {
    return module.exports.toUpper(name) && `${module.exports.toUpper(name)} [decorated]`;
}

module.exports = {
    toUpper,
    decorateToUpper,
};
