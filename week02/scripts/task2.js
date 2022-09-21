/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let usr_name = "Matt";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = usr_name;

// Step 3: declare and instantiate a variable to hold the current year
let curr_year = new Date();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = curr_year.getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
let pic_name = "avatar.jpg";

// Step 6: copy your image into the "images" folder
// done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("header>img").setAttribute("src", `images/${pic_name}`);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = ["Bratwurst/Knackwurst", " Fezzik Stew", " Feijoada"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let add_food = " Pizza";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(add_food);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = foods;


