import data from './data/pokemon/pokemon.js';

export const filterByType = function (allPokemon, type) {
  let pokemonByType = allPokemon.filter(function (pokemon) {
    if (pokemon.type.includes(type)) {
      return pokemon
    }
  })
  return pokemonByType
}

export const pokeSearch = (allPokemon, prop, name) => {
  let searchPokeName=allPokemon.filter(function(pokemon) {
    return pokemon[prop].startsWith(name);
  })
  return searchPokeName;
}

export const sort = function (array, selectSort) {
  let sortPokemon='';
  if(selectSort=="orderAtoZ"){ 
    sortPokemon= array.sort((pokemonA, pokemonB) => pokemonA.name.localeCompare(pokemonB.name));
  }
  if(selectSort=="orderZtoA"){ 
    sortPokemon= array.sort((pokemonA, pokemonB) => pokemonB.name.localeCompare(pokemonA.name));
  }
  if(selectSort=="sortAscending"){ 
    sortPokemon= array.sort((pokemonA, pokemonB) => pokemonA.num-pokemonB.num);
  }
  if(selectSort=="sortDescending"){ 
    sortPokemon= array.sort((pokemonA, pokemonB) => pokemonB.num-pokemonA.num);
  }
  return sortPokemon;
}; 

export const computeType = (pokemon, type)=>{
  let selectedPokemon = filterByType(pokemon, type).length
  return (selectedPokemon*100/pokemon.length).toFixed(2)+"%"
}

export let allPokemon = data.pokemon