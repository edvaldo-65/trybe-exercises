// function sum (number1, number2) {
//     return number1 + number2;
//   }

//   const sumVariable = sum;

//   console.log(sumVariable);
//   //  [Function: sum]
//   const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }

//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(5));

// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sum = (number1, number2) => {
//   return number1 + number2;
// }

// const sumVariable = sum;
// // const sumVariable = sum;

// console.log(sumVariable);
//  [Function: sum]

// const sayHello = () => {
//   return ('hello trybers');
// }
// console.log(sayHello);
// const printGreeting = (funcao) => {
//     return funcao();
// }

// console.log(printGreeting(sayHello));

//   const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }

//   const initialSum = sumFixAmount(15)
//   console.log(initialSum(20));

//   const test = initialSum(20);

//  const funcaoTeste = (resultado) => {
//     let final = 10
//     final = final + resultado;
//     return final;
//   };

//   console.log(funcaoTeste(test));

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);
// repeat(5, console.group);
// repeat(5, console.table);

// const wakeUp = () => 'Acordando!!';
// const breakfast = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';

// const doingThings = (thing) => console.log(thing());

// console.log(doingThinghs(wakeUp));
// console.log(doingThinghs(breakfast));
// console.log(doingThinghs(sleep));

// console.log(doingThinghs(wakeUp));
// console.log(doingThinghs(breakfast));
// console.log(doingThinghs(sleep));
// const doingThings = (callback) => {
//   // const result = callback();
//   console.log(callback());
// };

// doingThings(wakeUp);
// doingThings(breakfast);
// doingThings(sleep);

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

// const newObject = (nomeCompleto) => {

// const emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;

// return { nomeCompleto, email: emailFormatado };
// const obj = { nomeCompleto, email: emailFormatado };

// return obj
// return { nomeCompleto, email: emailFormatado };
// }

// const newEmployees = (funcao) => {

//   const employees = {
//     id1: funcao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: funcao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: funcao('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(newObject));


// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let index = 0; index < students.length; index += 1) {
//     const student = students[index];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// // verifyGrades();

// // console.log(students);
// // // [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

const pizzas = [
  { sabor: 'Mussarela', tamanho: 'G', preco: 25 },
  { sabor: 'Charque', tamanho: 'P', preco: 15 },
  { sabor: 'Italiana', tamanho: 'G', preco: 28 },
  { sabor: 'Calabresa', tamanho: 'M', preco: 20 },
  { sabor: 'Mussarela', tamanho: 'G', preco: 25 }
];

// const analise = (pizzas) => pizzas.filter((pizza) => pizza.tamanho === 'g');

const newFunction = (pizzas) => {
  return pizzas.map((pizza) => {
    return `Sabor: ${pizza.sabor} ---> Tamanho: ${pizza.tamanho}`;
  })
}

// pizzas.forEach( (pizza) => {
//   console.log(pizza.sabor);
// } )

const analise = (param) => {
  return param.filter((result) => {
    return result
    // forEach((letter)) =

    // == 'Sabor: Mussarela ---> Tamanho: G'
  });
}

console.log(analise(newFunction(pizzas)));
