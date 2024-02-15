const resultado = document.getElementById("resultado");

while (true) {
    let pedido = prompt("Bem vindo a lanchonete: S - continuar / N - Sair");

    if (pedido !== "S") {
        alert("Obrigado, volte sempre");
        break;
    } else {
        const cardapio = {
            "CachorroQuente": {
                "Código": 100,
                "Preço": 1.20
            },
            "BauruSimples": {
                "Código": 101,
                "Preço": 1.30
            },
            "BauruComOvo": {
                "Código": 102,
                "Preço": 1.50
            },
            "Hamburguer": {
                "Código": 103,
                "Preço": 1.20
            },
            "Cheeseburguer": {
                "Código": 104,
                "Preço": 1.30
            },
            "Refrigerante": {
                "Código": 105,
                "Preço": 1.00
            }
        };

        // Mostra o cardápio ao cliente
        for (const item in cardapio) {
            const nome = item;
            const codigo = cardapio[item]["Código"];
            const preco = cardapio[item]["Preço"];

            const paragrafo = document.createElement("p");
            paragrafo.textContent = `${nome} - Código: ${codigo} - Preço: R$ ${preco.toFixed(2)}`;
            resultado.appendChild(paragrafo);
        }

        // Solicita a escolha do cliente
        let escolhaPedido = prompt("Escolha um pedido (Digite o código): ");

        // Verifica se o código escolhido existe no cardápio
        if (cardapio.hasOwnProperty(escolhaPedido)) {
            const pedidoEscolhido = cardapio[escolhaPedido];
            alert(`Você escolheu: ${escolhaPedido} - Código: ${pedidoEscolhido["Código"]} - Preço: R$ ${pedidoEscolhido["Preço"].toFixed(2)}`);
        } else {
            alert("Código de pedido inválido. Por favor, escolha um código válido.");
        }
    }
}
