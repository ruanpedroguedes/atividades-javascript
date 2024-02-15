precoMorangoAte5kg = 2.50
precoMacaAte5kg = 1.80
precoMorangoMais5kg = 2.20
precoMacaMais5kg = 1.50
const limiteDesconto = 8;
const valorLimiteDesconto = 25;
const resultado = document.getElementById("resultado")

const macaKg = Number(prompt("Quantos KG de maça : "))
const morangoKg = Number(prompt ("Quantos KG de morango: "))

let precoToltalMorango = 0
if (morangoKg <= 5) {
    precoToltalMorango = morangoKg * precoMorangoAte5kg
} else {
    precoToltalMorango = morangoKg * precoMorangoMais5kg
}

let precoTotalMaca = 0
if (macaKg <= 5) {
    precoTotalMaca = macaKg * precoMacaAte5kg
} else {
    precoTotalMaca = macaKg * precoMacaMais5kg
}

let precoTotalCompras = precoToltalMorango + precoTotalMaca
if ((macaKg + morangoKg) > limiteDesconto || precoToltalMorango > 25) {
    precoTotalCompras = precoTotalCompras - precoTotalCompras * 0.1
}

resultado.innerHTML = "O total é : " + precoTotalCompras.toFixed(2)