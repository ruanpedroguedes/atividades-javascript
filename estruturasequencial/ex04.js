const nota1 = Number(prompt('Informe a sua primeira nota: '))
const nota2 = Number(prompt('Informe a sua segunda nota: '))
const nota3 = Number(prompt('Informe a sua terceira nota: '))
const nota4 = Number(prompt('Informe a sua quarta nota: '))
var resultado = (nota1+nota2+nota3+nota4)/4

const resposta = document.getElementById("resultado")

resposta.innerHTML = resultado