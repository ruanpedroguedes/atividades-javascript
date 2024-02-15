const diaSemana = prompt('Digite o número da semana')
const resultado = document.getElementById("resultado")

switch (diaSemana) {
    case '1':
        resultado.innerHTML = "Domingo"
        break
    case '2':
        resultado.innerHTML = "Segunda"
        break
    case '3':
        resultado.innerHTML = "Terça"
        break
    case '4':
        resultado.innerHTML = "Quarta"
        break
    case '5':
        resultado.innerHTML = "Quinta"
        break
    case '6':
        resultado.innerHTML = "Sexta"
        break
    case '7':
        resultado.innerHTML = "Sabado"
        break        
}