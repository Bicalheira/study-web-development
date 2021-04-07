console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Lucas";
// obj1["sobrenome"] = "Bicalho";

console.log(obj1);

function Obj(nome) {
    this.nome = nome;
    this.exec = function () {
        console.log("Exec...");
    };
}

const obj2 = new Obj("Teclado");
const obj3 = new Obj("Mouse");

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
