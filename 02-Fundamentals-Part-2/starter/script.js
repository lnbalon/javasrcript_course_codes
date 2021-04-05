'use strict';

function logger() {
    console.log('This is a logger message')
}

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice
}

let juice;
juice = fruitProcessor(2, 3)
console.log(juice)