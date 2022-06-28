import { createPokemonCard, filterByType } from '../src/data.js';

describe('createPokemonCard', () => {
  it('debería ser una función', () => {
    expect(typeof createPokemonCard).toBe('function');
  });

  it('para pokemon "bulbasaur" retorna el código de su figure', () => {
    expect(createPokemonCard('')).toBe('<figure class="pokemonCard" id= "bulbasaur"> <p id="pokemonData"> 001 bulbasaur </p> <img alt="This is a pokemon" src="https://www.serebii.net/pokemongo/pokemon/001.png/> </figure>');
  });
});

describe('filterByType', () => {
  it('debería ser una función', () =>{
    expect(typeof filterByType).toBe('function')
  })
})