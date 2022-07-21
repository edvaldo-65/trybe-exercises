// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = "Country could not be found";
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);


// const aleatory = Math.random(Math.floor);
// console.log(aleatory);

const json = '{"name": "Matheus", "age": 31}'

// const object = JSON.parse(json)

// console.log(typeof object) // object
// console.log(object) // object

// const objeto = {
//   name: 'Matheus', age: 31
// }

// console.log(typeof objeto); // object

// const string = JSON.stringify(objeto);
// console.log(typeof string);

// let pessoa = {nome: 'Matheus', idade: 29}

// // Transformar o objeto em string e salvar em localStorage
// localStorage.setItem('pessoa', JSON.stringify(pessoa));

// // Receber a string
// let pessoaString = localStorage.getItem('pessoa');

// // transformar em objeto novamente
// let pessoaObj = JSON.parse(pessoaString);

// console.log(pessoaObj.nome); // Matheus


// const str = 'SKU: MLB1986322829 | NAME: Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram | PRICE: $1187.12';

// const arr = str.split('$');

// const number = Number(arr[1])
// console.log(number);
// const numb = 183.458931539956;
// const rounded = Math.round(numb * 100) / 100;

const valor = 123.456789;
const teste =  valor.toLocaleString('pt-BR', {style:
'currency', currency: 'BRL'});
console.log(typeof(teste));