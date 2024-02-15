const resultado = document.getElementById("resultado")
listaIdade = []
let soma = 0
let media = 0
let resultadoFinal = ''
for (let i = 0; i < 5; i++) {
    let idade = Number(prompt('Informe sua idade'))
    listaIdade.push(idade)
    soma += listaIdade[i]
    media = soma/4

    if (media >= 0 && media <= 26) {
        resultadoFinal = "Jovem"
    } else if (media > 26 && media <= 60) {
        resultadoFinal = "Adulto"
    } else {
        resultadoFinal = "Idoso"
    }
}
resultado.innerHTML = resultadoFinal
