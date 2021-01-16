const inputData = "07:05:45PM";

const timeConversion = input => {
  let AMPM = input.slice(-2);

  let time = input.slice(0, -2).split(":");

  if (AMPM === "AM" && time[0] === "12") {
    time[0] = "00";
  } else if (AMPM === "PM") {
    time[0] = (time[0] % 12) + 12;
  }
  
  return(time.join(":"));

}

console.log(timeConversion(inputData));