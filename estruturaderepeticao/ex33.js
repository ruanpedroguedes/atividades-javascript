const resultado = document.getElementById("resultado")
let listaTemperatura = []
let soma = 0

for(let i = 0; i < 6; i++) {
    let temperatura = Number(prompt("Qual a " + (1 + i) + " Temperatura "))
    listaTemperatura.push(temperatura)
    soma += listaTemperatura[i]
}

maiorTemp = Math.max(...listaTemperatura)
menorTemp = Math.min(...listaTemperatura)
let mediaTemp = soma / listaTemperatura.length

resultado.innerHTML = "Maior temperatura: " + maiorTemp + "<br>" + "Menor temperatura: " + menorTemp + "<br>" + "Média das temperaturas: " + mediaTemp.toFixed(2)
