import {createPokemonCard, filterByType, sort, createFilteredCards, pokeSearch, createModal, computeType, allPokemon} from './data.js';

//import data from './data/pokemon/pokemon.js';

//const allPokemon = data.pokemon //Data de todos los pokemon y características

const container = document.querySelector('.pokemonContainer'); //Contenedor donde van las cartas de pokemon

const selectionType = document.querySelector('.selectionByType'); //Selector para elegir por que tipo filtrar

const sortPoke=document.querySelector('.sort'); //Selector para elegir como ordenar

const searchInput = document.querySelector('.card-search'); //Input para buscar

const goPokedex = document.getElementById("goPokedex"); //Botón de inicio

const percentagesByPokemon = document.querySelector(".percentage");

const modalContainer = document.querySelector('.modalContainer'); //Contenedor donde van los modales

goPokedex.addEventListener('click', (event) => {
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    if(userName != ''){
        document.querySelector(".formWelcome").style.display = "none";
        document.getElementById("pokedex").style.display = "block"; 
        document.getElementById("greetings").innerHTML = "Welcome, " + userName + "!"
    } else {
        document.getElementById('nameMessage').style.visibility = 'visible'
        document.getElementById('nameMessage').innerHTML='Please, enter your name'
    }
})

//Función para crear las cartas de pokemon
const pokemonCards = allPokemon.map(function(pokemon){ 
    return createPokemonCard(pokemon)
})

container.insertAdjacentHTML("afterbegin", pokemonCards.join(''))

window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.go-top-container').classList.add('show')
    } else {
        document.querySelector('.go-top-container').classList.remove('show')  
    }
};

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

let selectedType='';

//Función para filtrar por tipo
selectionType.addEventListener('change', function (){
    selectedType = this.options[this.selectedIndex].value;
    percentagesByPokemon.innerHTML= "Percentage of pokemons with this type: " + computeType(allPokemon, selectedType)  
        if(selectedType === ""){
            container.innerHTML=pokemonCards.join('');
            percentagesByPokemon.innerHTML = ''
        } else {
            let filteredArr = filterByType(allPokemon, selectedType)
            container.innerHTML= createFilteredCards(filteredArr).join('')           
        }
    }
)

//Función para ordenar los pokemon
sortPoke.addEventListener('change',function(){
    let selectSort= this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML= createFilteredCards(sort(allPokemon,selectSort)).join('')
        } else {
            let filteredArr = filterByType(allPokemon, selectedType)    
            return container.innerHTML= createFilteredCards(sort(filteredArr, selectSort)).join('')
        }      
    }    
)
//Función para la barra de búsqueda por nombre
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

//Creación del modal
container.addEventListener('click', function(event){
    let target=event.target;
        console.log(target.className);
    if(target.className === 'pokemonContainer'|| target.className ==='onePokemon') {
        return
    } else {
        document.querySelector(".modal").style.display = "block";    
        let selectedPokemon = pokeSearch(allPokemon, target.className);
        modalContainer.innerHTML=createModal(selectedPokemon[0]);
    }
    
    let close= document.getElementById('close');
    close.addEventListener('click', function(){
            document.querySelector(".modal").style.display = "none"
        }
    );
  }
)