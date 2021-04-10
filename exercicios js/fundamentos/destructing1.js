// novo recurso do ES2015

const pessoa = {
    nome: "Lucas",
    idade: "23",
    endereco: {
        logradouro: "Rua 1",
        numero: "1001",
    },
};

const { nome, idade } = pessoa;
console.log("Nome: ", nome, " Idade: ", idade);

const { nome: n, idade: i } = pessoa;
console.log("Nome: ", n, " Idade: ", i);

const { sobrenome, naoExiste = true } = pessoa;
console.log(sobrenome, naoExiste);

const {
    endereco: { logradouro, numero, cep },
} = pessoa;

console.log(logradouro, numero, cep);

