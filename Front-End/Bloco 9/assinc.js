// const teste = (list, number) => list.push(number);

//  console.log(teste(3, []));
// const teste4 = () => teste([], 3);

// setTimeout(teste4, 3000)

// const pushNumber = (list, number) => list.push(number);
// let numbers = [];
// let numbers2 = [];
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);
// pushNumber(numbers2, 4);
// pushNumber(numbers2, 5);
// // console.log(numbers);
// setTimeout(() => console.log(numbers), 3000);

// setTimeout(() => pushNumber(numbers, 'a'), 3000);
// setTimeout(() => pushNumber(numbers2, 'b'), 3000);

// setTimeout(() => console.log(numbers2), 3000);

// const despesas = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const renda = 1000;

//   const despesaMensal = (renda, despesas, callback) => {

//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
//   };

// function teste(num1, num2, callback) {
//   let soma = num1 + callback();
//   console.log(soma);
// }
// otavio()
// teste(10, 2, '3');

// function multiplicacao(num1, num2) {
//   return num1 * num2;
// }

// function divisao(num1, num2) {
//   return (num1 / num2);
// }

// function subtracao(num1, num2) {
//   return num1 - num2;
// }

// function soma(num1, num2) {
//   return num1 + num2
// }

// function principal(sinal, num1, num2) {
//   let operacao;
//   if (sinal === '*') {
//     operacao = multiplicacao;
//     return operacao(num1, num2);
//   }
//   if (sinal === '/') {
//     operacao = divisao;
//     return operacao(num1, num2);
//   }
//   if (sinal === '-') {
//     operacao = subtracao;
//     return operacao(num1, num2);
//   }
//   if (sinal=== '+') {
//     operacao = soma;
//     return operacao(num1, num2);
//   }
// }

// // console.log(resulta doFinal(9));
// // console.log(principal('-', 35, 7))

// // Definição da função userFullName
// const userFullName = ({ firstName, lastName, nationality }) => `Olá! Meu nome é ${firstName} ${lastName}. Eu sou natural de ${nationality}.`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Edvaldo",
//     lastName: "Alves",
//     nationality: "Bayeux-PB"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName));

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;


// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

 
// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = () => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     // Retorne a `callback` passada como parâmetro na função `getUser`
//     // Dica: você pode manter o `console.log()`
//     console.log(user);
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
