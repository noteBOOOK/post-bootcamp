const data = [73, 67, 38, 33];

const gradingStudents = grades => {
  const results = [];

  grades.map(grade => {
    const difference = 5 - (grade % 5);

    if (difference < 3 && grade >= 38) {
      grade += difference;
    }
    console.log(grade);
  })

};

gradingStudents(data);