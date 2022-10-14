// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon?limit=175&offset=0";
let results = null;

async function getPokemonList(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    let pokemonList = data.results;

    //sort our list of pokemon alphabetically
    pokemonList = sortPokemon(pokemonList);

    //for each pokemon in the data results, create a new table row
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      buildPokemon(pokemon.url)
    }
  }
}

async function buildPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    
    //find our table and create a new table row
    const table = document.querySelector('table');
    const tableRow = document.createElement('tr');
    
    //fill in the table row with the data we requested
    tableRow.innerHTML = `<td>${data.name}</td>
    <td>1</td>
    <td><img src="${data.sprites.front_default}"></td>
    <td>${data.stats[0].base_stat}</td>`;
    
    //add the table row to our table
    table.appendChild(tableRow);
  }
}

function createTable() {
  const section = document.querySelector('#output');
  const table = document.createElement('table');
  const tablehead = document.createElement('thead');
  tablehead.innerHTML = `<tr>
  <td>Name</td>
  <td>level</td>
  <td>Sprite</td>
  <td>HP</td>
  </tr>`;
  table.appendChild(tablehead);
  section.appendChild(table);
}

function compareFn(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


function sortPokemon(list) {
  let sortedList = list.sort(compareFn)
  return sortedList
}

createTable();
getPokemonList(url);
console.log("second: ", results);