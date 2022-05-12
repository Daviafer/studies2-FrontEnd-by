// pegando todos dados 
const itensPerguntasERespostas = document.querySelectorAll(".item");

// adicionando a classe ativo 
itensPerguntasERespostas.forEach(function (item) {
  item.addEventListener("click", function () {
 
    const itemAtivoAtual = document.querySelector(".ativo");
    
    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo")
    }

    item.classList.add("ativo");
  })
})