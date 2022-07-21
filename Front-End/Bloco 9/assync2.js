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
//   const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//         const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//          return despesaTotal;
//   };

//   const despesaMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;  
//     return (`Balanço do mês:
// Recebido: R$${renda},00
// Gasto: R$${despesaTotal},00
// Saldo: R$${saldoFinal},00 `);
//   }; 
//     // acc é a sigla para accumulator (acumulador)
//   // curr é a sigla para current (valor atual)
  
//   console.log(despesaMensal(renda, despesas, somaDespesas));

// Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// const userToReturn = {
//   firstName: "Ivan",
//   lastName: "Ivanovich",
//   nationality: "Russian"
// };

// // function teste() {
// //   return 'Olá'
// // }

// const getUser = (param) => {
//   return param();
// }; 

// // const teste1 = () => {
// //   return userFullName(userToReturn);
// // }

// // // console.log(getUser(userFullName));

// // console.log(getUser(() => {
// //   return userFullName(userToReturn);
// // }));

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

// const userFullName = ({ firstName, lastName, nationality}) => `Hello! My name is ${firstName} ${lastName} and I am ${nationality}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
//   // Insira o retorno da função `getUser`
// };

// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // console.log(userFullName(userToReturn));
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };
// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

// console.log(sum(6,8)*3600);
// function sum(x,y){
//   return (x + y) 
// }
// sum();
   //definindo a função antes de invocarsum(1,3)
// function aprendendo() {
//   console.log('estou aprendendo função');
// }
// aprendendo();

// function escrevaMensagem(mensagem) {
//   console.log(mensagem);
// }
// escrevaMensagem('Jesus Cristo é maravilhoso');
// escrevaMensagem('aprendendo muiiiiiiiiiiiiiiito!')

// const array = ['sorriso', 'tempo', 'palavra', 'tempo', 'segredo'];
// let resultado;

// const funcTeste = () => {
  // for (let index = 0; index < array.length; index += 1) {
  //   if (array[index] === 'cocô') {
  //     resultado = 'achei';
  //     // console.log(resultado)
  //     return resultado;
  //   }
  // };
//   const arr = [];

//   array.forEach(() => {
//     const filtro =  array.filter((item) => {
//       return item === 'tempo';
//     })
//     resultado = filtro
//   })
//   return resultado;
//   // return filtro;
// }

// cestaCasaDoMorango é um array de objetos que contém as infomações do que está na cesta;
// crie funções auxiliares que ajudem no tráfego de informações;
// crie, também, objetos com as informações do que está na cesta e o valor total da compra daquele produto;
// {
// fruta: morango,
// quantidade: 2,
// precoDaUnidade: 10,
// valorTotal: 20,
// }
// let pagueNoCaixa = 0;

// const precos = {
//     morango: 10,
//     laranja: 1,
//     uva: 10,
//     jaca: 20,
//     pera: 2,
//   };

// const produtosNaCesta = ['morango',  'morango',  'laranja', 'laranja', 'jaca',  'jaca', 'morango', 'uva', 'laranja', 'pera']

// const cestaCasaDoMorango = [];

// const confereQuantidade = (fruta) => {
//   const frutaFiltrada = produtosNaCesta.filter((index) => index === fruta);
//   return frutaFiltrada.length;
// }

// const unitPrice = (fruit) => precos[fruit];

// const amountToPay = (quantidade, preco) => quantidade * preco;

// let valorDaVez = [];

// function criaObjeto() {
//   const listaFiltrada = [...new Set(produtosNaCesta)];
//   listaFiltrada.forEach((fruta) => {
//     const newObj = {};
//     newObj.fruta = fruta;
//     newObj.quantidade = confereQuantidade(fruta);
//     newObj.precoDaUnidade = unitPrice(fruta);
//     newObj.valorTotal = amountToPay(newObj.quantidade, newObj.precoDaUnidade);

//     cestaCasaDoMorango.push(newObj);
//   } )
//   return cestaCasaDoMorango;
// }

// const valorFinal = () => {
//   const array = criaObjeto();
//   array.forEach((fruta) => {
//     pagueNoCaixa += fruta.valorTotal;
//   });
//   console.log(array);
//   return `O valor total das suas compras é de R$${pagueNoCaixa},00 à vista ou ${pagueNoCaixa * 1.05} no cartão de crédito em até 3 vezes.`;
// }

// console.log(valorFinal());
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
//   // Insira o retorno da função `getUser`
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//    console.log(callback(user));
//     // Retorne a `callback` passada como parâmetro na função `getUser`
//     // Dica: você pode manter o `console.log()`
//      }, delay());
   
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo