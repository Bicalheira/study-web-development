// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "Falaaa"; // contexto léxico 2
    return saudacao;
}

//Objetos são grupos  aninhados  de pares chave/valor
const client = {
    nome: "Lucas",
    idade: "23",
    peso: 110,
    endereco: {
        rua: "Rua não te interessa",
        bairro: "Não é da sua conta",
        numero: 123,
    },
};

console.log(saudacao);
console.log(exec());
console.log(client);
