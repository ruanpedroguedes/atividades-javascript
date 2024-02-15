const altura = parseFloat(prompt('Informe sua altura: '))
const pesoIdeal = (72.7*altura) - 58

var resultado = document.getElementById("resultado")
resultado.innerHTML = pesoIdeal