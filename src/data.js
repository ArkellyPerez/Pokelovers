// estas funciones son de ejemplo

//import pokemon from "./data/pokemon/pokemon";

export const pokemonCard = function(pokemon) {
  const {img, num, name} = pokemon
    return `
    <figure class="onePokemon">
        <p id="pokemonNumber"> ${num} </p>
        <p id="pokemonName"> ${name} </p>
        <img alt="This is a pokemon" src="${img}">
      </figure>`
}

export const filterByType = function (allPokemon,type) {
  let pokemonByType = allPokemon.filter(function(pokemon){
    if (pokemon.type.includes(type)){
         return pokemon
      }
    })
<<<<<<< HEAD
  return pokemonByType
}

/*const pokemonCards = allPokemon.map(function(pokemon){ 
  return pokemonCard(pokemon)
})*/

export const pokeArr = function(array){
  let newCards = array.map(function(pokemon){
    return pokemonCard(pokemon)
  })
  return newCards
}

=======
    return pokemonByType
  }
  
  export const anotherExample = () => {
    return 'OMG';
  };
  
>>>>>>> e742815e309cd8ace5140c3dfa1deabdf80e1684
