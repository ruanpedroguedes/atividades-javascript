let n1 = Number(prompt("n1: "))
let n2 = Number(prompt("n2: "))
const resultado = document.getElementById("resultado")

let intervalo = []
if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
      intervalo.push(i)
    }
  } else {
    for (let i = n2; i <= n1; i++) {
      intervalo.push(i)
    }
}

let soma = 0
for(let i = 0; i < intervalo.length; i++ ) {
    soma += intervalo[i]
}

resultado.innerHTML = intervalo + " Soma : " + soma