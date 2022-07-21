// setTimeout(() => {
//     console.log('Comprar parafusos') // Comprar parafusos
//     console.log('Adicionar ao estoque') // Adicionar ao estoque
//   }, 2000);

//   console.log('1 - Receber roda'); // 1 - Receber roda
//   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
//   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000);

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
//   };

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

// despesaMensal(renda, despesas, somaDespesas);

// const jsonInfo = `{
  //   "muitasEmpresasUsam": [
//     "Google",
//     "Twitter",
//     "Facebook",
//     "etc..."
//   ],
//   "temVariasVantagens": [
  //     "Legível",
  //     "Fácil de usar",
  //     "Leve",
  //     "Popular",
  //     "Versátil"
  //   ],
  //   "muitasLinguagensDaoSuporte": [
    //     "Python",
    //     "C",
    //     "C++",
    //     "Java",
    //     "PHP"
    //   ]
    // }`;

    // const usoJSONPorque = JSON.parse(jsonInfo);

    // const corporationsList = document.getElementById('corporations-used-by');
    // const advantagesList = document.getElementById('advantages');
// const languagesList = document.getElementById('languages-used-by');

// usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  //   const newLi = document.createElement('li');
  //   newLi.innerText = empresa;
  //   corporationsList.appendChild(newLi);
  // });
  
  // // usoJSONPorque.temVariasVantagens.map((vantagens) => {
// //   const newLi = document.createElement('li');
// //   newLi.innerText = vantagens;
// //   advantagesList.appendChild(newLi);
// // });

// // usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  // //   const newLi = document.createElement('li');
  // //   newLi.innerText = linguagens;
  // //   languagesList.appendChild(newLi);
  // // });
  
// *********************************

window.addEventListener("load", function () {
  let chave = document.getElementById("key");
  let valor = document.getElementById("value");
  let salvar = document.getElementById("btnAdd");
  let limpar = document.getElementById("btnLimp");
  let conteudo = document.getElementById("conteudo");

  function exibir() {
    // ol.innerHTML = '';
    let str = "";
    for (let i = 0, len = localStorage.length; i < len; i++) {
      const key = localStorage.key(i);
      const valor = localStorage.getItem(key);
      str += `${[i + 1]} . ${key} : ${valor}<br>`;
    }
  
    valor.value = "";
    chave.value = "";
    conteudo.innerHTML = str;
  }

  
  salvar.addEventListener("click", function () {
    const input1 = chave.value
    const input2 = valor.value
    localStorage.setItem(input1, input2);
    exibir();
  });

  limpar.addEventListener("click", function () {
    localStorage.clear();
    exibir();
  });

  window.addEventListener("storage", function (event) {
    let key = event.key;
    let newValue = event.newValue;
    let oldValue = event.oldValue;
    let storageArea = event.storageArea;
    
    key.innerHTML(key + "\n" + newValue + "\n" + oldValue + "\n" + storageArea);
    exibir();
  });
  
  
  
  exibir()
  
});