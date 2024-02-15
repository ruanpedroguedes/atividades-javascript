const n1 = Number(prompt("digite o primeiro número"))
const n2 = Number(prompt("digite o segundo número"))
const soma = n1 + n2
const resultado = document.getElementById("resultado")

let parImpar

if (soma % 2 == 0) {
    parImpar = "PAR"
} else {
    parImpar = "IMPAR"
}

let positivoNegativo

if (soma > 0) {
    positivoNegativo = "POSITIVO"
} else if (soma < 0) {
    positivoNegativo = "NEGATIVO"
} else {
    positivoNegativo = "ZERO"
}

let inteiroDecimal 

if (Number.isInteger(soma)) {
    inteiroDecimal = "INTEIRO"
} else {
    inteiroDecimal = "DECIMAL"
}

resultado.innerHTML = parImpar + positivoNegativo + inteiroDecimal