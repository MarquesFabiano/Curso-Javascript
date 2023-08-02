

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribut('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error('Erro!');

    const html = await response.text(); // vai converter a promise do response em texto
    carregaResultado(html);
  } catch(e){
    console.log(e);
  }

}


function carregaResultado(response) {
  const resultado = document.querySelector('.response');
  resultado.innerHTML = response;
}

