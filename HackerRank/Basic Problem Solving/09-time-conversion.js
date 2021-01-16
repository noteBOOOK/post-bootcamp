const inputData = "07:05:45PM";

const timeConversion = input => {
  let AMPM = input.slice(-2);

  console.log(AMPM);

}

console.log(timeConversion(inputData));