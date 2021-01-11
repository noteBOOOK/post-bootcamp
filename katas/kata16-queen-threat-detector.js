const generateBoard = (whiteQueen, blackQueen) => {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  result[whiteQueen[0]][whiteQueen[1]] = 1;
  result[blackQueen[0]][blackQueen[1]] = 1;
  return result;
};

console.log(generateBoard([0, 0], [1, 1]));