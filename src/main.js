//import { allPokemon } from './data.js';

import data from './data/pokemon/pokemon.js';

document.getElementById('exampleButton').addEventListener('click',function(){
    
})

const allPokemon = data.pokemon
function pokemonName(){
    let allPokemonName = [''];
    for (let i=0;i<allPokemon.length;i++){
      allPokemonName += allPokemon[i].name;
    }
    return allPokemonName;
}


console.log(allPokemon)
console.log(pokemonName())

