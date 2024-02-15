const lado1 = Number(prompt('Primeiro lado: '))
const lado2 = Number(prompt('Segundo lado: '))
const lado3 = Number(prompt('Terceiro lado: '))
const resultado = document.getElementById("resultado")

if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
    resultado.innerHTML = "É um triângulo"
    if (lado1 == lado2 == lado3) {
        resultado.innerHTML = "EQUILÁTERO"
    }
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        resultado.innerHTML = "ISÓCELES"
    }   
    if (lado1 != lado2 || lado1 != lado3 || lado2 != lado3) {
    }
} else {
    resultado.innerHTML = "Sinto muito, não forma um triângulo"
}
