/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const curr_date = new Date();
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
const curr_day = curr_date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let msg = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (curr_day > 0 || curr_day < 6) {
  msg = 'Hang in there!';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  msg = 'Whoohoo! It  is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let dayOfWeek = ''
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (curr_day) {
  case 0:
    dayOfWeek = 'Sunday';
    break;

  case 1:
    dayOfWeek = 'Monday';
    break;
    
  case 2:
    dayOfWeek = 'Tuesday';
    break;

  case 3:
    dayOfWeek = 'Wednesday';
    break;

  case 4:
    dayOfWeek = 'Thursday';
    break;

  case 5:
    dayOfWeek = 'Friday';
    break;

  case 6:
    dayOfWeek = 'Saturday';
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = msg;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = dayOfWeek;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples) {
  for (let i = 0; i < temples.length; i++) {
    const temple = temples[i];

    const article = document.createElement('article');
    const name = document.createElement('h3');
    const location = document.createElement('h4');
    const dedicated = document.createElement('h4');
    const img = document.createElement('img');

    article.id = temple.templeName;
    name.textContent = temple.templeName;
    location.textContent = temple.location;
    dedicated, textContent = temple.dedicated;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.templeName);

    article.appendChild(name);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(img);
    document.querySelector('#temples').appendChild(article);
  }
}

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
async function getTemples() {
  const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    temples = await response.json();
    output(temples);
  }
}
getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  //Clear the inner html of the article element with an ID of 'temples'
  const temples = document.querySelector('#temples');
  temples.innerHTML = '';
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
  //Reset the page
  reset()
  //Get the selected value of the sortBy select field
  const option = document.querySelector('#sortBy').selectedIndex;
  let sortedTemples = []
  //Sort based upon what option the user selects
  switch (option) {
    case 0:
      sortedTemples = temples.sort((a, b) => {
        if (a.templeName < b.templeName) {
          return -1
        }
        else if (a.templeName > b.templeName) {
          return 1
        }
        else {
          return 0
        }
      });
      output(sortedTemples);
      break;

    case 1:
      sortedTemples = temples.sort((a, b) => {
        if (a.templeName < b.templeName) {
          return 1
        }
        else if (a.templeName > b.templeName) {
          return -1
        }
        else {
          return 0
        }
      });
      output(sortedTemples);
      break;
  }
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
