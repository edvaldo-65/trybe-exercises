import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';


class Pokedex extends Component {

  // constructor() {
  //   super() 
  //   // this.funcMap = this.funcMap.bind(this);
  // }
  
  funcMap = (pokemon) => {
    
    const { id, name, type, averageWeight: {value, measurementUnit}, image } = pokemon;
  
    return (
      <>
        <Pokemon id={id} 
        name={name} 
        type={type} 
        measurementUnit={measurementUnit} 
        image={image} 
        value={value} />
      </>
    )
  };
  
  render() {
    -
    const myPokemons = pokemons.map(this.funcMap)
    
    return <main>{myPokemons}</main>
  }
}

export default Pokedex;
