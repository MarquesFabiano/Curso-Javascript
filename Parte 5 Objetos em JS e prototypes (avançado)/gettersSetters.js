function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() { //metodo para retornar o valor
            return estoque;
        },
        set: function(valor) {
            
        }
    });
}

console.log(p1.estoque)