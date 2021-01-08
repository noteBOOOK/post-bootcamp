
const camelCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      result += input[i+1].toUpperCase();
      i++;
    } else if (input[i] !== " "){
      result += input[i];
    }
  }
  return result;
}

const makeCase = (input, inputCase) => {
  let result = "";
  // Priority of cases
  const priority = {
    first: ["camel", "pascal", "snake", "kebab", "title"],
    second: ["vowel", "consonant"],
    third: ["upper", "lower"],
  }

  let order = {
    first: [],
    second: [],
    third: [],
  };
  // Set inputCase as an array if not already
  Array.isArray(inputCase) === true ? parsedInputCase = inputCase : parsedInputCase = [inputCase]
  // Loop through inputCase array and sort cases by priority
  for (let i of parsedInputCase) {
    if (priority.first.includes(i)){
      order.first.push(i);
    } else if (priority.second.includes(i)){
      order.second.push(i);
    } else {
      order.third.push(i);
    }
  }
  console.log(order);
}

makeCase("this is a string", ["camel", "snake", "upper", "vowel", "lower", "consonant", "title"]);

