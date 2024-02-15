const resultado = document.getElementById("resultado")

const perguntas = [
    "Telefonou para a vítima?","Esteve no local do crime?","Mora perto da vítima?","Devia para a vítima?"
]
let respostasPositivas = 0

for(let i = 0; i < 5; i++){
    let pergunta = prompt(`${i+1} - ${perguntas}`)

    if (pergunta == "sim"){
            respostasPositivas ++
    } 
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

