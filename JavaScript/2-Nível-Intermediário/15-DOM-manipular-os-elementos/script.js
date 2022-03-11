function adicionarComentario() {
  let inputComentario = document.getElementsByName('novo-comentario');

  // pra mostrar o valor que usuário digitou
  let textoDigitado = inputComentario[0].value;

  //pegando o valor e adicionando na div fazia dos comentário
  //1 - pegar elemento da tela
  let novosComentarios = document.getElementById('novos-comentarios');

  // innerHTML = conteúdo interno 
  novosComentarios.innerHTML += `<p> Novo comentário: ${textoDigitado} </p>`
}