const request = obj => {
  return new Promise((resolve, reject) => { // Correção: Adicionando parênteses ao redor do parâmetro da função Promise
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); //síncrono (true) ou se assíncrono (false)
    xhr.send(); // para enviar dados

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };
  
  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e){
    console.log(e);
  }

}

function carregaResultado(response) {
  const resultado = document.querySelector('.response');
  resultado.innerHTML = response;
}
