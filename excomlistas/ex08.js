const resultado = document.getElementById("resultado")

const numPessoas = 5
let listaAltura = []
let listaPeso = []

for(let i=0; i<numPessoas; i++) {
    alert(`Pessoa ${i+1}: `)
    
    const peso = Number(prompt("Peso: "))
    const altura = Number(prompt("Altura: "))

    listaPeso.push(peso)
    listaAltura.push(altura)
}
resultado.innerHTML = "Altura inversa: " + listaAltura.reverse() + "<br>" + " Peso inverso: " + listaPeso.reverse()