const inputData = [3, 1, 5, 9, 7];

const miniMaxSum = arr => {
  let sum1 = 0;
  let sum2 = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    sum1 += arr[i];
  }

  for (let i = arr.length - 1; i > 0; i--) {
    sum2 += arr[i];
  }
  console.log(sum1, sum2);
};

miniMaxSum(inputData);