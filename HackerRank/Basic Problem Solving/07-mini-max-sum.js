const inputData = [3, 1, 5, 9, 7];

const miniMaxSum = arr => {
  arr.sort((a, b) => a - b);
  console.log(arr);
};

miniMaxSum(inputData);