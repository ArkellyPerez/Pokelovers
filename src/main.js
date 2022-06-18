import { pokemonCard, filterByType,sortByName, pokeArr } from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const pokemonCards = allPokemon.map(function(pokemon){ 
    return pokemonCard(pokemon)
})



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
let selectedType=''; // Ark declarar la variable fuera

selectionType.addEventListener('change', function (){
    selectedType = this.options[this.selectedIndex].value;
    if(selectedType === ""){
           return container.innerHTML=pokemonCards.join('')
      
    } else {
       return container.innerHTML= pokeArr(filterByType(allPokemon, selectedType)).join('')
    } 
   }
)
//--------------Ark orfenado x nombre--------------------------------------------------------------
let Sort=document.querySelector('.ButtonSortClass');
Sort.addEventListener("click",function(){
    if(selectedType === ""){
        return container.innerHTML= pokeArr(sortByName(allPokemon)).join('')
    }else {
        return container.innerHTML= pokeArr(sortByName(filterByType(allPokemon, selectedType))).join('')
    }
  } 
)

