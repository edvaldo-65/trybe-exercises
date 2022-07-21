import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer"
import './style.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['caminhar', 'EXERCITAR', 'trabalhar', 'pagar conta', 'dar um xêro em Vini'];

const missao = array.map((tarefa) => {
  return Task(tarefa);
})

class App extends React.Component {
  render() {
    return (
      <>
        <h1>My first React Class Component!</h1>
        <ol className="task"> {missao} </ol>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}



export default App;
