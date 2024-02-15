let nome = prompt("Nome: ");
let idade = Number(prompt("Idade: "));
let salario = Number(prompt("Salário: "));
let sexo = prompt("Sexo f - feminino m - masculino: ");
let estadoCivil = prompt("Estado Civil: 's', 'c', 'v', 'd': ");
const resultado = document.getElementById("resultado");

while (nome.length <= 3) {
    nome = prompt("Nome: ");
}
while (idade > 150 || idade < 0) {
    idade = Number(prompt("Idade: "));
}
while (salario < 0) {
    salario = Number(prompt("Salário: "));
}
while (sexo !== "f" && sexo !== "m") { 
    sexo = prompt("Sexo f - feminino m - masculino: ");
}
while (!(estadoCivil === "s" || estadoCivil === "c" || estadoCivil === "v" || estadoCivil === "d")) {
    estadoCivil = prompt("Estado Civil: 's', 'c', 'v', 'd': ");
}

resultado.innerHTML = "Nome: " + nome + "<br> Idade: " + idade + "<br> Salário: " + salario + "<br> Sexo: " + sexo + "<br> Estado Civil: " + estadoCivil;
