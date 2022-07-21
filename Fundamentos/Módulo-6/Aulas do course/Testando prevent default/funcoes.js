// Faça uma função que some os valores de dois parâmetros
function soma(number1, number2) {
    const adicao = number1 + number2
    console.log(adicao);
}
soma(7, 8);
// Agora transforme numa arrowfunction
const soma2 = (number1, number2) => {
    const adicao = number1 + number2
    console.log(adicao);
}
soma2(14, 15);

const weekdDay = new Date().getDay();
switch (weekdDay) {
    case 6:
        console.log('Hoje é sábado # partiu fim-de-semana');
        break;
    case 0: console.log('Hoje é Domingo # descansa e adora a Deus - EBD');
        break;
    default:
    console.log('Dia de semana!!! Trabalha, estuda e agradece a Deus por tudo!! :)');
}
