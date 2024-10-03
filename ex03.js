// Instructions: Use lodash's find function to get the first number in the array that is greater than 5.

const _ = require('lodash');

const numbers = [1, 3, 5, 7, 9];

const filteredNumber = _.filter(numbers, num => num >= 7)

const firstGreaterThanFive = _.head(filteredNumber)

console.log(firstGreaterThanFive); // Expected output: 7
