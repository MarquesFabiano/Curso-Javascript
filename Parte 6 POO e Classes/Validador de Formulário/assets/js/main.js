class ValidaFormulario {
  construtor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handdleSubmit(e);
    });
  }

  handdleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.checkFields();
  };

  checkFields() {
    let valid = false;

    for(let campo of this.formulario.querySelectorAll('.validar')){
      if(!campo.value) { //se o campo estiver vazio, será false
        this.criaErro(campo, 'Campo')

      }
    }
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg; 
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }

}

const valida = new ValidaFormulario();