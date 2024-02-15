const pergunta = prompt('Deseja Gasolina 2.50 ou Álcool 1.90 [G/A]')
let precoGasolina = 2.50
let precoAlcool = 1.90
const resultado = document.getElementById("resultado")

if (pergunta === "G") {
    const litrosGasolina = Number(prompt('Quantos Litros: '))
    let precoBrutog = litrosGasolina * precoGasolina
    if (litrosGasolina <= 20) {
        let descontog = (0.3 / 100) * precoBrutog
        let precoliquidog = precoBrutog - descontog
        resultado.innerHTML = "Valor: " + precoliquidog + " $"
    } else {
        let descontog = (0.5 / 100) * precoBrutog
        let precoliquidog = precoBrutog - descontog
        resultado.innerHTML = "Valor: " + precoliquidog + " $"
    }
}

if (pergunta === "A") {
    const litrosAlcool = Number(prompt('Quantos litros: '))
    let precoBrutoa = litrosAlcool * precoAlcool
    if (litrosAlcool <= 20) {
        let descontoa = (0.4 / 100) * precoBrutoa
        let precoliquidoa = precoBrutoa - descontoa
        resultado.innerHTML = "Valor: " + precoliquidoa + " $"
    } else {
        let descontoa = (0.6 / 100) * precoBrutoa
        let precoliquidoa = precoBrutoa - descontoa
        resultado.innerHTML = "Valor: " + precoliquidoa + " $"
    }
}
