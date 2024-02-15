let numeroFatorial = Number(prompt('Digite o número que deseja o fatorial'));
const resultado = document.getElementById("resultado");
let resultadoFinal = 1;

for (let i = 2; i <= numeroFatorial; i++) {
    resultadoFinal *= i;
}

resultado.innerHTML = `O fatorial de ${numeroFatorial} é ${resultadoFinal}`;
