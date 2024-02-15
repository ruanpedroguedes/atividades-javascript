
let nota = Number(prompt("Digite uma nota entre 0 e 10: "));
const resultado = document.getElementById("resultado")

while (nota < 0 || nota > 10 || isNaN(nota)) {
  nota = Number(prompt("Valor inválido! Por favor, digite uma nota entre 0 e 10: "));
}

resultado.innerHTML = "Você inseriu a nota: " + nota
