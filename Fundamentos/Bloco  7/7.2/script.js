// // const sum = (value1, value2) => value1 + value2;

// // console.log(sum(2, '3'));

// // const sum = (value1, value2) => {
// //     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
// //       throw new Error('Os valores devem ser numéricos');
// //     }
// //     return value1 + value2;
// //   };
  
// //   console.log(sum(2, '3'));
// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       return error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// // console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };
