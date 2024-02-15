const resultado = document.getElementById("resultado");
let media = 0 ;
let resultadoFinal = "";

for(let i = 0;i<5; i++) {
    let nota = Number(prompt("Digite a primeira nota: "));
    media += nota/4;
    
    if (media >=7){
        resultadoFinal = "APROVADO";
    } else {
        resultadoFinal = "REPROVADO";
    }   
}
resultado.innerHTML = resultadoFinal;