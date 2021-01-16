const inputData = [3, 2, 1, 3];

const birthdayCakeCandles = candles => {

  const sortedCandles = candles.sort((a, b) => a - b);
  const maxHeight = sortedCandles[sortedCandles.length - 1];

  const tallestCandles = sortedCandles.filter(candle => candle === maxHeight);
  return tallestCandles.length;
};

console.log(birthdayCakeCandles(inputData));