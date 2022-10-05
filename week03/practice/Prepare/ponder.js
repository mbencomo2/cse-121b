//.map practice
const array = ['one', 'two', 'three'];
let new_array = array.map((value) => `<li>${value}</li>`)
document.querySelector('#myList').innerHTML = new_array.join("");

// .reduce and .map practice
const letter_grades = ['A', 'B', 'A'];
console.log(`Our current grades: ${letter_grades.join(', ')}`);
function convertGrades(grade) {
  let points = 0;
  if (grade === 'A') {
    points = 4;
  }
  else if (grade === 'B') {
    points = 3;
  }
  return points;
}
let gpa = letter_grades.map(convertGrades);
let initialValue = 0;
const sumGPA = gpa.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue) / gpa.length;
console.log(`GPA: ${sumGPA.toPrecision(2)}`);

// .filter practice
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
console.log(`Our current fruit: ${fruit.join(', ')}`);
const shortFruit = fruit.filter((word) => word.length < 6);
console.log(`Fruit shorter than 6 characters: ${shortFruit.join(', ')}`);

// .indexOf practice
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
console.log(`Our lucky number, ${luckyNumber}, is located at index ${numbers.indexOf(luckyNumber)}.`);

//DOM event practice
const buttonElement = document.getElementById("submitButton");
function copyInput(event) {
  console.log(event);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");
document.addEventListener("keydown", logKey);
function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}

