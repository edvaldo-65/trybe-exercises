import React, { Component } from 'react';
import pokemons from '../data';

class PokemonDetails extends Component {
  state = {
    isFavorite: false,
    filteredPokemon: '',
  }
  
  isOrNotChecked = () => {
    const { removePokemonFavorite, addPokemonFavorite } = this.props;
    const { isFavorite, filteredPokemon } = this.state;
    this.setState({ isFavorite: !isFavorite });
    if (isFavorite) {
      return addPokemonFavorite(filteredPokemon);
    }
    return removePokemonFavorite(filteredPokemon);
  }

  render() {
    const {
      pokemonFavorites,
      match: {
        params: { id },
      },
    } = this.props;

    const filteredPokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    // console.log(filteredPokemon);
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      moreInfo,
      summary,
      image,
      foundAt,
    } = filteredPokemon;

    this.setState({ filteredPokemon: filteredPokemon });

    const { isFavorite } = this.state;


    return (
      <section>
        <h1>Pokémon Details</h1>
        <img src={image} alt={name} />
        <p> Nome: {name}</p>
        <p> Tipo: {type}</p>
        <p> Peso: {value} {measurementUnit}</p>
        <p>Sumário: {summary}</p>
          <h2>Mapas do Pokémon:</h2>
        <ul class="ulMaps">
          {/* <section> */}
            {foundAt.map(({ location, map }, index) => {
              return (
                <li  class="maps" key={index}>
                  <p>{location}</p>
                  <section>
                    <img src={map} alt={location} />
                  </section>
                </li>
              )
            })}
        {/* </section> */}
        </ul>
        <div>
        <label 
          htmlFor="favorite"
        >
          Pokémon Favoritado?
          <input
            type="checkbox"
            onClick={ this.isOrNotChecked }
            checked={ isFavorite } 
            id="favorite"
          />
        </label>
        </div>
        <a href={ moreInfo } target="blank" >Para mais informações <em>Clique aqui</em></a>
        { isFavorite && pokemonFavorites.push(filteredPokemon) }
      </section>

    )
  }
}

export default PokemonDetails;
