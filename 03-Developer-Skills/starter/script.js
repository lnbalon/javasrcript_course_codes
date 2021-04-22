// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM
// get the amplitude given an array of temperature. keep in mind that the sensor can return error values

// const temperatures = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function getAmplitude(tempArray) {
//   // set the min and max temperature values temporarily
//   let minTemp = Number.MAX_VALUE;
//   let maxTemp = Number.MIN_VALUE;

//   for (let i = 0; i < tempArray.length; i++) {
//     // extract the temp
//     let temp = tempArray[i];

//     // check if the temp is a number
//     debugger;
//     if (typeof temp === 'number') {
//       if (temp > maxTemp) {
//         maxTemp = temp;
//       } else if (temp < minTemp) {
//         minTemp = temp;
//       }
//     }
//   }
//   return maxTemp - minTemp;
// }

// const amplitude = getAmplitude(temperatures);
// console.log(`the amplitude is ${amplitude}`);

// debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: prompt('Degrees celsius:'),
//   };

//   const kelvin = Number(measurement.value) + 273.15;
//   return kelvin;
// };

// console.log(measureKelvin());

// coding challenge

function printForecast(arr) {
  // initialize the first element as the maximum temp
  let maxTemp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let newTemp = arr[i];
    if (newTemp > maxTemp) maxTemp = newTemp;
    console.log(maxTemp);
  }
}

const testData1 = [17, 21, 23];
console.log(printForecast(testData1));
