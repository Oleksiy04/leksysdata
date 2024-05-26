# Simple Validator

A simple data validation package for JavaScript.

## Installation

You can install this package using npm:

```bash
npm install simple-validator
const Validator = require('simple-validator');

console.log(Validator.isNonEmptyString('Hello World')); // true
console.log(Validator.isNonEmptyString('')); // false

console.log(Validator.isNumber(123)); // true
console.log(Validator.isNumber('123')); // false

console.log(Validator.isEmail('test@example.com')); // true
console.log(Validator.isEmail('test@.com')); // false

console.log(Validator.isURL('https://example.com')); // true
console.log(Validator.isURL('invalid-url')); // false

console.log(Validator.isNonEmptyArray([1, 2, 3])); // true
console.log(Validator.isNonEmptyArray([])); // false

console.log(Validator.isBoolean(true)); // true
console.log(Validator.isBoolean('true')); // false

const isEven = (num) => num % 2 === 0;
console.log(Validator.custom(4, isEven)); // true
console.log(Validator.custom(5, isEven)); // false


This `README.md` provides installation instructions, usage examples, and method descriptions for your `simple-validator` package. You can modify and expand it as needed.
