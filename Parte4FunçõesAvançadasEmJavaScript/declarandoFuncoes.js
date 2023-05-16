//Declaração de função em hoisting; pode declarar ela a qualquer momento do codigo
//a engeine do js irá chamar ela primeiro!
Falaoi();
function Falaoi() {
    console.log("oi");
}

//Firt-class objects(Objetos de primeira classe)
//Function expression
//Joga a função como um dado!
const souUmDado = function() {
    console.log("Sou um dado!");
}

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado); // passou a função como um dado e está executando ela, que foda

//Arrow function. Uma declaração de função mais curta
const funcaoArrow = () => {
    constole.log('Sou uma arrow function!')
}

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();