// function userInfo() {
// const userEmail = 'maria@email.com';

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
// }
//   userInfo();

// if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

//   if (true) {
//     // inicio do escopo do if
//     const userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20
// let userName = 'Isabella';
// let userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology);

// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
//   };

//   userInfo.name = 'João';
//   userInfo.id = 'João';
//   userInfo.email = 'João';


//   console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//   const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);

// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`);

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');
// const printName = {
//        nome: Edvaldo Alves do Nascimento,

//     }

//     return myName;
// //   };

//   console.log(printName());
// function limite_textarea(character) {
//     amount = 500;
//     total = character.length;
//     if(total <= amount) {
//         rest = amount - total;
//         document.getElementById('counter').innerHTML = rest;
//     } else {
//         document.getElementById('textarea').value = character.substr(0,amount);
// //     }
// // }

// let str = 'Mozilla';

// console.log(str.substr(1, 2));
// // expected output: "oz"

// console.log(str.substr(0));
// // expected output: "zilla"

// let counter = document.getElementById('counter');
// let characters = document.getElementById('textarea');
// function limiteTextarea(character) {    
//    const total = character.length;
//     if (total <= 500) {
//       const rest = 500 - total;
//       counter.innerHTML = rest;
//     } else {
//       characters.value = character.substr(0, 500);
//     }
//     characters.addEventListener('keyup',limiteTextarea());
// }

// function limite_textarea(valor) {
//     quant = 50;
//     total = valor.length;
//     if(total <= quant) {
//         resto = quant - total;
//         document.getElementById('cont').innerHTML = resto;
//     } else {
//         document.getElementById('texto').value = valor.substr(0,quant);
//     }
// }
// document.getElementById('texto').addEventListener('keyup',limite_textarea);

// const comment = document.querySelector('#textarea');
// const result = document.querySelector('#counter');
// comment.addEventListener('keyup',(event)=> {
//     let subtracion = (event.target.maxLength) - (event.target.textLength);
//     result.innerHTML = `Máximo de caracteres: ${subtracion}`;
//     // console.log(event.target.maxLength);
// })
// const main = document.getElementById('textarea')
// main.onsubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(main);

//     console.log("Form Data");
//     for (let obj of formData) {
//       console.log(obj);
//     }
//   };
// const btn = document.querySelector('#submit');
// const form = document.querySelector('#subscription');


// btn.addEventListener('click', (e) => {
//     // prevent the form from submitting
//     e.preventDefault();

//     // show the form values
//     const formData = new FormData(form);
//     const values = [...formData.entries()];
//     console.log(values);
// 
// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');


// const printName = function () {
//     const myName = 'Lucas';
//     return myName;
//   };

//   console.log(printName());

//   const printName = () => {
//     const myName = 'Lucas';
//     return myName;
//   };

//   console.log(printName());

//   const printName = () => 'Lucas';
//   console.log(printName());

// Mas lembre-se que podemos omitir os parênteses apenas em um cenário:

// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// // Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:
// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

// const trueExpression = (2 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression);

// const checkTernary = (age) => 
//    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;

// // const checkIfElse = (age) => {
// //     if (age >= 18) {
// //       return `Você tem idade para dirigir!`;
// //     } else {
// //       return `Você ainda não tem idade para dirigir...`;
// //     }
// //   };

//   console.log(checkTernary(17));

//   const checkTernary = (fruit) => (fruit === 'maçã') ? `Essa fruta é vermelha`
//   : ((fruit === 'banana') ? `Esta fruta é amarela` : `Não sei a cor`);

//   console.log(checkTernary('banana'));

// const nome = 'Trybe';
// const lema = 'VQV';

// console.log(`${nome}, melhor escola de tecnologia! ${lema}!`);

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);



//   🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

//   Modifique a estrutura da função para que ela seja uma arrow function;
//   Modifique as variáveis para que respeitem o escopo onde estão declaradas;
//   Modifique as concatenações para template literals.

// ,

// // const list = oddsAndEvens.sort(function(a, b) {
// //     return a - b;
// });

// var x = 12.1;
// if(x % 1 === 0) {
//     console.log("É inteiro");
// } else {
//     console.log("É float");
// }
// console.log(x % 1); // .19999



// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// Seu código aqui.

// console.log(list); // será necessário alterar essa linha 😉
//initialising a variable name data

// let data = 0;

// //printing default value of data that is 0 in h2 tag
// document.getElementById("counting").innerText = data;

// //creation of increment function
// function increment() {
//     data = data + 1;
//     document.getElementById("counting").innerText = data;
// }
// //creation of decrement function
// function decrement() {
//     data = data - 1;
//     document.getElementById("counting").innerText = data;
// }
function changeName(nome) {
    let frase = 'Tryber x aqui!';
    let resultado = frase.replace('x', `${nome}`);
    console.log(resultado)
    const skills =[`${resultado} 
    Minhas três Principais habilidades são:
    JavaScript
    HTML
    CSS`];
    console.log(skills);
}

changeName('Edvaldo')