const nome = 'Fabiano';
const sobrenome = 'Marques';

const falaNome = () => nome + ' ' + sobrenome;

/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome(); */

exports.nome = nome; //exports.CHAVE = VALOR
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(exports);