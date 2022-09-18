import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
// import { Link } from 'react-router-dom';
import { func } from 'prop-types';


class Pokedex extends Component {
  
  
  constructor() {
    super() 
    this.state = {
      index: 0,
      pokemonsList: pokemons,
      pokemonFavorites: [],
    }
  }
  
  funcGeral = () => {
    
    const funcMap = this.state.pokemonsList.map((pokemon) => {
        // const { index, pokemonsList } = this.state
      
        const { id, name, type, averageWeight: {value, measurementUnit}, image } = pokemon;
      
        return (
          <>
            <Pokemon
              id={id} 
              name={name} 
              type={type} 
              measurementUnit={measurementUnit} 
              image={image} 
              value={value}
            />
          </>
        )
      }
      );
    return funcMap

  }

  alteraEstado = (param) => {
    if (!param) {
     return this.setState({pokemonsList: pokemons})
    }
    const pokemonsFiltered = pokemons.filter(({ type }) => type === param);
    this.setState({pokemonsList: pokemonsFiltered})
  }
  
  render() {
    // const { funcPokemonFavorites } = this.props;
    // const { pokemonFavorites } = this.state;
    // funcPokemonFavorites(pokemonFavorites);
    return (
      <main>
      <h1>Pokédex</h1>
      <div>   
        <button onClick={() => this.alteraEstado()}>Todos os Pokemons</button>
        <button onClick={() => this.alteraEstado('Electric')}>Electric</button>
        <button onClick={() => this.alteraEstado('Fire')}>Fire</button>
        <button onClick={() => this.alteraEstado('Poison')}>Poison</button>
        <button onClick={() => this.alteraEstado('Bug')}>Bug</button>
        <button onClick={() => this.alteraEstado('Psychic')}>Psychic</button>
        <button onClick={() => this.alteraEstado('Normal')}>Normal</button>
        <button onClick={() => this.alteraEstado('Dragon')}>Dragon</button>
        </div>
        <div>
        {this.funcGeral()}
      </div>
      </main>
    )
  }
}

Pokedex.propTypes = {
  funcPokemonFavorites: func.isRequired,
}

export default Pokedex;
