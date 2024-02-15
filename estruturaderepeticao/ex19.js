
const resultado = document.getElementById("resultado");

let numeros = [];
for(let i = 0;i < 5; i++){
    let numero = Number(prompt("Digite um número: "))

    if (numero >= 0 && numero <= 1000) {
        numeros.push(numero)
    } else {
        alert("VALOR INVÁLIDO")
    }
}

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