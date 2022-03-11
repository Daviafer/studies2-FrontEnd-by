function alterarCorDeFundoPrimeiroPost() {
  let posts = document.getElementsByClassName('post');
  // console.log(posts)

  //pegando indice 0 (primeiro parágrafo) para alteração
  let primeiroPost = posts[0];
  console.log('primeiroPost', primeiroPost)
  primeiroPost.style.backgroundColor = 'blue';
}

//Alterando o tamanho da fonte
function aumentarFonteSegundoPost() {
  let textoPosts = document.getElementsByClassName('texto-post');

  //escolhendo o índice 1 (segundo parágrado)
  console.log(textoPosts[1].classList)

  //pegando o nome da classe no estilo css e adicionando
  textoPosts[1].classList.add('fonte-grande')
}

// ---------- -------- Manipulando atributos

function marcarRadio(genero) {
  let radioMasculino = document.getElementById('genero-masculino');

  let raidoFeminino = document.getElementById('genero-feminino');

  //condição ao clicar
  if (genero === 'M') {
    radioMasculino.checked = true;
  } else if(genero === 'F') {
    raidoFeminino.checked = true;
  }
}