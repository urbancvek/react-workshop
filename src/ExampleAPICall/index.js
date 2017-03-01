// @flow
import { autobind } from 'core-decorators';
import React, { Component } from 'react';
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
type PokemonType = {
  name: string,
  image: string,
  weight: number,
  xp: number,
};

const PokeDisplay = ({ pokemon }: PokeDisplayProps) => (
  <div style={{ display: 'flex', border: 'solid 1px black', margin: 10 }}>
    <img src={pokemon.image} alt={pokemon.name} />
    <div>
      <h1>{pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</h1>
      <p>Weight: {pokemon.weight} lbs</p>
      <p>Experience: {pokemon.xp} XP</p>
    </div>
  </div>
);

type PokeDisplayProps = {
  pokemon: PokemonType,
};

@autobind
class PokeList extends Component {
  props: Props;
  state: State;

  state: State = {
    pokemons: [],
  };

  componentDidMount() {
    this.props.pokemons.forEach(this.fetchPokemon);
  }

  async fetchPokemon(pokemonName: string) {
    try {
      const response = await axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      const { name, base_experience, weight, sprites: { front_default } } = response.data;
      const pokemon = {
        name,
        image: front_default,
        weight,
        xp: base_experience,
      };

      this.setState({ pokemons: [...this.state.pokemons, pokemon] });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (!this.state.pokemons) return <div>Fetching POKEmons!</div>;

    return (
      <div>
        {this.state.pokemons.map(pokemon => <PokeDisplay key={pokemon.name} pokemon={pokemon} />)}
      </div>
    );
  }
}

type Props = {
  pokemons: Array<string>,
};

type State = {
  pokemons: Array<PokemonType>,
};

// Ustvarjene komponente uporabi v spodnji komponenti
const ExampleAPICall = () => (
  <div>
    <PokeList pokemons={['pikachu', 'bulbasaur', 'squirtle', 'staryu']} />
  </div>
);

export default ExampleAPICall;
