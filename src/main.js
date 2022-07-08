import { filterByType, sort, pokeSearch, computeType, allPokemon} from './data.js';

const goToPokedex = document.getElementById("goPokedex"); //Botón de inicio
const inputSearch = document.querySelector('.card-search'); //Input para buscar
const selectionType = document.querySelector('.selectionByType'); //Selector para elegir por que tipo filtrar
const sortPokemon=document.querySelector('.sortData'); //Selector para elegir como ordenar
const percentagesByPokemon = document.querySelector(".percentage"); //Párrafo que muestra el porcentaje
const cardsContainer = document.querySelector('.cardsContainer'); //Contenedor donde van las cartas de pokemon
const modalContainer = document.querySelector('.modalContainer'); //Contenedor donde van los modales

//Botón para ingresar a la segunda vista
goToPokedex.addEventListener('click', (event) => {
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    if(userName != ''){
        document.querySelector(".formWelcome").style.display = "none";
        document.getElementById("pokedex").style.display = "block"; 
        document.getElementById("greetings").innerHTML = "Welcome, " + userName + "!";
    } else {
        document.getElementById('nameMessage').style.visibility = 'visible';
        document.getElementById('nameMessage').innerHTML='Please, enter your name';
    }
})
//Función para crear la carta de un pokemon
const createPokemonCard = function(pokemon) {
  const {img, num, name} = pokemon
    return `
      <button class="onePokemon">
        <p class=${num} id="pokemonName"> ${num} ${name.charAt(0).toUpperCase()+ name.slice(1)} </p>
        <img class=${num} alt=${name} src="${img}">
      </button>`  
}
//Función para iterar y crear las cartas de todos los pokemon
const pokemonCards = allPokemon.map(function(pokemon){ 
    return createPokemonCard(pokemon)
}) 

cardsContainer.insertAdjacentHTML("afterbegin", pokemonCards.join(''))

//Mostrar y ocultar botón de regresar arriba
window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.goTopContainer').classList.add('show')
    } else {
        document.querySelector('.goTopContainer').classList.remove('show')  
    }
};
//Botón de regresar arriba
document.querySelector('.goTopContainer').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
//Función para crear el string de código de las cartas filtradas
const createFilteredCards = function(filterArray){
    let newCards = filterArray.map(function(pokemon){
      return createPokemonCard(pokemon)
    })
   return newCards
}

let selectedType='';

//Función para filtrar por tipo
selectionType.addEventListener('change', function (){
    selectedType = this.options[this.selectedIndex].value;
    percentagesByPokemon.innerHTML= "Percentage of pokemons with this type: " + computeType(allPokemon, selectedType); 
        if(selectedType === ""){
            cardsContainer.innerHTML=pokemonCards.join('');
            percentagesByPokemon.innerHTML = '';
        } else {
            let filteredArray = filterByType(allPokemon, selectedType);
            cardsContainer.innerHTML= createFilteredCards(filteredArray).join('');
            sortPokemon.selectedIndex=0;
        }
    }
)

//Función para ordenar los pokemon
sortPokemon.addEventListener('change',function(){
  let selectSort= this.options[this.selectedIndex].value;
    if(selectedType === ""){
       cardsContainer.innerHTML= createFilteredCards(sort(allPokemon, selectSort)).join('');
    } else {
      let filteredArr = filterByType(allPokemon, selectedType);
      cardsContainer.innerHTML= createFilteredCards(sort(filteredArr, selectSort)).join('');
    }      
  }    
)

//Función para la barra de búsqueda por nombre
inputSearch.addEventListener('input', () => {
  const inputValue = inputSearch.value.toLowerCase();
  const result =pokeSearch(allPokemon,'name', inputValue);
    if (inputValue.length > 0 && result.length > 0) {
      cardsContainer.innerHTML= (createFilteredCards(result)).join('');
      document.querySelector('.gif').style.display = "none";
    } else if (inputValue.length > 0 && result.length === 0) {
      percentagesByPokemon.innerHTML= '';
      cardsContainer.textContent = 'The data of this pokemon is not currently available';
      document.querySelector('.gif').style.display = "flex";
      sortPokemon.selectedIndex=0;
      selectionType.selectedIndex=0;
    } else {
      cardsContainer.innerHTML= (createFilteredCards(result)).join('');
      document.querySelector('.gif').style.display = "none";
    }
  }
);

//Función para crear el modal
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

//Mostrar el modal
cardsContainer.addEventListener('click', function(event){
    let target=event.target;
    if(target.className === 'cardsContainer'|| target.className ==='onePokemon') {
        return
    } else {
        document.querySelector(".modal").style.display = "block";    
        let selectedPokemon = pokeSearch(allPokemon,'num',target.className);
        modalContainer.innerHTML=createModal(selectedPokemon[0]);  
    }
    let close= document.getElementById('close');
    close.addEventListener('click', function(){
            document.querySelector(".modal").style.display = "none"
        }
    );
  }
)