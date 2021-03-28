let valor; // Não inicializa
console.log(valor);

valor = null; // Ausência de valor
console.log(valor);
// console.log(valor.toString()); //! Erro

const produto = {};
console.log(produto);
console.log(produto.preco);

produto.preco = 3.5;

console.log(produto);

produto.preco = undefined; // Evite atribuir UNDEFINED
console.log(!!produto.preco);
console.log(produto.preco);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);
