const resultado = document.getElementById("resultado")

let listaA = []
let listaB = []
let listaC = []
let listaInter = []

for(let i = 0; i < 3; i++) {
    alert(`Lista A Número ${i+1}: `)
    let numeroA = Number(prompt("N:"))
    listaA.push(numeroA)
}
for(let i = 0; i < 3; i++) {
    alert(`Lista B Número ${i+1}: `)
    let numeroB = Number(prompt("N:"))
    listaB.push(numeroB)  // Corrigir aqui: deve ser listaB.push(numeroB) em vez de listaA.push(numeroB)
}
for(let i = 0; i < 3; i++) {
    alert(`Lista B Número ${i+1}: `)
    let numeroC = Number(prompt("N:"))
    listaC.push(numeroC)  // Corrigir aqui: deve ser listaB.push(numeroB) em vez de listaA.push(numeroB)
}
for(let i = 0;i<listaA.length;i++) {
    listaInter.push(listaA[i])
    listaInter.push(listaB[i])
    listaInter.push(listaC[i])
}
resultado.innerHTML = "Lista A: " + listaA + " Lista B: "+ listaB + " Lista C: " + listaC + " Lista intercalada: " + listaInter