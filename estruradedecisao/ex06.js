const num1 = Number(prompt('Primeiro número: '))
const num2 = Number(prompt('Segundo número: '))
const num3 = Number(prompt('Terceiro número: '))
const resultado = document.getElementById("resultado")

if (num1 > num1 && num1 > num3) {
    resultado.innerHTML = num1
} else if (num2 > num1 && num2 > num3) {
    resultado.innerHTML = num2
} else if (num3 > num1 && num3 > num2) {
    resultado.innerHTML = num3
} else {
    resultado.innerHTML = "IGUAIS"
}