class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){ 
        if(this.ligado) {
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {}

const s1 = new Smartphone('Iphone');
s1.ligar()
console.log(s1);