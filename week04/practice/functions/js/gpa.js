//GPA Calculator
//Step 1: Get input from user as a comma seperated string
//step 2: iterate through each grade, getting a GPA score from it
//step 3: combine the score into a single GPA
//Step 4: display the final GPA to the user

function generateGPA() {
  //Step 1
  const grades = document.querySelector('#grades').value.split(',')
  const cleaned_grades = grades.map((grade) => grade.trim().toUpperCase());
  //Step 2
  const scores = cleaned_grades.map((value) => {
    if (value === 'A') {
      return 4;
    }
    else if (value === 'B') {
      return 3;
    }
    else if (value === 'C') {
      return 2;
    }
    else if (value === 'D') {
      return 1;
    }
    else {
      return 0;
    }
  });
  //step 3
  let gpa = scores.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  gpa = gpa / scores.length;
  //step 4
  document.querySelector('#output').textContent = gpa;
}

document.querySelector('#submitButton').addEventListener('click', generateGPA);

