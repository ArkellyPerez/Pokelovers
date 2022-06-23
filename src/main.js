import {createPokemonCard, filterByType, sortByName, createFilteredCards, pokeSearch, createModal} from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const pokemonCards = allPokemon.map(function(pokemon){ 
    return createPokemonCard(pokemon)
})

const container = document.querySelector('.pokemonContainer');
container.insertAdjacentHTML("afterbegin",pokemonCards.join(''))

let buttonInicio=document.getElementById('goPokedex');
document.getElementById("pokedex").style.display = "none";

buttonInicio.addEventListener("click", (e) => {
    e.preventDefault(); //cancela el evento por defecto
    document.getElementById("Form-Welcome").style.display = "none";//Oculta la primera vista
    document.getElementById("pokedex").style.display = "block"; //Muestra la segunda vista  
})

//Armando el modal
const pokemonModal = allPokemon.map(function(pokemon){ 
    return createModal(pokemon)
})

let insertModals = document.querySelector('.firstModalContainer')
insertModals.innerHTML = pokemonModal.join('')


let seeData = document.querySelectorAll('.onePokemon')[2];

let modalContainer = document.querySelectorAll('.modal-container')[2];
   
seeData.addEventListener('click', function(){
    modalContainer.style.display= 'block'
})

console.log(modalContainer)


//Fin del armado del modal

let selectionType = document.querySelector('.selection');
let selectedType='';

selectionType.addEventListener('change', function (){
    selectedType = this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML=pokemonCards.join('')
        } else {
            return container.innerHTML= createFilteredCards(filterByType(allPokemon, selectedType)).join('')
        } 
    }
)

//--------------Ark ordenado x nombre--------------------------------------------------------------
let sort=document.querySelector('.sort1');

sort.addEventListener('change',function(){
    let selectSort= this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML= createFilteredCards(sortByName(allPokemon,selectSort)).join('')
        } else {
            return container.innerHTML= createFilteredCards(sortByName(filterByType(allPokemon, selectedType), selectSort)).join('')
        } 
    }
)

//---------------------------------

const searchInput = document.querySelector('.card-search');

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  //console.log(inputValue);
  const result =pokeSearch(allPokemon, inputValue);
        if (inputValue.length > 0 && result.length > 0) {
            container.innerHTML= (createFilteredCards(result)).join('');
        } else if (inputValue.length > 0 && result.length === 0) {
            container.textContent = 'The data of this pokemon is not currently available';
        } else {
            container.innerHTML= (createFilteredCards(result)).join('');
        }
    }
);

//console.log(searchInput)
