const tamanhoArea = Number(prompt('Tamanho em metros quadrados da Área: '))
const valorLata = 80.00

var cobertura_por_litro = 3
var litros_necessarios = tamanhoArea / cobertura_por_litro

const litrosLata = 18
const latasNecess = litros_necessarios / litrosLata
const preco = latasNecess * valorLata

var resultado = document.getElementById("resultado")
resultado.innerHTML = preco + " são " + latasNecess