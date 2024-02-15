let voos = [];

function criarVoo(numeroVoo, origem, destino, data, quantidadeAssentos) {
    const voo = {
        numeroVoo,
        origem,
        destino,
        data,
        quantidadeAssentos
    };
    voos.push(voo);
    return voo;
}

// Exemplo de criação de voos
criarVoo(2343, 'Recife', 'São Paulo', '01-04-2020', 300);
criarVoo(2344, 'Manaus', 'Acre', '01-05-2020', 450);
criarVoo(2345, 'Santa Catarina', 'Petrolina', '01-09-2020', 500);
criarVoo(2346, 'Brasília', 'Rio de Janeiro', '01-02-2020', 700);

function reservarAssento(numeroVoo, quantidade) {
    const voo = voos.find(voo => voo.numeroVoo === numeroVoo);

    if (!voo) {
        console.log("Voo não encontrado.");
        return;
    }

    // Verifique se há assentos disponíveis
    if (voo.quantidadeAssentos >= quantidade) {
        // Atualize o número de assentos disponíveis
        voo.quantidadeAssentos -= quantidade;
        console.log(`Reserva feita com sucesso para ${quantidade} assentos.`);
    } else {
        console.log("Desculpe, não há assentos disponíveis suficientes.");
    }
}

function cancelarReserva(numeroVoo, quantidade) {
    const voo = voos.find(voo => voo.numeroVoo === numeroVoo);

    if (!voo) {
        console.log("Voo não encontrado.");
        return;
    }

    // Verifique se a quantidade de assentos a serem cancelados é válida
    if (quantidade > 0 && quantidade <= (voo.quantidadeAssentos - voo.quantidadeAssentosDisponiveis)) {
        // Atualize o número de assentos disponíveis
        voo.quantidadeAssentos += quantidade;
        console.log(`Cancelamento de reserva feito com sucesso para ${quantidade} assentos.`);
    } else {
        console.log("Desculpe, não é possível cancelar a reserva para a quantidade especificada de assentos.");
    }
}

function verificarDisponibilidade(numeroVoo) {
    const voo = voos.find(voo => voo.numeroVoo === numeroVoo);

    if (!voo) {
        console.log("Voo não encontrado.");
        return;
    }

    console.log(`No voo ${numeroVoo}, há ${voo.quantidadeAssentos} assentos disponíveis.`);
}

// Exemplo de uso:
reservarAssento(2343, 2);
cancelarReserva(2343, 1);
verificarDisponibilidade(2343);
