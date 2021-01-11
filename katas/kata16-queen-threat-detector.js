const generateBoard = (whiteQueen, blackQueen) => {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  return result;
};

console.log(generateBoard(1, 2));