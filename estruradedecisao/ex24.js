respostasPositivas = 0
const resultado = document.getElementById("resultado")

const pergunta01 = prompt('Telefonou para a vítima? [S/N]')
if (pergunta01 == "S") {
    respostasPositivas ++
}
const pergunta02 = prompt('Esteve no local do crime? [S/N]')
if (pergunta02 == "S") {
    respostasPositivas ++
}
const pergunta03 = prompt('Mora perto da vítima? [S/N]')
if (pergunta03 == "S") {
    respostasPositivas ++
}
const pergunta04 = prompt('Devia para a vítima? [S/N]')
if (pergunta04 == "S") {
    respostasPositivas ++
}
const pergunta05 = prompt('Já trabalhou com a vítima? [S/N]')
if (pergunta05 == "S") {
    respostasPositivas ++
}

if (respostasPositivas == 2) {
    resultado.innerHTML = "SUSPEITO"
} else if (respostasPositivas == 3 || respostasPositivas == 4) {
    resultado.innerHTML = "Cúmplice"
} else if (respostasPositivas == 5) {
    resultado.innerHTML = "ASSASINO"
} else {
    resultado.innerHTML = "INOCENTE"
}




