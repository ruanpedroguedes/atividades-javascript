const sexo = prompt('Informe seu sexo (M = Masculino , F = Femino): ')
const resultado = document.getElementById("resultado")

if (sexo == "M") {
    resultado.innerHTML = "Masculino"
} else if (sexo == "F") {
    resultado.innerHTML = "Feminino"
} else {
    resultado.innerHTML = "Sexo Inválido"
}