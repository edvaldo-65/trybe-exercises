function limite_textarea(valor) {
    quant = 500;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
}



// var counterVal = 0;

// function incrementClick() {
//     updateDisplay(++counterVal);
// }

// function resetCounter() {
//     counterVal = 0;
//     updateDisplay(counterVal);
// }

// function updateDisplay(val) {
//     document.getElementById("counter-label").innerHTML = val;
// }
