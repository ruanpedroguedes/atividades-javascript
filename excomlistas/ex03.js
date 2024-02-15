const resultado = document.getElementById("resultado")

let soma = 0

for(let i = 1;i <= 4; i++){
    let numero = Number(prompt("Nota: "))
    soma += numero 
}
let media = soma/4
resultado.innerHTML = "Média: " + media