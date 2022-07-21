// const subtraiDoisNumeros = function subtrai(param1, param2) {
//     return param1 - param2;
// };
// console.log(subtraiDoisNumeros(15, 10));

// (function autoexecuta(sobrenome) {
//     console.log('Edvaldo', sobrenome);
// }('Alves do Nascimento'));
// // }
// // autoexecuta('Alves do Nascimento');






const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, noSucess) => {
setTimeout(() => {
const didOperationSucceed = Math.random() >= 0.5;
if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      console.log(onSuccess(country));
    } else {
        const errorMessage = "Country could not be found";
        console.log(noSucess(errorMessage));
    }
  }, delay());
};
getCountry("Brazil", printErrorMessage   );
// // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);
// }

// function countryName({ name }) {
//     console.log(`Returned country is ${name}`);
// };
// countryName({ name: "Brasil" });

// function countryCurrency({ name, currency }) {
//     console.log(`${name}'s currency is the ${currency}`);
// };
// countryCurrency({ name: 'Brasil', currency: 'Real' });

// function delay(maxMilliseconds) {
//     const AleatoryNumber = Math.floor(Math.random() * maxMilliseconds);
//     return AleatoryNumber;
// };
// console.log(delay(5000));

// function printErrorMessage(error) {
//     console.log(`Error getting country: ${error}`);
// };
// printErrorMessage('Errei meu Véi...');

// function getCountry(onSuccess) {

// };
// function setTimeout() {

// };
// function didOperationSucceed() {
//     console.log(Math.random() >= 0.5);
// };
// didOperationSucceed();

// const country = {
//     name: "Brazil",
//     hdi: 0.759,
//     currency: "Real",
// };

// const errorMessage = "Country could not be found";


// const getCountry = (onSuccess) => {
//      setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//           const country = {
//             name: "Brazil",
//             hdi: 0.759,
//             currency: "Real",
//           };
//           onSuccess(country);
//         } else {
//           const errorMessage = "Country could not be found";
//         }
//       }, delay());

//     };