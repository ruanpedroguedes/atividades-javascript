function verificaNumero(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else {
        return 'Negativo';
    }
}

let resultado = verificaNumero(50);
console.log(resultado);
