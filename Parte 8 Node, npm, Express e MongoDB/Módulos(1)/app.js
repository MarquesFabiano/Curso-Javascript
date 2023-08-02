/* const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome()) */

//desestruturação 
const {nome, sobrenome, falanome} = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());