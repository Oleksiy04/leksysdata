// validator.js
class Validator {
    // Check if a value is a non-empty string
    static isNonEmptyString(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }

    // Check if a value is a valid number
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    // Check if a value is a valid email
    static isEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return typeof value === 'string' && emailRegex.test(value);
    }

    // Check if a value is a valid URL
    static isURL(value) {
        try {
            new URL(value);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Check if a value is a non-empty array
    static isNonEmptyArray(value) {
        return Array.isArray(value) && value.length > 0;
    }

    // Check if a value is a boolean
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    // Custom validation using a provided function
    static custom(value, validationFn) {
        return typeof validationFn === 'function' && validationFn(value);
    }
}

// Export the Validator class for use in other files
module.exports = Validator;

// Example usage:
// const Validator = require('./validator');
// console.log(Validator.isEmail('test@example.com')); // true
// console.log(Validator.isURL('https://example.com')); // true
