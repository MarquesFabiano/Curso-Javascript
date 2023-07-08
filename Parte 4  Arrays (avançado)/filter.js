// filtrar valores de um array, mas retorna um array com a mesma quantidade de elementos ou menos que o array original
//ele requer que voce retorne um boolean, se for verdadeiro, sera imbutido no nova array, se for falso, não sera.

// retorne, em um array, apenas os números maiores que 10:
const numeros = [5, 50, 80, 1,2, 3, 4, 45, 18, 8,9,11];

/*function callbackFilter(valor, indice, array) {
  return valor > 10;
} Dunção de callback completa, porem usa-se mais a arrow function no parametro do filter*/


const numerosFiltrados = numeros.filter(valor =>  valor > 10);

console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cojo nome termina com a
const pessoas = [
  { nome: "Fabiano", idade: 26 },
  { nome: "Luiz", idade: 12 },
  { nome: "Chico", idade: 62 },
  { nome: "Angela", idade: 16 },
  { nome: "Anna", idade: 20 },
  { nome: "Lara", idade: 55 },
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoasNomeGrande);

const pessoasIdosas = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasIdosas);

const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith("a"));

console.log(pessoasTerminaComA);