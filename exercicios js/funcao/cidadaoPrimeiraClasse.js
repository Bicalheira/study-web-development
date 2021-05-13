// Função em JS é First-Class Object (Citizen)
// High-order function

// Criar de forma literal
function fun1() {}

// Armazenando em uma variável
const fun2 = function () {}

// Armazenando em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenando em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar());

// Passando função como parâmetro
function run(fun) {
    fun();
}

run(function () {
    console.log('Executando...')
})

// Retorno de função com um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2,3);
cincoMais(4);