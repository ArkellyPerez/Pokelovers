import { pokemonCard, filterByType, pokeArr } from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const pokemonCards = allPokemon.map(function(pokemon){ 
    return pokemonCard(pokemon)
})



const container = document.querySelector('.pokemonContainer');
container.innerHTML = pokemonCards.join('')


let buttonInicio=document.getElementById('goPokedex');
document.getElementById("pokedex").style.display = "none";

buttonInicio.addEventListener("click", (e) => {
    e.preventDefault(); //cancela el evento por defecto
    document.getElementById("Form-Welcome").style.display = "none";//Oculta la primera vista
    document.getElementById("pokedex").style.display = "block"; //Muestra la segunda vista  
})


let selectionType = document.querySelector('.selection');

selectionType.addEventListener('change', function (){
   let selectedType = this.options[this.selectedIndex].value;
    if(selectedType === ""){
        return container.innerHTML=pokemonCards.join('')
    } else {
    container.innerHTML= pokeArr(filterByType(allPokemon, selectedType)).join('')
    } 
   }
)
