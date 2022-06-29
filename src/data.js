import data from './data/pokemon/pokemon.js';

export const createPokemonCard = function(pokemon) { //Recibe un objeto del array 
  const {img, num, name} = pokemon //Se accede a la imagen, número y nombre del Pokemon
    return `
    <button class="onePokemon">
      <p class=${name} id="pokemonName"> ${num} ${name.charAt(0).toUpperCase()+ name.slice(1)} </p>
      <img class=${name} alt="This is a pokemon" src="${img}">
    </button>`
}

export const createModal = function(pokemon){
  const {num, name, size:{height, weight}, encounter, img, type, generation, about, resistant, weaknesses} = pokemon;
  return `
  <button id="close">X</button>
  <p id=pokemonNameInModal>${num} ${name.charAt(0).toUpperCase()+ name.slice(1)}</p>
  <div class="tableAndPokemon">
    <table class="statsPokemon">
      <tr class="height">
        <th>Height</th>
        <td>${height}</td>
      </tr>
      <tr class="weight">
        <th>Weight</th>
        <td>${weight}</td>
      </tr>
      <tr class="spawn-chance">
        <th>Spawn chance</th>
        <td>${(pokemon['spawn-chance']*100).toFixed(2)+"%"}</td>
      </tr>
      <tr class="base-flee-rate">
        <th>Base flee rate</th>
        <td>${(encounter['base-flee-rate']*100).toFixed(2)+"%"}</td>
      </tr>
      <tr class="base-capture-rate">
        <th>Base capture rate</th>
        <td>${(encounter['base-capture-rate']*100).toFixed(2)+"%"}</td>
      </tr>
    </table>
    <div class="imgAndType">
      <img alt="This is a pokemon" src=${img}>
      <p> Type: ${type} </p>
      <p> ${generation.num.charAt(0).toUpperCase()+ generation.num.slice(1)}: ${generation.name.charAt(0).toUpperCase()+ generation.name.slice(1)}</p>
    </div>
  </div>
  <p>${about}</p>
  <p>Resistant: ${resistant}</p>
  <p>Weaknesses: ${weaknesses}</p>`
}

export const filterByType = function (allPokemon, type) {
  let pokemonByType = allPokemon.filter(function (pokemon) {
    if (pokemon.type.includes(type)) {
      return pokemon
    }
  })
  return pokemonByType
}

export const createFilteredCards = function(filterArr){
  let newCards = filterArr.map(function(pokemon){
    return createPokemonCard(pokemon)
  })
  return newCards
}

export const pokeSearch = (allPokemon,name) => {
  let searchPokeName=allPokemon.filter(function(pokemon) {
    return pokemon.name.startsWith(name);
  })
  return searchPokeName;
}

export const sort = function (selectionTypeArray1,SelectSort) {
  let sortPokemon='';
  if(SelectSort=="orderAtoZ"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => a.name.localeCompare(b.name));
  }
  if(SelectSort=="orderZtoA"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => b.name.localeCompare(a.name));
  }
  if(SelectSort=="sortAscending"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => a.num-b.num);
  }
  if(SelectSort=="sortDescending"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => b.num-a.num);
  }
  return sortPokemon;
}; 

export const computeType = (pokemon, type)=>{
  let selectedPokemon = filterByType(pokemon, type).length
  return (selectedPokemon*100/pokemon.length).toFixed(2)+"%"
}

export let allPokemon = data.pokemon
