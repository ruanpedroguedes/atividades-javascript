const anoBisexto = Number(prompt('Digite número'))
const resultado = document.getElementById("resultado")

if (anoBisexto % 4 == 0) {
    resultado.innerHTML = "ESSE ANO É BISEXTO"
} else {
    resultado.innerHTML = "Não é bisexto"
}