const resultado = document.getElementById("resultado")
const precoPao = 0.18
let tabelaPreco = ""

for(let i = 1;i<=50;i++) {
    const precoTotal = i * precoPao
    tabelaPreco += i + "- R$" + precoTotal.toFixed(2) + "<br>"
}
resultado.innerHTML = tabelaPreco
