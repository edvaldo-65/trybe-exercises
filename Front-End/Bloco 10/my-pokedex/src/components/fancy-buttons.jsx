import React from 'react';


function handleClick2() {
    console.log('Clicou no botão 2');
}

function handleClick3() {
    console.log('Clicou no botão 3');
    
}

class FancyButton extends React.Component {
constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.state = {
        numeroDeClicks: 0
    }
    // console.log('Eu aqui desmistificando o constructor')
}
 handleClick1() {
    console.log(this);
       console.log('Clicou no botão 1');
    }
    render() {
        console.log(this);
        return (
            <>
            <button onClick={this.handleClick1}>Meu botão1</button>
            <button onClick={handleClick2}>Meu botão2</button> 
            <button onClick={handleClick3}>Meu botão3</button>              
            </>

        )
    }
}
export default FancyButton;
