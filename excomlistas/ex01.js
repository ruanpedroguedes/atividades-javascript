const resultado = document.getElementById("resultado")

listaNumeros = []
for(let i = 1; i<6; i++) {
    let numero = Number(prompt("Número"))
    listaNumeros.push(numero)
    resultado.innerHTML = "Lista de números: " + listaNumeros
}