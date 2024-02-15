function somaImposto(taxaImposto, custo){
    const imposto = custo * taxaImposto
    const custoComImposto = custo + imposto
    return custoComImposto;
}

const custoInicial = 100
const taxa = 0.10
const custoFinal = somaImposto(taxa, custoInicial)

console.log('Valor sem imposto: ' ,custoInicial)
console.log('Valor com imposto: ', custoFinal)
