function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: false, // valor nao pode ser alterado
            configurable: false // não pode reconfigurar a chave
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        }
    });
}


const p1 = new Produto("Camisa", 30, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}