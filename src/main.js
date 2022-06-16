import { pokemonCard, filterByType } from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const pokemonCards = allPokemon.map(function(pokemon){ 
    return pokemonCard(pokemon)
})
//console.log(pokemonCards)
const container = document.querySelector('.pokemonContainer');
container.innerHTML = pokemonCards.join('')


let ButtonInicio=document.getElementById('goPokedex');
document.getElementById("pokedex").style.display = "none";

ButtonInicio.addEventListener("click", (e) => {
    e.preventDefault(); //cancela el evento por defecto
    document.getElementById("Form-Welcome").style.display = "none";//Oculta la primera vista
    document.getElementById("pokedex").style.display = "block"; //Muestra la segunda vista  
})


let selectionType = document.querySelector('.selection');
let selectedType = ''



selectionType.addEventListener('change', function (event){
    event.preventDefault()
   selectedType = selectionType.options[selectionType.selectedIndex].value;
   }
)

console.log(selectedType)

console.log(filterByType(allPokemon, 'fire'))
