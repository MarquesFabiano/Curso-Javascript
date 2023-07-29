//criando um numero random para simular o tempo
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min)+ min);
}

//Usando setTimeOut para demorar e simular uma espera
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { //use o "return" caso queira que ela pare de executar após o erro
        if(typeof msg !== 'string') reject("BAD VALUE");

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise!');
        }, tempo);
    });
}

//veremos aqui: promise.all, promise.race. promise.resolve, promise.reject
const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro Valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.logo(erro);
    });

