const pessoa = {  //objeto literal
    nome: "Fabiano",
    sobrenome: "Marques",
    idade: 26,
    falarIdade: function() {
        return (`Eu tenho ${this.idade} anos`);
    }
};

pessoa.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getDataNascimento());


for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

//Função construtora

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //trava o objeto, não pode ser alterado. Meio perigoso...
};


const p1 = new Pessoa("Fabiano", "Marques");
console.log(p1);






const chave = 'nome';
console.log(oessoa[`nome`]) // usar conchetes quando não se sabe o que vai receber

const pessoa1 = new Object(); //usando construtor, criando objeto por referencia 
pessoa.nome = "Fabiano";
pessoa.sobrenome = "Marques";

delete pessoa1.nome;  //apaga o nome da pessoa 1
console.log(pessoa1); 