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
            if (typeof valor !== 'number'){
                    throw new TypeError("Mensagem de erro");
            }
        }
    });
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){

        }
    }
}

const p2 = criaProduto("camiseta");

console.log(p2.nome);