let secao1 = document.getElementsByClassName('emergency-tasks')[0];
secao1.style.backgroundColor = 'pink'

let textSecao = document.querySelectorAll('h3');

textSecao[1].style.color = 'black';
textSecao[0].style.color = 'blue';
textSecao[2].style.color = 'red';
textSecao[3].style.color = 'gray';
textSecao[0].innerText = 'Urgente e também importante';
let secao2 = document.getElementsByClassName('no-emergency-tasks');

secao2[0].style.backgroundColor = 'orange';
// console.log(secao2[0].innerHTML);


