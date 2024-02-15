const resultado = document.getElementById("resultado")

let tabela = ""
for(let i = 1; i<=50 ;i++) {
    const precoTabela = i * 1.99
    tabela +=  i + " - R$ " + precoTabela.toFixed(2) + "<br>";
}

resultado.innerHTML = tabela