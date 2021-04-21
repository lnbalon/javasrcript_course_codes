// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM
// get the amplitude given an array of temperature. keep in mind that the sensor can return error values

const temperatures = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function getAmplitude(tempArray) {
  let minTemp = Number.MAX_VALUE;
  let maxTemp = Number.MIN_VALUE;

  for (let i = 0; i < tempArray.length; i++) {
    // extract the temp
    let temp = tempArray[i];
    if (typeof temp === 'number') {
      console.log(temp);
      if (temp > maxTemp) {
        maxTemp = temp;
      } else if (temp < minTemp) {
        minTemp = temp;
      }
      console.log(minTemp, maxTemp);
    }
  }
  return minTemp, maxTemp;
}

const a = getAmplitude(temperatures);
console.log(a);
