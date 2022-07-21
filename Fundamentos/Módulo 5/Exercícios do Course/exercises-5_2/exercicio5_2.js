
//     🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let exercise = document.querySelector('body')
console.log(exercise);
let A = document.createElement('h1');
A.innerText = 'Exercício 5.2 - JavaScript DOM '
exercise.appendChild(A)
//     🚀 Adicione a tag main com a classe main-content como filho da tag body;
let tagMain = document.createElement('main')
exercise.appendChild(tagMain);
//     🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let tagSection = document.createElement('section');
tagMain.appendChild(tagSection);
tagSection.className = 'center-content'
//     🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');
tagSection.appendChild(paragraph);
paragraph.innerText = ' Edvaldo e Vinícius arrasando no JavaScript'
//     🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
tagSection.className = 'left-content'
tagMain.appendChild(tagSection);
//     🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
tagSection.className ='right-content';
tagMain.appendChild(tagSection);
//     🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
tagSection.appendChild(image);

// var a = document.createElement("img");
//     a.src = src;
//     a.width = width;
//     a.height = height;
//     a.alt = alt;
//     document.body.appendChild(a);
//     🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = document.createElement('ol');


tagSection.appendChild(list);


let itemList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove','dez'
];

for (let index = 0; index < itemList.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = itemList[index];
    list.appendChild(li);
}

//     🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
let text1 = document.createElement('h3');
let text2= document.createElement('h3');
let text3= document.createElement('h3');
tagMain.appendChild(text1);
tagMain.appendChild(text2);
tagMain.appendChild(text3);
// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//     🚀 Adicione a classe title na tag h1 criada;
A.className = 'title';
// tagMain.className = 'main-content'
tagSection.className = 'title';
//     🚀 Adicione a classe description nas 3 tags h3 criadas;
text1.className = 'description'
text2.className = 'description'
text3.className = 'description'

//     🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();



//     🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;



//     🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;





//     🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
