const data = [73, 67, 38, 33];

const gradingStudents = grades => {

  return grades.map(grade => {
    // Get the difference from 5 through mod operator
    const difference = 5 - (grade % 5);
    
    if (difference < 3 && grade >= 38) {
      grade += difference;
    }
    return grade;
  })
};

console.log(gradingStudents(data));