// arguments que sustenta todos os argumentos enviados
function funcao() {
 let total = 0;
 for(let argumentos of arguments){ //todos os argumentos continuam na variavel arguments 
    total += argumentos;
 }
 console.log(total);
}                     
funcao(5,4,6,7,8,4,1,3,3); //envia um argumento para o parâmetro para a função!

function novaFuncao(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
novaFuncao(1,2,3) //se o numero de argumentos são maiores que os de parâmetros, eles vão ficar como undefined

function funcaoSoma(a, b = 4, c) { //enviando o valor undefined para b, ele "pula" ela
                                    // dessa forma o valor que está no parâmetro ainda será usado.
    console.log(a+b+c);
}
funcaoSoma(2, undefined,14);

function funcaoAtribu({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj1 = {nome:'fabiano', sobrenome:'marques', idade:25 };
funcaoAtribu(obj1);

function conta (operador, acumulador,...numeros) { //rest operator, recebe todos os outros argumentos apos o ultimo
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+',0, 50,20,306,58)