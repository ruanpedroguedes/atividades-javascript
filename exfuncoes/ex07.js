// Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.

const valorPago = document.getElementById('resultado');
let totalPrestacoes = 0;
let totalValorPago = 0;

function valorPagamento(valorPrestacao, numeroDiasAtraso) {
    let valorTotal = valorPrestacao; // Inicialmente, o valor total é o da prestação

    if (numeroDiasAtraso > 0) { // Se houver atraso
        const multa = valorPrestacao * 0.03; // Calcula a multa (3% do valor)
        const juros = valorPrestacao * (0.001 * numeroDiasAtraso); // Calcula os juros (0.1% por dia)
        valorTotal += multa + juros; // Adiciona multa e juros ao valor total
    }

    return valorTotal; // Retorna o valor total a ser pago
}

function exibirRelatorio() {
    console.log("Relatório do dia:");
    console.log("Total de prestações pagas:", totalPrestacoes);
    console.log("Valor total pago:", totalValorPago.toFixed(2));
}

while (true) {
    const valorPrestacao = parseFloat(prompt('Valor da prestação: '));
    if (valorPrestacao === 0) {
        exibirRelatorio();
        break;
    }
    const numeroDiasAtraso = parseInt(prompt('Quantos dias de atraso teve: '));
    const valorTotal = valorPagamento(valorPrestacao, numeroDiasAtraso);
    valorPago.innerHTML = valorTotal.toFixed(2); // Exibe na tela o valor total a ser pago
    totalPrestacoes++;
    totalValorPago += valorTotal;
}


