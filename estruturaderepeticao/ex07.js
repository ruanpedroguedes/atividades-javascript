let n1 = Number(prompt("N: "))
let n2 = Number(prompt("N: "))
let n3 = Number(prompt("N: "))
let n4 = Number(prompt("N: "))
let n5 = Number(prompt("N: "))
const resultado = document.getElementById("resultado")

numeros = []
numeros.push(n1,n2,n3,n4,n5)
let maior = 0

for(let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior){
        maior = numeros[i]
    }
}

resultado.innerHTML = numeros