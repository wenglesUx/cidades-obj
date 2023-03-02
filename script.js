let area = document.querySelector('#display')

const loader = document.createElement('div');
loader.className = 'loader';
document.body.appendChild(loader);

fetch('cidades.json')
  .then(response => response.json())
  .then(data => {
    

    newContent =''
    data.cidades.forEach(cidade => {

      newContent +=  `<div class="jsElement">`
      newContent +=  `<img id="imgs" src="${cidade.imagem}">`
      newContent +=  `<p id="elememt">${cidade.nome}</p>`
      newContent +=  `<p id="pop">${cidade.populacao}</p>`
      newContent +=  `<p cidade="pop">${cidade.fundacao}</p>`
      newContent +=  `<p id="estado">${cidade.estado}</p>`
      newContent +=   `<p id="subtitle">${"Pontos turisticos"}</p>`
      newContent +=  `<span id="area_pt">`
      newContent +=  `<p id="estado">${cidade.pontos_turisticos[0]}</p>`
      newContent +=  `<p id="estado">${cidade.pontos_turisticos[1]}</p>`
      newContent +=  `<p id="estado">${cidade.pontos_turisticos[2]}</p>`
      newContent +=  `</span>`
      newContent +=  `</div>`
   
    });
    loader.remove(); 
    area.innerHTML = newContent
   
  })
  .catch(error => console.error(error));
