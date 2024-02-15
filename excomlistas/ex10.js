const resultado = document.getElementById("resultado")

let listaA = []
let listaB = []
let listaC  = []

for(let i = 0; i < 10; i++) {
    alert(`Lista A Número ${i+1}: `)
    let numeroA = Number(prompt("N:"))
    listaA.push(numeroA)
}
for(let i = 0; i < 10; i++) {
    alert(`Lista B Número ${i+1}: `)
    let numeroB = Number(prompt("N:"))
    listaB.push(numeroB)  // Corrigir aqui: deve ser listaB.push(numeroB) em vez de listaA.push(numeroB)
}
for(let i =0;i < listaA.length; i++){
    listaC.push(listaA[i])
    listaC.push(listaB[i])
}

resultado.innerHTML = "Lista A: " + listaA + "<br>" + "Lista B: " + listaB + "<br>" + "Lista C: " + listaC 