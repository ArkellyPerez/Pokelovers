import { filterByType, sort, pokeSearch, computeType, allPokemon} from './data.js';

//import data from './data/pokemon/pokemon.js';

//const allPokemon = data.pokemon //Data de todos los pokemon y características

const container = document.querySelector('.pokemonContainer'); //Contenedor donde van las cartas de pokemon

const selectionType = document.querySelector('.selectionByType'); //Selector para elegir por que tipo filtrar

const sortPoke=document.querySelector('.sort'); //Selector para elegir como ordenar

const searchInput = document.querySelector('.card-search'); //Input para buscar

const goPokedex = document.getElementById("goPokedex"); //Botón de inicio

const percentagesByPokemon = document.querySelector(".percentage"); //Párrafo que muestra el porcentaje

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

const createPokemonCard = function(pokemon) { //Recibe un objeto del array y crea un string de código
    const {img, num, name} = pokemon //Se accede a la imagen, número y nombre del Pokemon
      return `
      <button class="onePokemon">
        <p class=${num} id="pokemonName"> ${num} ${name.charAt(0).toUpperCase()+ name.slice(1)} </p>
        <img class=${num} alt=${name} src="${img}">
      </button>`
  }

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

const createFilteredCards = function(filterArr){
    let newCards = filterArr.map(function(pokemon){
      return createPokemonCard(pokemon)
    })
   return newCards
 }

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
            container.innerHTML= createFilteredCards(filteredArr).join('');
            sortPoke.selectedIndex=0         
        }
    }
)

//Función para ordenar los pokemon
sortPoke.addEventListener('change',function(){
    let selectSort= this.options[this.selectedIndex].value;
        if(selectedType === ""){
           container.innerHTML= createFilteredCards(sort(allPokemon, selectSort)).join('')
        } else {
            let filteredArr = filterByType(allPokemon, selectedType)    
           container.innerHTML= createFilteredCards(sort(filteredArr, selectSort)).join('')
        }      
    }    
)

//Función para la barra de búsqueda por nombre
searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  const result =pokeSearch(allPokemon,'name', inputValue);
        if (inputValue.length > 0 && result.length > 0) {
            container.innerHTML= (createFilteredCards(result)).join('');
            document.querySelector('.pikGif').style.display = "none";
        } else if (inputValue.length > 0 && result.length === 0) {
            container.textContent = 'The data of this pokemon is not currently available';
            document.querySelector('.pikGif').style.display = "flex"; 
        } else {
            container.innerHTML= (createFilteredCards(result)).join('');
            document.querySelector('.pikGif').style.display = "none";
        }
    }
);

const createModal = function(pokemon){
    const {num, name, size:{height, weight}, encounter, img, type, generation, about, resistant, weaknesses} = pokemon;
    return `
    <button id="close">X</button>
    <p id=pokemonNameInModal>${num} ${name.charAt(0).toUpperCase()+ name.slice(1)}</p>
    <div class="tableAndPokemon">
      <table class="statsPokemon">
        <tr class="height">
          <th>Height</th>
          <td>${height}</td>
        </tr>
        <tr class="weight">
          <th>Weight</th>
          <td>${weight}</td>
        </tr>
        <tr class="spawn-chance">
          <th>Spawn chance</th>
          <td>${(pokemon['spawn-chance']*100).toFixed(2)+"%"}</td>
        </tr>
        <tr class="base-flee-rate">
          <th>Base flee rate</th>
          <td>${(encounter['base-flee-rate']*100).toFixed(2)+"%"}</td>
        </tr>
        <tr class="base-capture-rate">
          <th>Base capture rate</th>
          <td>${(encounter['base-capture-rate']*100).toFixed(2)+"%"}</td>
        </tr>
      </table>
      <div class="imgAndType">
        <img alt="This is a pokemon" src=${img}>
        <p> Type: ${type} </p>
        <p> ${generation.num.charAt(0).toUpperCase()+ generation.num.slice(1)}: ${generation.name.charAt(0).toUpperCase()+ generation.name.slice(1)}</p>
      </div>
    </div>
    <p>${about}</p>
    <p>Resistant: ${resistant}</p>
    <p>Weaknesses: ${weaknesses}</p>`
  }

//Creación del modal
container.addEventListener('click', function(event){
    let target=event.target;
      //  console.log(target.className);
    if(target.className === 'pokemonContainer'|| target.className ==='onePokemon') {
        return
    } else {
        document.querySelector(".modal").style.display = "block";    
        let selectedPokemon = pokeSearch(allPokemon,'num',target.className);
        //console.log(selectedPokemon);
        modalContainer.innerHTML=createModal(selectedPokemon[0]);  
    }
    
    let close= document.getElementById('close');
    close.addEventListener('click', function(){
            document.querySelector(".modal").style.display = "none"
        }
    );
  }
)