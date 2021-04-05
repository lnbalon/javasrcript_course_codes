'use strict';

function logger() {
    console.log('This is a logger message')
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

const juiceResult = fruitProcessor(2, 3);
console.log(juiceResult);
logger()
console.log(fruitProcessor(10, 20));
console.log(fruitProcessor(10, 202));
console.log(fruitProcessor(1, 121));

function isDivisibleByThree(num) {

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
