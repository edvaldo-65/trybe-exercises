// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>


let a = document.getElementById('pai');
console.log(a);

let newSection = document.createElement('section');

console.log(newSection);
newSection.className = ' circle small green';

a.appendChild(newSection);
// a.parentElement.style.color = 'red'
// a.nextElementSibling.innerText = 'Minha primeira Mudança'
// a.nextElementSibling
// a.nextElementSibling.nextElementSibling

// let b = document.getElementById('pai')

// document.body.onload = adcElemento;

// function adcElemento () {
//   // cria um novo elemento div
//   // e dá à ele conteúdo
//   var divNova = document.createElement("div");
//   var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
//   divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
// //   let a = document.getElementById("div1");
//   document.body.insertBefore(divNova, divAtual);
// }







// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.



// 🚀 E a prática? Aqui!

//     Crie um irmão para elementoOndeVoceEsta.
//     Crie um filho para elementoOndeVoceEsta.
//     Crie um filho para primeiroFilhoDoFilho.
//     A partir desse filho criado, acesse terceiroFilho.
