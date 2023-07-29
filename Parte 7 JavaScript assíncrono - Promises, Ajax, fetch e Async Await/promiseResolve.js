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

            resolve(msg.toUpperCase() + ' Passei no Promise!');
        }, tempo);
    });
}

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache!'); //em caso de verdadeiro, ele já entrega a primise resolvida!
    } else {
        return esperaAi('Baixei a página!', 3000);
    }
}

baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));