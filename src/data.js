// estas funciones son de ejemplo

//import pokemon from "./data/pokemon/pokemon";

export const pokemonCard = (pokemon) => {
  const {img, num, name} = pokemon
    return `
    <figure class="onePokemon">
        <img alt="This is a pokemon" src="${img}"><br>
        <span> ${num} </span><br>
        <span> ${name} </span><br>
      </figure>`
}

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
