
const precoFileDuploAte5Kg = 4.90;
const precoFileDuploAcimaDe5Kg = 5.90;
const precoAlcatraAte5Kg = 5.90;
const precoAlcatraAcimaDe5Kg = 6.90;
const precoPicanhaAte5Kg = 6.90;
const precoPicanhaAcimaDe5Kg = 7.80;

const TipoDeCarne = prompt("Escolha um tipo de carne F - (File Duplo) A - (Alcatra) P - (Picanha)");
const kgCarne = Number(prompt("Quantos KG você quer"));
const formaPagamento = prompt("Forma de pagamento D - Dinheiro C - Cartão Tabajara");
const resultado = document.getElementById("resultado");

let precoTotal = 0;

if (TipoDeCarne === "F") {
    if (kgCarne <= 5) {
        precoTotal = precoFileDuploAte5Kg * kgCarne;
    } else {
        precoTotal = precoFileDuploAcimaDe5Kg * kgCarne;
    }
} else if (TipoDeCarne === "A") {
    if (kgCarne <= 5) {
        precoTotal = precoAlcatraAte5Kg * kgCarne;
    } else {
        precoTotal = precoAlcatraAcimaDe5Kg * kgCarne;
    }
} else if (TipoDeCarne === "P") {
    if (kgCarne <= 5) {
        precoTotal = precoPicanhaAte5Kg * kgCarne;
    } else {
        precoTotal = precoPicanhaAcimaDe5Kg * kgCarne;
    }
}

let precoTotalCompras = precoTotal;

if (formaPagamento === "C") {
    precoTotalCompras = precoTotal * 0.95; // Desconto de 5% para pagamento com cartão
}

resultado.innerHTML = "O preço Final é : " + precoTotalCompras.toFixed(2);


