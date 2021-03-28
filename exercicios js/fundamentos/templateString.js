const nome = "Lucas";
const concatenacao = "Ola " + nome + "!";

const template = `
    Olá
    ${nome}!
`;

console.log(concatenacao, template);

// Expressões

console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();

console.log(`Ei... ${up("Cuidado")}!`);
