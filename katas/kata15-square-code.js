const squareCode = function(message) {

  let result = "";
  let resultArray = [];
  let line = "";

  const string = message.split(" ").join("");
  const square = Math.ceil(Math.sqrt(string.length));

  for (let i = 0; i < string.length; i++) {
    if (line.length === square) {
      resultArray.push(line);
      line = "";
    }
    line += string[i];
  }
  // Add remaining characters
  resultArray.push(line);

  for (let i = 0; i < resultArray[0].length; i++) {
    for (let j = 0; j < resultArray.length; j++) {
      
      // Prevents "undefined" from being added if character length is less than number of columns
      if (resultArray[j].length > i) {
        result += resultArray[j][i];
      }

    }
    result += " ";
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));