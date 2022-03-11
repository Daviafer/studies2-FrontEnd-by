// let jogo1 = {
//   nome: 'Final fansasy'
// }
// let jogo2 = {
//   nome: 'Fallout'
// }
let videoGame = {
  nome: 'Xbox',
  valor: 3000,

  //adicionando o objeto: jogo1 e jogo2 no array
  // jogos:[jogo1, jogo2] 
  
  // OUTRA FORMA: criando o objeto logo no array
  jogos: [
    {nome: 'Final fantasy'},
    {nome: 'Fallout'}
  ]
}
//adicionando jogo final do array com push
let jogo3 = {
  nome: 'fifa'
}
videoGame.jogos.push(jogo3)

console.log(videoGame)
console.log('---- ---- ---- ----')

// objeto dentro de outro objeto
let cliente = {
  nome: 'Fulano',

  ultimoPedido: {
    produto:'Xbox',
    valor: 3000,

    jogos:[
      { nome: 'Fifa',
        genero: 'Ação, football'}
    ]
  }
}
//acessando objeto jogos e pegando dado específico no array
console.log(cliente.ultimoPedido.jogos[0].genero)