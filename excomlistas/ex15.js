const resultado = document.getElementById("resultado");
let listasNotas = [];
let soma = 0;
let valorAcimaMedia = 0;
let valorAbaixoMedia = 0;
let mediaValores = 0; // Mova a declaração antes do uso

while (true) {
    let nota = Number(prompt("Informe a nota: "));
    if (nota < 0) {
        alert("A nota não pode ser menor que zero, encerramos o programa");
        break;
    } else {
        listasNotas.push(nota);
    }

    for (let i = 0; i < listasNotas.length; i++) {
        soma += listasNotas[i];
    }

    // Mova este bloco para cá
    mediaValores = soma / listasNotas.length;

    for (let i = 0; i < listasNotas.length; i++) {
        if (listasNotas[i] > mediaValores) {
            valorAcimaMedia += 1;
        } else {
            valorAbaixoMedia += 1;
        }
    }
}

// Adicione ponto e vírgula no final de cada linha
resultado.innerHTML = "Quantidade de valores: " + listasNotas.length + "<br>" +
                      "Ordem dos valores: " + listasNotas + "<br>" +
                      "Ordem inversa dos valores: " + listasNotas.reverse() + "<br>" +
                      "Soma dos valores: " + soma + "<br>" +
                      "Média dos valores: " + mediaValores + "<br>" +
                      "Quantidade de valores acima da média: " + valorAcimaMedia + "<br>" +
                      "Quantidade de valores abaixo da média: " + valorAbaixoMedia;
