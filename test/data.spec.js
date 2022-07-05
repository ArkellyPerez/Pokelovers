import {createPokemonCard, createModal, filterByType, createFilteredCards, pokeSearch, sort, computeType, allPokemon} from '../src/data.js';

describe('allPokemon', () =>{
  it('is an array of objects', ()=>{
    expect(typeof allPokemon).toBe('object')
  })
})

describe('createPokemonCard', () => {
  it('createPokemonCard is a function', () => {
    expect(typeof createPokemonCard).toBe('function');
  });

  it('para pokemon "bulbasaur" retorna el código de su button', () => {
    expect(createPokemonCard(allPokemon[0])).toEqual(`
    <button class="onePokemon">
      <p class=bulbasaur id="pokemonName"> 001 Bulbasaur </p>
      <img class=bulbasaur alt="This is a pokemon" src="https://www.serebii.net/pokemongo/pokemon/001.png">
    </button>`);
  });
});

describe('createModal', () => {
  it('createModal is a function', () => {
    expect(typeof createModal).toBe('function')
  })
})

describe('filterByType', () => {
  it('filterByType is a function', () =>{
    expect(typeof filterByType).toBe('function')
  })
  it('el tipo "dragon" debe contener a Dratini', () => {
    expect(filterByType(allPokemon, 'dragon')[0]).toEqual(
      expect.objectContaining({
        name: 'dratini'
      })
    )
  })
})

describe('createFilteredCards', () => {
  it('createFilteredCards is a function', () => {
    expect(typeof createFilteredCards).toBe('function')
  })
  it('para el pokemon "lapras" devuelve el código de su botón', ()=>{
    expect(createFilteredCards(filterByType(allPokemon, 'ice'))[3]).toEqual(`
    <button class="onePokemon">
      <p class=lapras id="pokemonName"> 131 Lapras </p>
      <img class=lapras alt="This is a pokemon" src="https://www.serebii.net/pokemongo/pokemon/131.png">
    </button>`)
  })
})

describe('computeType', () =>{
  it('computeType is a function', () => {
    expect(typeof computeType).toBe('function')
  })
  it('para el tipo "fairy" debería retornar 3.19%', () => {
    expect(computeType(allPokemon, 'fairy')).toBe('3.19%')
  })
})

describe('pokeSearch', () => {
  it('pokeSearch is a function', () => {
    expect(typeof pokeSearch).toBe('function')
  })
  it('cuando se busque pid en el buscador debe contener pidgey', () => {
    expect(pokeSearch(allPokemon,"name", 'pid')[0]).toEqual(
      expect.objectContaining({
        name: 'pidgey'
      })
    )
  })
})

describe('sort', () => {
  it('sort is a function', () => {
    expect(typeof sort).toBe('function')
  })
  it('Ordena segun lo fultrado', () => {
    expect(pokeSearch(allPokemon, 'pid')[0]).toEqual(
      expect.objectContaining({
        name: 'pidgey'
      })
    )
  })

})
