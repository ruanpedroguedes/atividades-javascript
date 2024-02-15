let anoContratacao = Number(prompt("Ano da contratação: "))
let salarioAtual = Number(prompt("Salário a receber: "))
let anosEmpresa = Number(prompt("A quantos anos você trabalha na empresa: "))
let jurosAplicado = 0.015 
let somaSalario = 0
let salarioPresente = 0
let salarioFinal = 0
let anoAtual = 2024
const resultado = document.getElementById("resultado")

while (anoContratacao <= anoAtual && anosEmpresa > 0) {
    if (anosEmpresa < 2) {
        somaSalario = salarioAtual;
    } else {
        salarioPresente = Math.pow((1 + jurosAplicado), anosEmpresa);
        salarioFinal = salarioAtual * salarioPresente;
        somaSalario = salarioFinal;
    }
    break; // Adiciona um break para evitar o loop infinito
}

resultado.innerHTML = somaSalario.toFixed(2);
