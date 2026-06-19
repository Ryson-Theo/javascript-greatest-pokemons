// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemonsArray) {
  return pokemonsArray.filter(pokemon => pokemon.type.includes('Fire'));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;

  let shortest = pokemonsArray[0];
  let minHeight = parseFloat(shortest.height);

  pokemonsArray.forEach(pokemon => {
    const currentHeight = parseFloat(pokemon.height);
    if (currentHeight < minHeight) {
      minHeight = currentHeight;
      shortest = pokemon;
    }
  });

  return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;

  let totalCandy = 0;
  let count = 0;

  pokemonsArray.forEach(pokemon => {
    if (typeof pokemon.candy_count === 'number') {
      totalCandy += pokemon.candy_count;
      count++;
    }
  });

  if (count === 0) return 0;
  const average = totalCandy / pokemonsArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;
  const groundPokemons = pokemonsArray.filter(pokemon => pokemon.type.includes('Ground'));
  return groundPokemons.map(pokemon => pokemon.img).slice(0, 10);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemonsArray) {
  if (pokemonsArray.length === 0) return 0;

  const pikachu = pokemonsArray.find(pokemon => pokemon.name === 'Pikachu');
  if (!pikachu) return [];

  const pikachuWeight = parseFloat(pikachu.weight);

  const heavyPokemons = pokemonsArray.filter(pokemon => {
    return parseFloat(pokemon.weight) > pikachuWeight;
  });

  return heavyPokemons.map(pokemon => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemonsArray) {
  const names = pokemonsArray.map(pokemon => pokemon.name);
  names.sort((a, b) => a.localeCompare(b));
  return names.slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemonsArray) {
  const strongOnes = pokemonsArray.filter(pokemon => pokemon.weaknesses && pokemon.weaknesses.length === 1);
  return strongOnes.map(pokemon => pokemon.name).slice(0, 15);
}

if (typeof module !== 'undefined') {
  module.exports = {
    getAllFirePokemons,
    shortestPokemon,
    candyAverage,
    getGroundPokeImg,
    getHeavyPokemons,
    orderAlphabetically,
    strongPokemons
  };
}