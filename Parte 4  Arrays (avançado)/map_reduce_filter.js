/* Retorne a soma do dobre de todos os pares 
-> filtrar os pares
-> dobrar os pares
-> reduzir (somar tudo)*/ 

const numeros = [5, 50, 80, 1,2, 3, 4, 45, 18, 8,9,11];

const resultado = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador+= valor);

    console.log(resultado);