const inputData = [3, 1, 5, 9, 7];

const miniMaxSum = arr => {
  let min = 0;
  let max = 0;

  // Sort the input array in ascending format
  arr.sort((a, b) => a - b);

  // Min sum will be first 4 numbers
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }

  // Max sum will be last 4 numbers
  for (let i = arr.length - 1; i > 0; i--) {
    max += arr[i];
  }
  console.log(min, max);
};

miniMaxSum(inputData);