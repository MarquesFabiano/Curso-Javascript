//criando um numero random para simular o tempo
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min)+ min);
}

//Usando setTimeOut para demorar e simular uma espera
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject("BAD VALUE");

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o DB', rand(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados da base', rand(1,3));
    })
    .then(resposta => {
       console.log(resposta);
       return esperaAi(2222, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe os dados na tela do usuário!')
    })
    .catch(erro => {
        console.log('Erro!', erro);
    });

