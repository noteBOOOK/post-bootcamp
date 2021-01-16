const inputData = [3, 2, 1, 3];

const birthdayCakeCandles = candles => {
  // Sort candles by ascending order and find tallest candle
  const sortedCandles = candles.sort((a, b) => a - b);
  const maxHeight = sortedCandles[sortedCandles.length - 1];

  // Filter all candles to see which match the max height
  const tallestCandles = sortedCandles.filter(candle => candle === maxHeight);
  return tallestCandles.length;
};

console.log(birthdayCakeCandles(inputData));