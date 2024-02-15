const grausFahrenheit = Number(prompt('Qual a temperatura em graus  Fahrenheit: '))
const ConversoCelsius = 5 * ((grausFahrenheit-32)/9)

var resultado = document.getElementById("resultado")
resultado.innerHTML = ConversoCelsius