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

  // Finds the position of queens on the board
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      if (filledBoard[i][j] === 1) {
        queenPositions.push([i, j])
      }

    }
  }

  // Determine if threat is true
  // Horizontal and Vertical threat
  if (queenPositions[0][0] === queenPositions[1][0] || queenPositions[0][1] === queenPositions[1][1]) {
    return true;
  // Diagonal threat
  // Math.abs to turn into true value, comparison between negative and positive number caused a bug
  } else if (Math.abs(queenPositions[0][0] - queenPositions[1][0]) === Math.abs(queenPositions[0][1] - queenPositions[1][1])) {
    return true;
  } else {
    return false;
  }
};

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));