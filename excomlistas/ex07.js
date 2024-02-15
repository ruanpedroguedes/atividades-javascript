const resultado = document.getElementById("resultado")

let listaNumeros = []
let soma = 0
let media = 0

for (let i = 0; i < 5; i++) {
    alert(`Número ${i + 1}: `)
    let numero = Number(prompt("N: "))
    listaNumeros.push(numero)
}

for (let i = 0; i < listaNumeros.length; i++) {
    soma += listaNumeros[i]
}

media = soma / listaNumeros.length

resultado.innerHTML = "Soma: " + soma + " Média: " + media
