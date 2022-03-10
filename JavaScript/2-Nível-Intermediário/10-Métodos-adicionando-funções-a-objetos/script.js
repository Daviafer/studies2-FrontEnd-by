let usuario = {
  nome: 'Fulano',

  //método
  excluir: function () {
    console.log('O usuário: ' + this.nome + ', foi excluído.')
  }
}
//chamando a função 

usuario.excluir()