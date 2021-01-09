const squareCode = function(message) {

  let result = "";
  const string = message.split(" ");
  const stringLength = string.join("").length;
  const square = Math.ceil(Math.sqrt(stringLength));

  return square;
};

console.log(squareCode("chill out"));

/*
chi
llo
ut

clu
hlt
io

clu hlt io

*/