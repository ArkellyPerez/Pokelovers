import data from './data/pokemon/pokemon.js';

export const filterByType = function (allPokemon, type) {
  let pokemonByType = allPokemon.filter(function (pokemon) {
    if (pokemon.type.includes(type)) {
      return pokemon
    }
  })
  return pokemonByType
}

export const pokeSearch = (allPokemon,prop, name) => {
  let searchPokeName=allPokemon.filter(function(pokemon) {
    return pokemon[prop].startsWith(name);
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
