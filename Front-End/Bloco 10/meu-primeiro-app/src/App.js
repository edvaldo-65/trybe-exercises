import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  
  
  render() {
    
    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }

    const compromissos = ['trabalhar', 'estudar', 'viajar', 'orar', 'filmes', 'series', 'meditar'];

    const funcMap = compromissos.map((compromisso) => {
      return Task(compromisso);
    });

    return (
      <div>
        <Header />
        <ul>{funcMap}</ul>
        <Content />
      </div>
    )
  }
}

export default App;
