const resultado = document.getElementById("resultado")
let soma = 0
let media = 0
let listaAlunos = []

for (let i = 0; i < 5; i++) {
    let numeroTurma = Number(prompt("Quantos alunos tem na sua turma: "))

    if (numeroTurma > 40) {
        alert("Sinto muito não pode mais de 40 alunos pro turma")
    } else {
        listaAlunos.push(numeroTurma)
        soma += numeroTurma
    }
}

media = soma / listaAlunos.length
resultado.innerHTML = media