/*
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o,'prop')
...(spread)

JÁ VIMOS
Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade) */

const produto = {nome: 'caneca', preco: 1.8};
const outraCoisa = Object.assing({}, produto, {material: "porcelana"});
 
 caneca.produto = "Outro nome";
 caneca.preco = 2.5;
console.log(produto);
