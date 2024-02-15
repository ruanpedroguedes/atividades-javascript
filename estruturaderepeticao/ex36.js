const resultado = document.getElementById("resultado")

let numeroTabuada = Number(prompt('Qual número de 1 a 10 você deseja ver a tabuada'))
let numeroInicio = Number(prompt("Número que deseja começar: "))
let numeroFim = Number(prompt("Número que deseja terminar: "))

if (numeroFim > numeroInicio){
    alert("O número final não pode ser maior que o inicial ")
} else {
    alert("Vou montar a tabuada de " + numeroTabuada +  " começando em " + numeroInicio + " e terminando em :" + numeroFim)
    for (var i = numeroInicio; i <= numeroFim; i++) {
        var resultadoFinal = numero * i;
    }
}

resultado.innerHTML = numeroTabuada +  " X " + i + " = " + resultadoFinal

