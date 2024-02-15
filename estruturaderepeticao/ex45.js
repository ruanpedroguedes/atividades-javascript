const resultado = document.getElementById("resultado");
let gabarito = ["A", "B", "C", "D", "E", "E", "D", "C", "B", "A"];
let pontos = 0;
let respostaAluno = [];

for (let i = 0; i < 10; i++) {
    let letraProva = prompt("DIGITE A LETRA: ").toUpperCase(); // Converte a letra para maiúscula
    respostaAluno.push(letraProva);

    if (letraProva === gabarito[i]) {
        pontos += 1;
    }
}

resultado.innerHTML = "Pontuação: " + pontos;

