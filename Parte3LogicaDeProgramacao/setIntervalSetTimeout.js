function mostrarHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR',{
        hour12: false
    });
}
// atribiu o setInterval em uma função anonima! 
const timer = setInterval(function (){
    console.log(mostrarHora());
}, 10000); //aqui é em milissegundos!

//serve para parar algo
setTimeout(function(){
    clearInterval(timer); // para o setinterval apos 4segundos!
}, 4000);

setTimeout(function(){
    console.log("Apareci agoraaaa!");
}, 6000);