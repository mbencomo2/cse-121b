/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  // Step 2: In the function, return the sum of the parameters number1 and number2
  return +number1 + +number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  const addend1 = document.querySelector("#addend1").value;
  const addend2 = document.querySelector("#addend2").value;
  const sum = add(addend1, addend2);
  // Step 4: Assign the return value to an HTML form element with an ID of sum
  document.querySelector("#sum").value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener('click', addNumbers)
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
  return +number1 - +number2;
}
function subtractNumbers() {
  const minuend = document.querySelector('#minuend').value;
  const subtrahend = document.querySelector('#subtrahend').value;
  const diff = subtract(minuend, subtrahend);
  document.querySelector('#difference').value = diff;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', () => {
  const factor1 = document.querySelector('#factor1').value;
  const factor2 = document.querySelector('#factor2').value;
  const multiply = (factor1, factor2) => {
    return +factor1 * +factor2;
  }
  document.querySelector('#product').value = multiply(factor1, factor2);
});
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', () => {
  const dividend = document.querySelector('#dividend').value;
  const divisor = document.querySelector('#divisor').value;
  const quotient = (dividend, divisor) => {
    return +dividend / +divisor;
  }
  document.querySelector('#quotient').value = quotient(dividend, divisor);
});
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const cdate = new Date();
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const year = cdate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbers.join(', ');
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').textContent = numbers.filter(number =>  number % 2 != 0 ).join(', ');
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numbers.filter(number =>  number % 2 == 0 ).join(', ');
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = numbers.reduce((previousValue, currentValue) => currentValue + previousValue, 0);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedNumbers = numbers.map((value) => value * 2);
document.querySelector('#multiplied').textContent = multipliedNumbers.join(', ');
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = multipliedNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);