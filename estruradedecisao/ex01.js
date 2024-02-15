const num1 = Number(prompt('Digite o primeiro número: '))
const num2 = Number(prompt('Digite o segundo número: '))

const resultado = document.getElementById('resultado')

if (num1 > num2) {
    resultado.innerHTML = "O maior número: " + num1
} else if (num2 > num1)  {
    resultado.innerHTML = "O maior número: " + num2
} else {
    resultado.innerHTML = "Os números são iguais "
}