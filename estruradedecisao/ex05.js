const num1 = Number(prompt('Primeira nota: '))
const num2 = Number(prompt('Segunda nota: '))
const num3 = Number(prompt('Terceira nota: '))
const num4 = Number(prompt('Quarta nota: '))
const media = (num1 + num2 + num3 + num4) / 4
const resultado = document.getElementById("resultado")

if (media >= 7 && media <= 9) {
    resultado.innerHTML = "APROVADO"
} else if (media < 7 && media >= 0) {
    resultado.innerHTML = "REPROVADO"
} else if (media > 10) {
    resultado.innerHTML = "VALOR INVÁLIDO"
} else {
    resultado.innerHTML = "APROVADO COM DISTINÇÃO"
}
