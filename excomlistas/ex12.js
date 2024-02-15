const resultado = document.getElementById("resultado")

const numAlunos = 30
let idadeAlunos = []
let alturaAlunos = []
let alunosAbaixoDe13ComAlturaAbaixoDaMedia = 0

for (let i = 0; i < numAlunos; i++) {
    alert(`Dados do ${i+1} aluno: `)
    
    // Pegar os dados
    let alturaAluno = Number(prompt("Altura: "))
    let idadeAluno = Number(prompt("Idade: "))
    
    // Adicionar nas listas
    alturaAlunos.push(alturaAluno)
    idadeAlunos.push(idadeAluno)
}

// Calcular a média das alturas
let mediaAlturas = alturaAlunos.reduce((acc, altura) => acc + altura, 0) / numAlunos

// Verificar quantos alunos com mais de 13 anos têm altura inferior à média
for (let i = 0; i < numAlunos; i++) {
    if (idadeAlunos[i] > 13 && alturaAlunos[i] < mediaAlturas) {
        alunosAbaixoDe13ComAlturaAbaixoDaMedia++
    }
}

// Exibir o resultado
resultado.textContent = `Número de alunos com mais de 13 anos e altura abaixo da média: ${alunosAbaixoDe13ComAlturaAbaixoDaMedia}`
