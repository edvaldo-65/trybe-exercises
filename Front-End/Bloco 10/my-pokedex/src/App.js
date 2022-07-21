import './components/stylePokedex.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import FancyButton from './components/fancy-buttons';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pokedéx de Vinícius e Edvaldo</h1>
        <Pokedex />
        <FancyButton />
      </>
    )
  }
}
export default App;
