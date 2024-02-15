let numeroTabuada = Number(prompt('Qual número de 1 a 10 você deseja ver a tabuada'))
const resultado = document.getElementById("resultado")


if(numeroTabuada >= 1 && numeroTabuada <=10){
    let tabuada = ''
    for(let i = 1; i <=10; i++) {
        tabuada += numeroTabuada + " x " + i + " = " + (numeroTabuada * i) + "<br>"
    }

    resultado.innerHTML = tabuada
} else {
    resultado.innerHTML = "Digite um valor entre 1 e 10"
}



