import React, { Component } from 'react';

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
const conteudo = conteudos.map((obj, index) => {
  return (
    <div key={index} className="task learning">
      <p>O conteúdo é: {obj.conteudo}</p>
      <p>Status: {obj.status}</p>
      <p>Bloco: {obj.bloco}</p>
    </div>
  )
});

class Content extends Component {
  render() {
    return <div>{conteudo}</div>;
  }
}

export default Content;
