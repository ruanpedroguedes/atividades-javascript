const resultado = document.getElementById("resultado");

while (true) {
    let soma = 0;
    let listaSaltos = [];
    let mediaSaltos = 0;

    let nomeAtleta = prompt("Informe o nome do atleta: ");
    
    if (nomeAtleta === "") {
        alert("NOME DO ATLETA NÃO INFORMADO, PROGRAMA ENCERRADO");
        break;
    }

    for (let i = 0; i < 5; i++) {
        alert(`${i + 1} - Salto`);
        const salto = Number(prompt("Distância[M]: "));
        listaSaltos.push(salto);
    }

    for (let i = 0; i < listaSaltos.length; i++) {
        soma += listaSaltos[i];
    }

    mediaSaltos = soma / listaSaltos.length;
    
    resultado.innerHTML += "Atleta: " + nomeAtleta + "<br>" +
                           "Primeiro Salto: " + listaSaltos[0] + "<br>" +
                           "Segundo salto: " + listaSaltos[1] + "<br>" +
                           "Terceiro salto: " + listaSaltos[2] + "<br>" +
                           "Quarto salto: " + listaSaltos[3] + "<br>" +
                           "Quinto salto: " + listaSaltos[4]  + "<br>" +
                           "Resultado Final: " + "<br>" +
                           "Atleta: " + nomeAtleta + "<br>" + 
                           "Saltos: " + listaSaltos + "<br>" +
                           "Média dos Saltos: " + mediaSaltos + "<br>";
}
