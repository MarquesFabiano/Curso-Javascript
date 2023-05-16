function relogio() {
  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (evento) {
    const elemento = evento.target; //pega um elemento de acordo com o evento click
    //verifica se o elemento contem o paramentro. 
    if (elemento.classList.contains('iniciar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado')
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  });
}
relogio();