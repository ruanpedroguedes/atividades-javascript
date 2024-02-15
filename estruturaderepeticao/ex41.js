let valorDivida = Number(prompt("Valor da dívida: "));
let juros = 0.15;
let valorComJuros = 0;
let parcelas = 10;
let valorParcelado = 0;
let valorFinal = 0;

while (valorDivida > 0) {
    valorComJuros += juros * valorDivida; // Acumula o valor dos juros a cada iteração
    valorFinal = valorComJuros + valorDivida;
    valorParcelado = valorFinal / parcelas;
    
    // Adicione a lógica para garantir que a dívida não seja aumentada indefinidamente
    valorDivida += valorParcelado;
}

// Exibindo os resultados (certifique-se de ter um elemento com o id "resultado" no HTML)
let resultado = document.getElementById("resultado");
resultado.innerHTML = "Valor da Dívida: " + valorDivida.toFixed(2) + "<br>" +
                     "Juros a Pagar: " + valorComJuros.toFixed(2) + "<br>" +
                     "Dívida Final com Juros: " + valorFinal.toFixed(2) + "<br>" +
                     "Valor Parcelado: " + valorParcelado.toFixed(2);
