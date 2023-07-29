//criando um numero random para simular o tempo
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min)+ min);
}

//Usando setTimeOut para demorar e simular uma espera
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro ;(');
                return;
            }

            resolve(msg.toUpperCase() + ' Fui o primeiro a passar!');
        }, tempo);
    });
}

// race entrega o primeiro valor a ser resolvido
const promises = [
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),
    esperaAi(101, rand(1,3)),
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });

