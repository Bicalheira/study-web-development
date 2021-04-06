//Armazenando uma função em uma variável
const imprimeSoma = function (a, b) {
    console.log(a + b);
};

imprimeSoma(2, 3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 2));

//Retorno implícito

const subtracao = (a, b) => a - b;
console.log(subtracao(3, 2));
