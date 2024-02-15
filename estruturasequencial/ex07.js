const lDoQuadrado = Number(prompt('Qual o lado do quadrado: '))
const areaQuadrado = lDoQuadrado ** 2
const dobroArea = areaQuadrado * 2

var resultado = document.getElementById("resultado")
resultado.innerHTML = areaQuadrado + " agora o dobro da Área é " + dobroArea