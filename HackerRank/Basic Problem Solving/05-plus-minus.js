// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

// Input Format

// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// Constraints



// Output Format

// Print the following  lines, each to  decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667

///////////////////////

const inputData = [1, 2, 3, -1, -2, -3, 0, 0];

const plusMinus = arr => {
  const counter = {
    positive: 0,
    negative: 0,
    zero: 0
  };
  let length = arr.length;

  arr.forEach(number => {
    if (number === 0) {
      counter.zero += 1;
    } else if (number > 0) {
      counter.positive += 1;
    } else {
      counter.negative += 1;
    }
  })

  const result = {
    positive: (counter.positive / length).toFixed(6),
    negative: (counter.negative / length).toFixed(6),
    zero: (counter.zero / length).toFixed(6)
  };

  return `${result.positive}\n${result.negative}\n${result.zero}`;

  // HackerRank challenge required answers to be displayed using console.log
  // console.log(result.positive);
  // console.log(result.negative);
  // console.log(result.zero);


}

console.log(plusMinus(inputData));