const kgPeixe = Number(prompt('Quantos KG você pescou: '))
const valorMulta = 4.00
const kgExecesso = kgPeixe - 50
const calcularMulta = kgExecesso * valorMulta
var resultado = document.getElementById("resultado")

if (kgPeixe > 50) {
    resultado.innerHTML = calcularMulta + " reais Esse é o valor da sua multa pelo Execesso "
} else {
    resultado.innerHTML = " Você pescou  " + kgPeixe + " kg Não vai pagar multa "
}
