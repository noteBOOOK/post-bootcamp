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
  resultArray.push(line);

  return resultArray;
};

console.log(squareCode("chill out"));

/*
chi
llo
ut

chi llo ut

clu
hlt
io

clu hlt io

*/