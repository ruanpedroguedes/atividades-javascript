const numero = Number(prompt('Digite um número: '))
const resultado = document.getElementById("resultado")

if (numero % 2 == 0) {
    resultado.innerHTML = "PAR"
} else {
    resultado.innerHTML = "IMPAR"
}