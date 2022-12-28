const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Number1');
const input2 = document.querySelector('#Number2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnCalcularClick(){
    let resultado = Number(input1.value) + Number(input2.value);
    result.innerText = 'El resultado es: ' + resultado;
}