const num1 = parseInt(prompt('Informe o primeiro número inteiro: '))
const num2 = parseInt(prompt('Informe o segundo número inteiro: '))

const a = (num1 * 2) + (num2/2)
const b = (num1 * 3) + a
const c = b ** 3

var resultado = document.getElementById("resultado")
resultado.innerHTML = a + "" + "" + b + "" + c