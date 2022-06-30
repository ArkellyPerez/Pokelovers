import { createPokemonCard, filterByType, allPokemon, pokeSearch } from '../src/data.js';

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


describe('pokeSearch', () =>{
  it('debe ser una función', ()=>{
    expect(typeof pokeSearch).toBe('function')
  })
});

it('cuando se busque pid en el buscador debe contener pidgey', () => {
expect(pokeSearch(allPokemon, "pid")[0]).toEqual(
  expect.objectContaining({
    name: "pidgey"
    })
  )
})


