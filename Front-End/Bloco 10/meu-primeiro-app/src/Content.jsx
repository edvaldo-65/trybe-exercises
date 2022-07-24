import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {

  task2 = (param) => {
  return <li>{param}</li>
  }

  searchParam = conteudos.map((param) => {
  return this.task2(param.conteudo);
  });

  render() {
    return (
      <>
      <h1>Conteúdo de Front-End -2</h1>
      <ul>{this.searchParam}</ul>
      </>
    )
  };
}

export default Content;
