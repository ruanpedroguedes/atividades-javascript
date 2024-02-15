const letra = prompt('Letra: '); // Substitua 'a' pela letra que deseja verificar
letra = letra.toLowerCase(); // Convertendo para minúscula para facilitar a verificação
const resultado = document.getElementById('resultado')

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    resultado.innerHTML = letra + ' é uma vogal.'
} else if (letra >= 'a' && letra <= 'z') {
    resultado.innerHTML = letra + ' é uma consoante.'
} else {
    resultado.innerHTML ='Por favor, insira uma letra válida.'
}
