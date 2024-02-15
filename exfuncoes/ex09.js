function inverteNumero(numero) {
    let numeroInvertido = numero.toString();
    let invertido = numeroInvertido.split('').reverse().join('');
    return 'Número em ordem inversa: ' + invertido;
}

let numero = 123;
console.log(inverteNumero(numero));
