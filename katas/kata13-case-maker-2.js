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

const pascalCase = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      result += input[i+1].toUpperCase();
      i++;
    } else if (input[i] !== " "){
      result += input[i];
    }
  }
  return result.replace(result[0], result[0].toUpperCase())
}

const snakeCase = input => {
  return input.replace(/ /g, "_");
}

const kebabCase = input => {
  return input.replace(/ /g, "-");
}

const titleCase = input => {
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === " "){
      result += input[i] + input[i+1].toUpperCase();
      i++;
    } else {
      result += input[i];
    }
  }
  return result.replace(result[0], result[0].toUpperCase());
}

const vowelCase = input => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i of input) {
    if (vowels.includes(i)) {
      result += i.toUpperCase();
    } else {
      result += i;
    }
  }
  return result;
}

const consonantCase = input => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i of input) {
    if (!vowels.includes(i)) {
      result += i.toUpperCase();
    } else {
      result += i;
    }
  }
  return result;
}

const upperCase = input => {
  return input.toUpperCase();
}

const lowerCase = input => {
  return input.toLowerCase();
}


const makeCase = (input, inputCase) => {
  let result = input;
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

  for (let precedent in order) {
    order[precedent].forEach((c) => {
      switch(c){
        case "camel":
          result = camelCase(result);
          break;
        case "pascal":
          result = pascalCase(result);
          break;
        case "snake":
          result = snakeCase(result);
          break;
        case "kebab":
          result = kebabCase(result);
          break;
        case "title":
          result = titleCase(result);
          break;
        case "vowel":
          result = vowelCase(result);
          break;
        case "consonant":
          result = consonantCase(result);
          break;
        case "upper":
          result = upperCase(result);
          break;
        case "lower":
          result = lowerCase(result);
          break;
        default:
          result = result;
      }
    })
  }
  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));