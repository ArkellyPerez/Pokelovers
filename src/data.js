export const pokemonCard = function (pokemon) {
  const { img, num, name } = pokemon
  return `
    <figure class="onePokemon">
        <p id="pokemonNumber"> ${num} </p>
        <p id="pokemonName"> ${name} </p>
        <img alt="This is a pokemon" src="${img}">
      </figure>`
}

export const filterByType = function (allPokemon, type) {
  let pokemonByType = allPokemon.filter(function (pokemon) {
    if (pokemon.type.includes(type)) {
      return pokemon
    }
  })
  return pokemonByType
}

/*const pokemonCards = allPokemon.map(function(pokemon){ 
  return pokemonCard(pokemon)
})*/

export const pokeArr = function (array) {
  let newCards = array.map(function (pokemon) {
    return pokemonCard(pokemon)
  })
  return newCards
}


export const pokeSearch = (allPokemon,name) => {
  let searchPokeName=allPokemon.filter(function(pokemon) {
    return pokemon.name.startsWith(name);
  })
  return searchPokeName;
}

export const sortByName = function (selectionTypeArray1,SelectSort) {
  let sortByNamePokemon='';

if(SelectSort=="orderAtoZ"){ 
 sortByNamePokemon= selectionTypeArray1.sort((a, b) => a.name.localeCompare(b.name));
}
if(SelectSort=="orderZtoA"){ 
  sortByNamePokemon= selectionTypeArray1.sort((a, b) => b.name.localeCompare(a.name));
}
if(SelectSort=="sortAscending"){ 
  sortByNamePokemon= selectionTypeArray1.sort((a, b) => a.num-b.num);
}
if(SelectSort=="sortDescending"){ 
  sortByNamePokemon= selectionTypeArray1.sort((a, b) => b.num-a.num);
}
return sortByNamePokemon;
}; 