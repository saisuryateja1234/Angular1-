let students = [
    { name: 'surya', score: 90 },
    { name: 'sai', score: 80 },
    { name: 'teja', score: 60 },
    { name: 'David', score: 85 }
  ];
  
  let passedStudents = students.filter(student => {
    return (student.score / 100) * 100 >= 70;
  });
  
  console.log('Passed students:', passedStudents);