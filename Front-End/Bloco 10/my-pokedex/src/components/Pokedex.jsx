import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

const myPokemon = pokemons.map((pokemon) => {
  const { id, name, type, averageWeight, image } = pokemon;
  const { value, measurementUnit } = averageWeight;
  return (
    <>
      <Pokemon id={id} name={name} type={type} measurementUnit={measurementUnit} image={image} value={value} />
    </>
  )
})

class Pokedex extends Component {
  render() {
    return <main>{myPokemon}</main>
  }
}

export default Pokedex;
