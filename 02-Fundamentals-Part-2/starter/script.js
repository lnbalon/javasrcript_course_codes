'use strict';

// // introduction to function
// function logger() {
//     console.log('This is a logger message')
// }

// logger();
// logger();
// logger();

// // practice code 2
// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// // different ways of showing the result to console
// const juiceResult = fruitProcessor(2, 3);
// console.log(juiceResult);
// console.log(fruitProcessor(10, 20));
// console.log(fruitProcessor(10, 202));
// console.log(fruitProcessor(1, 121));

// // practice code 3
// function isDivisibleByThree(num) {
//     // a function that tests if a number is divisible 
//     // by three or not. 
//     const remainder = num % 3;
//     if (!remainder) {
//         return 'Divisible by 3!'
//     } else {
//         return 'Not divisible by 3!'
//     }
// }

// console.log(isDivisibleByThree(2));
// console.log(isDivisibleByThree(12));
// console.log(isDivisibleByThree(122));


// // function decleration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2022);
// console.log(age1);


// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(2022);
// console.log(age2)

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2022);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'bong'));
// console.log(yearsUntilRetirement(1211, 'd'));


// // functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor2(apples, oranges) {
//     // console.log(apples, oranges);
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));
// console.log(fruitProcessor2(2, 3));

// // Coding exercise # 1

// // arrow function to get the average
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAverage1 = calcAverage(44, 23, 71);
// const koalasAverage1 = calcAverage(65, 54, 49);

// const dolphinsAverage2 = calcAverage(85, 54, 41);
// const koalasAverage2 = calcAverage(23, 34, 27);

// // function to get the winner
// function checkWinner(avgKoalas, avgDolphins) {

//     // console.log(avgKoalas, avgDolphins)
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log('no one wins!')
//     }
// }

// // test the functions
// checkWinner(koalasAverage1, dolphinsAverage1);
// checkWinner(koalasAverage2, dolphinsAverage2);
// checkWinner(440, 202);

// // arrays
// const name1 = 'bong';
// const name2 = 'nong';
// const name3 = 'maan';
// const name4 = 'godo';

// // literal syntax
// const names = ['bong', 'nong', 'maan', 'godo'];
// console.log(names)

// const years = new Array(1991, 1983, 2000, 4000);

// // accessing arrays
// console.log(names[0])

// // length arrays
// console.log(names.length)

// // access the last element
// console.log(names[names.length - 1])

// // array mutation
// names[2] = 'Maan';
// console.log(names);

// // array not mutable; results in error
// // names = ['new', 'new_name'];

// // more array operations
// const bong = ['Balon', 'UPLB', 2021 - 1987, names[0]];
// console.log(bong)

// // accessing arrays
// const birthYears = [1990, 1967, 2002, 2010, , 2018];

// console.log(calcAge1(birthYears[2]))
// console.log(calcAge1(birthYears[1]))
// console.log(calcAge1(birthYears[3]))

// const ages = [calcAge1(birthYears[3]), calcAge1(birthYears[2])]
// console.log(ages)

// methods on arrays

// adding elements
const numList = [1, 2, 3, 4, 5];
const lenNumList = numList.push(6); // the push method returns the length of the new array

console.log(numList);
console.log(lenNumList);

const unshifted = numList.unshift(0);
console.log(unshifted)
console.log(numList);

// removing elements
numList.pop(); // the pop method returns the removed element
console.log(numList);

numList.shift(); // removes the first element

console.log(numList.indexOf(2));
console.log(numList.indexOf(210));
console.log(numList.includes(2));

// coding challenge for arrays

// tip 15% if values is between 50 and 300

// longer implementation
// readable
function calcTip(billAmount) {
    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * 0.15;
    } else {
        return billAmount * 0.20;
    }
}

// shorter implementation
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// objects
