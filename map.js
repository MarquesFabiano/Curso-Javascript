// altera valores do array ou objeto, retorna um novo array

// dobre os números 
const numeros = [5, 50, 80, 1,2, 3, 4, 45, 18, 8,9,11];
const numerosEmDobro = numeros.map(valor => valor *2);
console.log(numerosEmDobro);


/* Para cada elemento:
 Retorne apenas uma String com o nome da pessoa
 Remova apenas a chave "nome" do objeto
 Adiciona a chave "id" em cada objeto */


const pessoas = [
    { nome: "Fabiano", idade: 26 },
    { nome: "Luiz", idade: 12 },
    { nome: "Chico", idade: 62 },
    { nome: "Angela", idade: 16 },
    { nome: "Anna", idade: 20 },
    { nome: "Lara", idade: 55 },
  ]

  const nomesEmString = pessoas.map(obj => obj.nome);
  console.log(nomesEmString);

  const nomeRemovido = pessoas.map(obj =>({idade: obj.idade})) // envolver entre parenteses, para se tornar uma expressão
    console.log(nomeRemovido);                                 // Logo, as chaves não serão entendidas como participante da função, mas sim do objeto.

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {... obj};
    newObj.id = indice + 1;
    return obj;
});
console.log(comIds)

//como é passado por referencia, ao se mexer no objeto, ele mexe no original, caso não queria fazer isso, faça um objeto novo.