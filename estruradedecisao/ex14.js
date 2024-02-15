const nota1 = Number(prompt('Digite a primeira nota: '))
const nota2 = Number(prompt('Digite a segunda nota: '))
const media = (nota1+nota2) / 2
const resultado = document.getElementById("resultado")

if (media>= 9 && media <= 10) {
    resultado.innerHTML = "APROVADO: A"
} else if (media>= 7.5 && media < 9) {
    resultado.innerHTML = "APROVADO: B"
} else if (media>= 6 && media < 7.5) {
    resultado.innerHTML = "APROVADO: C"
} else if (media>= 4 && media < 6) {
    resultado.innerHTML = "REPROVADO: D"
} else if (media< 4) {
    resultado.innerHTML = "REPROVADO: E"
} else {
    resultado.innerHTML = "VALOR INVÁLIDO"
}
