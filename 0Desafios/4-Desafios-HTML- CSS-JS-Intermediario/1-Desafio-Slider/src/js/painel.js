const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

// contador
let imagemAtual = 0;

// criando o evento 
setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  // buscando no array próxima imagem 
  imagemAtual++;

  
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();

});
setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }
  imagemAtual--;
  
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();

});
function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}
// setas 
function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if(naoEhAPrimeiraImagem){
    setaVoltar.classList.remove("opacidade");
  } else{
    setaVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if(chegouNaUltimaImagem){
    setaAvancar.classList.add("opacidade");
  }else{
    setaAvancar.classList.remove("opacidade");
  }
}