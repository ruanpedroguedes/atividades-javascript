const resultado = document.getElementById("resultado")
let num = Number(prompt("Digite um número: "))
let resulNum = ""

if(num % 1 == 0 && num/num == 0) {
    resulNum = "PRIMO"
} else {
    resulNum = "NÃO PRIMO"
}
resultado.innerHTML = resulNum
