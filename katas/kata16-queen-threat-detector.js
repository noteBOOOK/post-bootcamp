let whiteQueen = [0, 5];
let blackQueen = [5, 0];

const generateBoard = (whiteQueen, blackQueen) => {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }
  result[whiteQueen[0]][whiteQueen[1]] = 1;
  result[blackQueen[0]][blackQueen[1]] = 1;
  return result;
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);

const queenThreat = filledBoard => {
  let queenPositions = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      if (filledBoard[i][j] === 1) {
        queenPositions.push([i, j])
      }

    }
  }
  return queenPositions;
};

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
