function qtdDigitos(numero){
    let armazenaNumero = numero.toString(); // Convert number to string to count digits
    return 'Quantidade de digitos: ' + armazenaNumero.length;
}

let numero = 3456;
console.log(qtdDigitos(numero)); //  Quantidade de digitos: 4
