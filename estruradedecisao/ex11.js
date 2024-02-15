const salario = Number(prompt('Informe seu salario'))
const resultado = document.getElementById("resultado")

var porcen20 = 20
var porcen15 = 15
var porcen10 = 20
var porcen5 = 5

const aumento20 =  0.2 * salario
const aumento15 = 0.15 * salario
const aumento10 = 0.1 * salario
const aumento5 = 0.05 * salario 

const salaLiquido20 = salario + aumento20
const salaLiquido15 = salario + aumento15
const salaLiquido10 = salario + aumento10
const salaLiquido5 = salario + aumento5

if (salario <= 280) {
    resultado.innerHTML = "salario antes do reajuste: " + salario + " percentual aplicado " + porcen20 + " Valor do aumento:  " + aumento20 + " salario após o aumento " + salaLiquido20
} else if (salario > 280 && salario <= 700 ) {
    resultado.innerHTML = "salario antes do reajuste: " + salario + " percentual aplicado " + porcen15 + " Valor do aumento:  " + aumento15 + " salario após o aumento " + salaLiquido15
} else if (salario > 700 & salario <= 1500 ) {
    resultado.innerHTML = "salario antes do reajuste: " + salario + " percentual aplicado " + porcen15 + " Valor do aumento:  " + aumento15 + " salario após o aumento " + salaLiquido15
} else {
    resultado.innerHTML = "salario antes do reajuste: " + salario + " percentual aplicado " + porcen5 + " Valor do aumento:  " + aumento5 + " salario após o aumento " + salaLiquido5
}
