class Carro {
    constructor(marca, modelo, ano) {
      this._marca = marca;
      this._modelo = modelo;
      this._ano = ano;
      this._ligado = false;
      this._velocidade = 0;
    }
  
    _validarCarroLigado() {
      if (!this._ligado) {
        throw new CarroError('O carro não está ligado.');
      }
    }
  
    _validarCarroParado() {
      if (this._velocidade !== 0) {
        throw new CarroError('O carro não pode realizar esta ação com velocidade diferente de zero.');
      }
    }
  
    ligar() {
      if (this._ligado) {
        console.log('O carro já está ligado.');
      } else {
        console.log('O carro está ligado.');
        this._ligado = true;
      }
    }
  
    desligar() {
      if (!this._ligado) {
        console.log('O carro já está desligado.');
      } else {
        console.log('O carro está desligado.');
        this._ligado = false;
      }
    }
  
    acelerar(quantidade) {
      try {
        this._validarCarroLigado();
        this._velocidade += quantidade;
        console.log(`O carro acelerou ${quantidade} km/h.`);
        console.log(`Velocidade atual: ${this._velocidade} km/h.`);
      } catch (error) {
        console.log(error.message);
      }
    }
  
    frear(quantidade) {
      try {
        this._validarCarroLigado();
        this._validarCarroParado();
  
        if (this._velocidade < quantidade) {
          quantidade = this._velocidade;
        }
  
        this._velocidade -= quantidade;
        console.log(`O carro reduziu a velocidade em ${quantidade} km/h.`);
        console.log(`Velocidade atual: ${this._velocidade} km/h.`);
      } catch (error) {
        console.log(error.message);
      }
    }
  
    obterDetalhes() {
      console.log(`Detalhes do carro - Marca: ${this._marca}, Modelo: ${this._modelo}, Ano: ${this._ano}`);
    }
  }
  
 
  class CarroError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CarroError';
    }
  }
  
  // Teste sua classe Carro
  const meuCarro = new Carro('Toyota', 'Corolla', 2022);
  
  meuCarro.ligar();
  meuCarro.acelerar(50);
  meuCarro.frear(20);
  meuCarro.desligar();
  meuCarro.obterDetalhes();
  