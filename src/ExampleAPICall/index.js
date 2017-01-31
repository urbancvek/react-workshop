// @flow
import React from 'react';
import axios from 'axios';

// Kreiraj komponento PokeList, ki bo pridobila podatke o pokemonih in ustvarila več
// PokeDisplay komponent. Zanima nas name, weight, xp, image.
// Prikaži sledeče pokemone 'pikachu', 'bulbasaur', 'squirtle', 'staryu'

// Tips:
// Podatke o pokemonih dobiš tako da pokličeš sledečo funkcijo
// await axios.get('http://pokeapi.co/api/v2/pokemon/pikachu');
// Response izgleda tako
/*
{
  data: {
    name,
    base_experience,
    weight,
    sprites: {
      front_default
    }
  }
}
*/


// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleAPICall = () => (
  <div>
    Tukaj vstavi ustvarjeno komponento
    {'<PokeList />'}
  </div>
);

export default ExampleAPICall;
