const start = 7;
const end = 11;
const appleTree = 5;
const orangeTree = 15;
const applesArray = [-2, 2, 1];
const orangesArray = [5, -6];

const countApplesAndOranges = (s, e, a, o, apples, oranges) => {

  const result = {
    appleCount: 0,
    orangeCount: 0,
  };

  apples.forEach(apple => {
    apple += a;
    if (apple >= s && apple <= e) {
      result.appleCount += 1;
    }
  })

  oranges.forEach(orange => {
    orange += o;
    if (orange <= e && orange >= s) {
      result.orangeCount += 1;
    }
  })
  console.log(result.appleCount);
  console.log(result.orangeCount);
}; 

countApplesAndOranges(start, end, appleTree, orangeTree, applesArray, orangesArray);