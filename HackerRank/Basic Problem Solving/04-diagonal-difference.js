// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output
// 15

///////////////////////////

const diagonalDifference = arr => {

  let result1 = 0;
  let result2 = 0;
  let counter = 0;
  for (let row of arr) {
    result1 += row[counter];
    counter++;
  }

  counter = 2;
  for (let row of arr) {
    result2 += row[counter];
    counter--;
  }

  return Math.abs(result1 - result2);
};

const inputData = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

console.log(diagonalDifference(inputData));