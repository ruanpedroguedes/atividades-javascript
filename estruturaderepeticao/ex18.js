let n1 = Number(prompt("N: "));
let n2 = Number(prompt("N: "));
let n3 = Number(prompt("N: "));
let n4 = Number(prompt("N: "));
let n5 = Number(prompt("N: "));
const resultado = document.getElementById("resultado");

let numeros = [];
numeros.push(n1, n2, n3, n4, n5);

let maior = numeros[0]; // Inicialize com o primeiro número da lista
let menor = numeros[0]; // Inicialize com o primeiro número da lista
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

resultado.innerHTML = "Soma: " + soma + "<br>" + "Maior: " + maior + "<br>" + "Menor: " + menor;
