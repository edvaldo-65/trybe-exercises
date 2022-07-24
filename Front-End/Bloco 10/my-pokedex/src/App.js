import './components/stylePokedex.css';
import React from 'react';
import Pokedex from './components/Pokedex';


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pokedéx de Vinícius Edvaldo e Terezinha</h1>
        <Pokedex />
      </>
    )
  }
}
export default App;
