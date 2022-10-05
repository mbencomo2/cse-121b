/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const personalInfo = {
  // Step 2: Inside of the object, add a property named name with a value of your name as a string
  name: 'Matthew Bencomo',
  // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  photo: "images/avatar.jpg",
  // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
  favoriteFoods: ["Bratwurst/Knackwurst", " Fezzik Stew", " Feijoada"],
  // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
  hobbies: ['watching anime', 'playing Touhou', 'soft-modding consoles', 'overclocking my PC', 'fixing my car'],
  // Step 6: Add another property named placesLived with a value of an empty array
  placesLived: [{place: 'Phoenix, Az', length: '7yrs'}, {place: 'Glendale, Az', length: '10yrs'}, {place: 'Buckeye, Az', length: '5years'}]
  // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
  // Step 8: For each property, add appropriate values as strings
  // Step 9: Add additional objects with the same properties for each place you've lived
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = personalInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', personalInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', personalInfo.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorite-foods').innerHTML = personalInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join('');
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').innerHTML = personalInfo.hobbies.map((hobby) => `<li>${hobby}</li>`).join('');
 
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').innerHTML = personalInfo.placesLived.map((city) => `<dt>${city.place}</dt><dd>${city.length}</dt>`).join('');