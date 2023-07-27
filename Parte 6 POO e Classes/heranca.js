class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){ 
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }
        this.ligado = true;
        console.log('Foi ligado'); return;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //chamar a superclass
        this.cor = cor;
        this.modelo = modelo;
    }
}


const s1 = new Smartphone('Iphone', 'Preto', 'Mi 8');
s1.ligar()
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temCamera){
        super(nome);
        this.temCamera = temCamera;
    }
}

const t1 = new Tablet('Samsung', false)

t1.ligar();
console.log(t1)