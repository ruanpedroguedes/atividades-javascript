const resultado = document.getElementById("resultado");

const numAlunos = 10;
const mediaAluno = [];

for (let i = 0; i < 10; i++) {
    alert(`Notas do aluno ${i + 1}:`);

    const nota1 = Number(prompt("Nota 1: "));
    const nota2 = Number(prompt("Nota 2: "));
    const nota3 = Number(prompt("Nota 3: "));
    const nota4 = Number(prompt("Nota 4: "));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    mediaAluno.push(media);
}

const alunosAprova = mediaAluno.filter(media => media >= 7).length;
resultado.innerHTML = "Número de alunos com média 7 ou mais: " + alunosAprova;
