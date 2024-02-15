const turno = prompt('M-matutino ou V-Vespertino ou N- Noturno: ')
const resultado = document.getElementById("resultado")


if (turno == "M") {
    resultado.innerHTML = "Bom dia"
} else if (turno == "V") {
    resultado.innerHTML = "Boa tarde"
} else if (turno == "N") {
    resultado.innerHTML = "Boa noite"
} else {
    resultado.innerHTML = "NÃO EXISTE"
}
