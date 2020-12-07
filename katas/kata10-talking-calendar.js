const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dayString = function(day) {
  if (day === 1 || day === 21 || day === 31) {
    return `${day}st`;
  } else if (day === 2 || day === 22) {
    return `${day}nd`;
  } else if (day === 3 || day === 23) {
    return `${day}rd`;
  } else {
    return `${day}th`;
  }
}

const talkingCalendar = function(date) {

  const splitDate = date.split("/");

  let [year, monthNum, dayNum] = splitDate;
  monthNum -= 1;
  let day = dayString(parseInt(dayNum));

  return `${months[monthNum]} ${day}, ${year}`;
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
