const valorHora = Number(prompt('Qual o valor de sua hora trabalhada'))
const horaMes = Number(prompt('Quantas horas no mês você trabalha'))

const salarioBruto = valorHora * horaMes
const resultado = document.getElementById("resultado")

const ir5 = (5/100) * salarioBruto
const ir10 = (10/100) * salarioBruto
const ir20 = (20/100) * salarioBruto
const inss = (10/100) * salarioBruto
const fgts = (11/100) * salarioBruto

const desconto01 = inss + fgts
const desconto02 = inss + fgts + ir5
const desconto03 = inss + fgts + ir10
const desconto04 = inss + fgts + ir20

if (salarioBruto <= 900) {
    resultado.innerHTML = "Salário Bruto: " + salarioBruto + "IR: insento" + "INSS: " + inss + "FGTS: " + fgts + "Total de descontos: " + desconto01
} else if (salarioBruto>900 && salarioBruto <=1500) {
    resultado.innerHTML = "Salário Bruto: " + salarioBruto + "IR: " + ir10  + "INSS: " + inss + "FGTS: " + fgts + "Total de descontos: " + desconto02
} else if (salarioBruto>2500) {
    resultado.innerHTML = "Salário Bruto: " + salarioBruto + "IR: " + ir20  + "INSS: " + inss + "FGTS: " + fgts + "Total de descontos: " + desconto04
} else {
    resultado.innerHTML = "VALOR INVÁLIDO"
}