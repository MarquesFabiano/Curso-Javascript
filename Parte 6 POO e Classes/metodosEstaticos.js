class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    static  trocaPilha() { //Usp para todos da classe, não para a instância especifica
        console.log('Pilhas Trocadas'); return;
    }
}

const controle1 = new ControleRemoto ('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();