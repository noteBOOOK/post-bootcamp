const inputData = "07:05:45PM";

const timeConversion = input => {
  // Get time of day and split the time string separated by colons
  let AMPM = input.slice(-2);
  let time = input.slice(0, -2).split(":");

  // If midnight, change to "00"
  if (AMPM === "AM" && time[0] === "12") {
    time[0] = "00";
  // If in the afternoon, add 12 to the hours, modulus converts back to integer
  } else if (AMPM === "PM") {
    time[0] = (time[0] % 12) + 12;
  }
  
  return(time.join(":"));

}

console.log(timeConversion(inputData));