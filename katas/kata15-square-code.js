const squareCode = function(message) {

  let result = "";
  let resultArray = [];
  const string = message.split(" ").join("");
  const square = Math.ceil(Math.sqrt(string.length));

  for (let i = 0; i < string.length; i++) {
    if (i % square === 0) {
      result += " ";
    }
    result += string[i];
  }

  return result;
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