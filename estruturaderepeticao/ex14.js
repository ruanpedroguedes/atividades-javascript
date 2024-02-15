let n1 = Number(prompt('N1: '))
let n2 = Number(prompt('N2: '))
let n3 = Number(prompt('N3: '))
let n4 = Number(prompt('N4: '))
let n5 = Number(prompt('N5: '))
let n6 = Number(prompt('N6: '))
let n7 = Number(prompt('N7: '))
let n8 = Number(prompt('N8: '))
let n9 = Number(prompt('N9: '))
let n10 = Number(prompt('N10: '))
const resultado = document.getElementById("resultado")

let listaNumeros = []
listaNumeros.push(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10)
numerosPar = []
numerosImpar = []
for(let numero of listaNumeros) {
    if (numero % 2 == 0) {
        numerosPar.push(numero)
    } else {
        numerosImpar.push(numero)
    }
}
resultado.innerHTML = "Números pares: " + numerosPar.join(', ') + "<br> Números ímpares: " + numerosImpar.join(', ')



