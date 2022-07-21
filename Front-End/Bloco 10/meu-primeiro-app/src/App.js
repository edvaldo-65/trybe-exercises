import React from 'react';
import './App.css';
import Header from './Header'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['trabalhar', 'estudar', 'viajar', 'orar', 'filmes', 'series', 'meditar'];
const funcMap = compromissos.map((compromisso) => {
  return Task(compromisso);
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ul>{funcMap}</ul>
      </div>
    )
  }
}

export default App;
