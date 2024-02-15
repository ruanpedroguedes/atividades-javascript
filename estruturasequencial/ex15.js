const valorHora = Number(prompt('Informe quanto custa sua hora de trabalho: '))
const qtdTrabalhada = Number(prompt('Informe quantas horas no mês você trabalha: '))
const salarioBruto = valorHora * qtdTrabalhada

var porcenInss = 8
var porceImposDeRenda = 11
var porcenSindicato = 5 

var resulInss = (porcenInss / 100) * salarioBruto
var resulImposDeRenda = (porceImposDeRenda /100) * salarioBruto
var reesulSindicato = (porcenSindicato /100) * salarioBruto

var salarioLiquido = salarioBruto - resulInss - resulImposDeRenda - reesulSindicato

var resultado = document.getElementById("resultado")
resultado.innerHTML = "Salario bruto: " + salarioBruto + " valor pago ao INSS:  " + resulInss + " valor pago ao imposto de renda:  " + resulImposDeRenda + " valor pago ao sindicato:  " + reesulSindicato + " salario liquido:  " + salarioLiquido
