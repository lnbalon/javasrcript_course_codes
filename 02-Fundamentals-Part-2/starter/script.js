'use strict';

// introduction to function
function logger() {
    console.log('This is a logger message')
}

logger();
logger();
logger();

// practice code 2
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

// different ways of showing the result to console
const juiceResult = fruitProcessor(2, 3);
console.log(juiceResult);
console.log(fruitProcessor(10, 20));
console.log(fruitProcessor(10, 202));
console.log(fruitProcessor(1, 121));

// practice code 3
function isDivisibleByThree(num) {
    // a function that tests if a number is divisible 
    // by three or not. 
    const remainder = num % 3;
    if (!remainder) {
        return 'Divisible by 3!'
    } else {
        return 'Not divisible by 3!'
    }
}

console.log(isDivisibleByThree(2));
console.log(isDivisibleByThree(12));
console.log(isDivisibleByThree(122));

// Next lesson

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age
}