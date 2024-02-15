const pi = 3.14
const raioCirculo = Number(prompt('Informe o raio do circulo: '))
const areaCirculo = pi * (raioCirculo ** 2)

var resultado = document.getElementById("resultado")
resultado.innerHTML = areaCirculo