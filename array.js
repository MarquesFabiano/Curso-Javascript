const nomes = ["fabiano", 'Lara', "ana", "joão"];

// nomes.splice(indice, delete, elemento1, elemento2) primeiro passa o indice argumento que quer começar, delete, elementos para adicionar

//pop
const removidos = nomes.splice(-2, Number.MAX_VALUE); //retorna o elemento removido como um array
console(nomes, removidos);