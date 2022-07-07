import {filterByType, pokeSearch, sort, computeType, allPokemon} from '../src/data.js';

describe('allPokemon', () =>{
  it('is an array of objects', ()=>{
    expect(typeof allPokemon).toBe('object')
  })
})

describe('filterByType', () => {
  const arcanine = allPokemon[58];
  const tentacool = allPokemon[72];
  const dratini = allPokemon[146];

  it('filterByType is a function', () =>{
    expect(typeof filterByType).toBe('function')
  })
  it('should return pokemons filter by their type', () => {
    expect(filterByType([arcanine, tentacool, dratini], 'dragon')).toEqual([dratini])
    expect(filterByType([arcanine, tentacool, dratini], 'fire')).toEqual([arcanine])
    expect(filterByType([arcanine, tentacool, dratini], 'water')).toEqual([tentacool])
  })
})

describe('computeType', () =>{
  it('computeType is a function', () => {
    expect(typeof computeType).toBe('function')
  })
  it('should return 3.19% for "fairy" type', () => {
    expect(computeType(allPokemon, 'fairy')).toBe('3.19%')
  })
})

describe('pokeSearch', () => {
  it('pokeSearch is a function', () => {
    expect(typeof pokeSearch).toBe('function')
  })
  it('should contain pidgey in the first position when you search "pid"', () => {
    expect(pokeSearch(allPokemon,'name', 'pid')[0]).toEqual(
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
  it('should return an array of pokemons', () =>{
    const pokemon = [
      {"name": "bulbasaur", "num": "001"},
      {"name": "charmander", "num": "004"},
      {"name": "squirtle", "num": "007"},
    ]
    expect(sort(pokemon, 'orderAtoZ')).toEqual([
      {"name": "bulbasaur", "num": "001"},
      {"name": "charmander", "num": "004"},
      {"name": "squirtle", "num": "007"},
    ])
    expect(sort(pokemon, 'orderZtoA')).toEqual([
      {"name": "squirtle", "num": "007"},
      {"name": "charmander", "num": "004"},
      {"name": "bulbasaur", "num": "001"},
    ])
    expect(sort(pokemon, 'sortAscending')).toEqual([
      {"name": "bulbasaur", "num": "001"},
      {"name": "charmander", "num": "004"},
      {"name": "squirtle", "num": "007"},
    ])
    expect(sort(pokemon, 'sortDescending')).toEqual([
      {"name": "squirtle", "num": "007"},
      {"name": "charmander", "num": "004"},
      {"name": "bulbasaur", "num": "001"},
    ])
  })
})
