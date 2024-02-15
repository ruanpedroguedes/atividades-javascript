const resultado = document.getElementById("resultado");
let tabelaPreco = "";
let valores = [];
let soma = 0;
let troco = 0;

for (let i = 0; i < 4; i++) {
    let valorProdutos = Number(prompt("Informe o valor do " + (1 + i) + "º Produto"));
    let dinheiro = Number(prompt("O total deu " + soma + " Reais. Coloque o dinheiro: "));
    let trocoAtual = dinheiro - soma;
    valores.push(valorProdutos);
    soma += valorProdutos;
    tabelaPreco += "Produto " + (i + 1) + ": R$ " + valorProdutos + "<br>";
    troco += trocoAtual;
}

resultado.innerHTML = "Lojas tabajara" + "<br>" + tabelaPreco + "<br>" + "Total: R$ " + soma + "<br>" + "Dinheiro: R$ " + dinheiro + "<br>" + "Troco: R$ " + troco;
