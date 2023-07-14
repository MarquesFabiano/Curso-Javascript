function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    }
}

const duplica = (criaMultiplicador(2));
const triplicador = (criaMultiplicador(3));
const quadriplicador = (criaMultiplicador(4));

console.log(duplica(2));
console.log(triplicador(2));
console.log(quadriplicador(2));