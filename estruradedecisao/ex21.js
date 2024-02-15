const valorDoSaque = Number(prompt('Qual o valor do saque: '))
const resultado = document.getElementById("resultado")

if (valorDoSaque>=10 && valorDoSaque<=600) {
    var notasde100 = Math.floor(valorDoSaque/100)
    var restode100 = valorDoSaque % 100

    var notasde50 = Math.floor(restode100 /50)
    var restode50 = restode100 % 50

    var notasde10 = Math.floor(restode50/10)
    var restode10 = restode50 % 10

    var notasde5 = Math.floor(restode10/5)
    var notasde1 = restode10 % 5

    resultado.innerHTML = "Notas de 100: " + notasde100 + 
    "Notas de 50: " + notasde50 + "Notas de 10: " + notasde10 + 
    "Notas de 5: " + notasde5 + "Notas de 1: " + notasde1


} else{
    resultado.innerHTML = "O valor tem que estar entre 10 e 600 reias"
}