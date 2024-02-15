const num = Number(prompt('Informe um valor: '))
const resultado = document.getElementById("resultado")

if (num > 0) {
    resultado.innerHTML = "Positivo"
} else {
    resultado.innerHTML = "Negativo"
}