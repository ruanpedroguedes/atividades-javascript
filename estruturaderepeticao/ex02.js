let nome = prompt('Qual seu nome nome : ')
let senha = prompt ("Qual sua senha : ")
const resultado = document.getElementById("resultado")

while (nome == senha) {
    nome = prompt('Qual seu nome nome : ')
    senha = prompt ("Qual sua senha : ")
}

resultado.innerHTML = "Sua senha é " + senha + " e seu nome é  " + nome