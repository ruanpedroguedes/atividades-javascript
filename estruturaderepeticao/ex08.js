let n1 = Number(prompt("N1: "))
let n2 = Number(prompt("N2: "))
let n3 = Number(prompt("N3: "))
let n4 = Number(prompt("N4: "))
let n5 = Number(prompt("N5: "))
let resultado = document.getElementById("resultado")

let somaNumeros = []
somaNumeros.push(n1,n2,n3,n4,n5)

let soma = 0
let media = 0
for(let i = 0; i < somaNumeros.length; i++) {
    soma += somaNumeros[i]
    media = soma/5
}

resultado.innerHTML = "Soma: " + soma + " Média: " + media
