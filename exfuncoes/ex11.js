let contatos = []; // Array para armazenar os contatos

function adicionarContato(nome, numeroTelefone) {
    const contato = {
        nome,
        numeroTelefone
    };
    contatos.push(contato);
    return contato;
}

function buscarContatoPorNome(nome) {
    return contatos.find(contato => contato.nome === nome);
}

function removerContatoPorNome(nome) {
    const index = contatos.findIndex(contato => contato.nome === nome);
    if (index !== -1) {
        contatos.splice(index, 1);
        console.log(`Contato "${nome}" removido com sucesso.`);
    } else {
        console.log(`Contato "${nome}" não encontrado.`);
    }
}

// Adicionando contatos
adicionarContato('Ruan', 81996993318);
adicionarContato('Maria', 81999998888);
adicionarContato('João', 81997776666);

// Buscando contato pelo nome
const buscarPorNome = buscarContatoPorNome('Ruan');
console.log(buscarPorNome); // Imprime o contato com nome "Ruan"

// Removendo contato pelo nome
removerContatoPorNome('Ruan');
console.log(contatos); // Imprime os contatos restantes após a remoção

