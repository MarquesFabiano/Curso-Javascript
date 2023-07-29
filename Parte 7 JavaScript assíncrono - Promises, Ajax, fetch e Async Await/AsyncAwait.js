//criando um numero random para simular o tempo
function rand(min = 0, max = 3){
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

            resolve(msg);
        }, tempo);
    });
}


/*
esperaAi('Fase 1', rand(0,3))
    .then(valor => {
        console.log(valor);
        return (esperaAi('Fase 2', rand()))
    })
    .then(valor => {
        console.log(valor);
        return(esperaAi('Fase 3', rand()))
    })
    .then(valor => {
        console.log(valor);
    })
    .catch(e => console.log(e)); */

    async function executa() {
        try {
            const fase1 = await esperaAi('fase 1', rand());
            console.log(fase1);
            const fase2 = await esperaAi('fase 2', rand());
            console.log(fase2);
            const fase3 = await esperaAi('fase 3', rand());
            console.log(fase3);
            console.log('Terminamos na fase:', fase3);
        } catch(e){ //tratamento de erros!
            console.log(e);
        }

     }
    
    executa();