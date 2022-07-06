import {filterByType, pokeSearch, sort, computeType, allPokemon} from '../src/data.js';

describe('allPokemon', () =>{
  it('is an array of objects', ()=>{
    expect(typeof allPokemon).toBe('object')
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
    expect(pokeSearch(allPokemon, 'pid')[0]).toEqual(
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
})
