import { createPokemonCard, filterByType, allPokemon } from '../src/data.js';

describe('allPokemon', () =>{
  it('objeto de pokemons', ()=>{
    expect(typeof allPokemon).toBe('object')
  })
})

describe('createPokemonCard', () => {
  it('debería ser una función', () => {
    expect(typeof createPokemonCard).toBe('function');
  });

  it('para pokemon "bulbasaur" retorna el código de su button', () => {``
    expect(createPokemonCard(allPokemon[0])).toEqual(`
    <button class="onePokemon">
      <p class=bulbasaur id="pokemonName"> 001 Bulbasaur </p>
      <img class=bulbasaur alt="This is a pokemon" src="https://www.serebii.net/pokemongo/pokemon/001.png">
    </button>`);
  });
});

describe('filterByType', () => {
  it('debería ser una función', () =>{
    expect(typeof filterByType).toBe('function')
  })
})