/* 
  Serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.
*/
let ordens = [
  { cliente: 'Fulano um', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
  { cliente: 'Fulano dois', tipo: 'compra', quantidade: 50, ativo: 'NFLX34'},
  { cliente: 'Fulano tres', tipo: 'venda', quantidade: 38, ativo: 'NFLX34'}
]

// let quantidadeDeOrdens = 0
// for (let i = 0; i < ordens.length; i++) {
//   quantidadeDeOrdens += ordens[i].quantidade
// }

// - USANDO REDUCE 
// let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem){
//   // console.log('Ordem', somaOrdens, ordem)
//   return somaOrdens + ordem.quantidade
// }, 0)

// forma abreviada 
let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)

console.log(quantidadeDeOrdens)