// Quando se cria um objeto literal, ele chama a função construtora new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB= {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC,objB);
// console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto ('Camisa', 50);
p1.desconto(50);
p1.aumento(25);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(100);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    nome: {        
        writable:true,
        configurable: true,
        enumerable: true,
        value: 'sapato'
    },
    preco: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    modelo: {
        writable:true,
        configurable: true,
        enumerable: true,
        value: 'adidas'
    },
});

p3.aumento(20);
console.log(p3);