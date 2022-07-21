// // SELETORES
// const INPUT_TEXT = document.querySelector("#input-text");
// const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
// const HREF_LINK = document.querySelector("#href");

// function prevent(event) {
//     event.preventDefault();
// }
// HREF_LINK.addEventListener('click',prevent);

// function prevent2(event2) {
//     event2.preventDefault();
// }
// INPUT_CHECKBOX.addEventListener('click',prevent2)

// function prevent3(event3) {
//     event3.preventDefault();
//         INPUT_TEXT.value = 'a'
        
//     }

// INPUT_TEXT.addEventListener('keypress',prevent3);

const factorial = (number) => {
    let result = number;
    for (let index = 2; index <= number; index += 1) {
        result  = number * index;
    }
    return result;
};
    console.log(factorial(6));

    let date = new Date();
    console.log(date.getDate())

    function formataData(data = new Date) {
        let dia = data.getDate();
        let mes = data.getMonth()+1;
        let ano = data.getFullYear();
        if(dia.toString().length == 1) dia = '0'+dia;
        if(mes.toString().length == 1) mes = '0'+mes;
        return dia+'/'+mes+'/'+ano
    }
    console.log(formataData());



function year() {
    
    const ano = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho']
    ano.push('julho', 'agosto');
    ano.pop(); //remove do fim;
    
    ano.shift();//remove do começo;
    ano.unshift('janeiro');//insere no começo;
    // ano.sort();
    ano.reverse();
    for (let  index = 0; index < ano.length; index += 1) {
        const result = ano[index]
        
        console.log(result); 
    }
}
    year();