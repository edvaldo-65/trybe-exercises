import React from 'react';

function handleClick() {
   console.log('Clicou no botão');
}

function handleClick2() {
    console.log('Clicou no botão 2');
}

function handleClick3() {
    console.log('Clicou no botão 3');

}

class FancyButton extends React.Component {
    render() {
        return (
            <>
            <button onClick={handleClick}>Meu botão</button>
            <button onClick={handleClick2}>Meu botão2</button> 
            <button onClick={handleClick3}>Meu botão3</button>              
            </>

        )
    }
}
export default FancyButton;
