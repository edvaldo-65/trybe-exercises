import './components/stylePokedex.css';
import About from './components/About';
import React from 'react';
import Pokedex from './components/Pokedex';
import { Route, Link, Switch } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound'; 
// import pokemons from './data';

class App extends React.Component {
  state = {
    pokemonFavorites: [],
  }

  removePokemonFavorite = (unselectedPokemon) => {
    const { pokemonFavorites } = this.state;
    const removePokemon = pokemonFavorites.filter((pokemon) => {
      return pokemon !== unselectedPokemon;
    })
    this.setState({ pokemonFavorites: removePokemon });
  }

  addPokemonFavorite = (addPokemon) => {
    this.setState((prevstate) => {
      const { pokemonFavorites } = prevstate;
      return {
        pokemonFavorites: [...pokemonFavorites, addPokemon],
      }
    });
  }


  render() {
    const { pokemonFavorites } = this.state;

    return (
      <>
        <header>
          <img
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
            alt="Banner Pokemon"
            class="bannerPokemon"
          />
          <nav >
            <Link class="navLink" to="/">Retornar para Pokédex</Link>
            <Link class="navLink" to="/about">Sobre nós</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Pokedex />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pokemons/:id" render={(propsRouter) => {
            return <PokemonDetails 
              pokemonFavorites={ pokemonFavorites }
              addPokemonFavorite={ this.addPokemonFavorite }
              removePokemonFavorite={  this.removePokemonFavorite }
              {...propsRouter} 
            />}
        } />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App;
