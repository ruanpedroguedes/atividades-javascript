const resultado = document.getElementById("resultado")

listaNumeros = []
for (let i = 1; i <= 10; i++){
    let numero = Number(prompt("Número: "))
    listaNumeros.push(numero)
}

resultado.innerHTML = "Lista original: " + listaNumeros + "<br>" + "Lista reversa: " + listaNumeros.reverse()