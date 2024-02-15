const valorHora = Number(prompt('Quanto você ganha por hora: '))
const horaMes = Number(prompt('Quantas horas você trabalha em um mês: '))
const salario = valorHora * horaMes

var resultado = document.getElementById("resultado")
resultado.innerHTML = salario
