const resultado = document.getElementById("resultado")

listaNumPar = []
listaNumImpar = []
listaDeNumeros = listaNumPar.concat(listaNumImpar)

for(let i = 1; i <= 20; i++){
    let numero = Number(prompt("Número: "))

    if (numero % 2 == 0) {
        listaNumPar.push(numero)
    } else{
        listaNumImpar.push(numero)
    }
}
resultado.innerHTML = "Lista de Números: " +listaDeNumeros +"<br>" +
                       "Lista de Números Par: " + listaNumPar + "<br>" +
                       "Lista Númerosd Impar: " + listaNumImpar