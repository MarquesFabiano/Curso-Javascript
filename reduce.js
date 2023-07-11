
/*some todos os números (reduce)
Retorne um array com os pares (filter)
retorne um array com o dobro dos valores(map)*/
const numeros = [5, 50, 80, 1,2, 3, 4, 45, 18, 8,9,11];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0); //é o valor que inicia o acumulador

console.log(total);

const numerosPares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor); // jaga o valor dentro do acumulador
    return acumulador;
},[]); //retorna o acumulador como um array

console.log(numerosPares);

const valoresDobrados = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
},[]);

console.log(valoresDobrados);


// retorne a pessoa mais velha
const pessoas = [
  { nome: "Fabiano", idade: 26 },
  { nome: "Luiz", idade: 12 },
  { nome: "Chico", idade: 62 },
  { nome: "Angela", idade: 16 },
  { nome: "Anna", idade: 20 },
  { nome: "Lara", idade: 55 },
];