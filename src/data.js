// estas funciones son de ejemplo

export const allPokemon = (data) => {
  const pokemon = []
  for (let i=0; i<data.length; i++){
    pokemon.push(data[i]);
  }
  return pokemon
}

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
