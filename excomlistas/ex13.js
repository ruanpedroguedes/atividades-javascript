const resultado = document.getElementById("resultado")

let mesesTemperatura = []
let soma = 0
let mesesAcimaMedia = []

for (let i = 0; i < 12; i++) {
    alert(`Temperatura do ${i + 1} mês: `)
    let temperatura = Number(prompt("Temperatura"))
    mesesTemperatura.push(temperatura)
}

for (let i = 0; i < mesesTemperatura.length; i++) {
    soma += mesesTemperatura[i]
}

let mediaAnual = soma / mesesTemperatura.length

for (let i = 0; i < mesesTemperatura.length; i++) {
    if (mesesTemperatura[i] > mediaAnual) {
        mesesAcimaMedia.push(i + 1)  // Armazenar o índice do mês
    }
}

resultado.innerHTML = "Média Anual " + mediaAnual + "<br>" + "Meses com temperatura Acima da média: " + mesesAcimaMedia.join(", ");
