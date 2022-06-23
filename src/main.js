import {createPokemonCard, filterByType, sort, createFilteredCards, pokeSearch, createModal} from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const container = document.querySelector('.pokemonContainer');

let selectionType = document.querySelector('.selectionByType');

let sortPoke=document.querySelector('.sort');

const searchInput = document.querySelector('.card-search');

document.getElementById('goPokedex').addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".formWelcome").style.display = "none";
    document.getElementById("pokedex").style.display = "block";
})

const pokemonCards = allPokemon.map(function(pokemon){ 
    return createPokemonCard(pokemon)
})

container.insertAdjacentHTML("afterbegin",pokemonCards.join(''))

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

sortPoke.addEventListener('change',function(){
    let selectSort= this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML= createFilteredCards(sort(allPokemon,selectSort)).join('')
        } else {
            return container.innerHTML= createFilteredCards(sort(filterByType(allPokemon, selectedType), selectSort)).join('')
        } 
    }
)

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
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

//Fin del armado del modal