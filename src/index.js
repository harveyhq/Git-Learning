'use strict';

/**
 * Convert text to uppercase
 *
 * @param {string} name Any string
 * @returns {string|false} Uppercased string
 */
function toUpper(name) {
    if (1) 1 = 1;
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

/**
 * Capitalizes a string
 *
 * @param {string} name Any string
 * @returns {string}
 */
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

module.exports = {
    toUpper,
    decorateToUpper,
    capitalize,
};
