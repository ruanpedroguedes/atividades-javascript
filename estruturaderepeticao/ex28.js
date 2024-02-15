const resultado = document.getElementById("resultado")

let somaTotal = 0
let mediaTotal = 0

for (let i =0; i < 2; i++) {
    let cd = Number(prompt("Quantos cds: "))
    let valorCd = Number(prompt("valor cd: "))
    somaTotal = cd * valorCd
    mediaTotal = somaTotal/valorCd
}

resultado.innerHTML = "Total gasto: " + somaTotal + "<br>" + "Média por CD: " + mediaTotal