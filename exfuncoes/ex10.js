// Gestão de produto,Imagine que você está desenvolvendo um sistema de gestão de produtos. Crie uma função adicionarProduto que receba como parâmetros o nome, preço e quantidade de um produto e armazene essas informações em um objeto. Em seguida, crie uma função calcularTotal que calcule o valor total do estoque, multiplicando o preço de cada produto pela sua quantidade e somando todos os valores.

function adicionarProduto(nome, preco, quantidade) {
    return{
        nome,
        preco,
        quantidade,
    }
}

function calcularTotal(produto){
    return produto.preco * produto.quantidade
}

const p1 = adicionarProduto('Geladeira', 45.90, 2)
const valorTotalEstoque = calcularTotal(p1)
console.log(p1)
console.log(valorTotalEstoque)