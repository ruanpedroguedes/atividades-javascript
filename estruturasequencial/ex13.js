const altura = parseFloat(prompt("Informe sua altura: "))

const pesoIdealHomen = (72.7 * altura) -58
const pesoIdealMulher = (62.1 * altura) -44.7

var resultado = document.getElementById("resultado")
resultado.innerHTML = "Sua altura ideal caso seja homen " + pesoIdealHomen + "caso seja mulher " + pesoIdealMulher