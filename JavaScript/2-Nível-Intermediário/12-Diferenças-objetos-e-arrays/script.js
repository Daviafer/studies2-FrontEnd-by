//ARRAY
let frutras = ['uva', 'pera','laranja']

//OBJETO
let videoGame = {
  nome: 'Xbox',
  valor: 3000
}
let videoGame2 = {
  nome: 'Playstation',
  valor: 5000
}

//OBJETO com ARRAY
let videoGames = [videoGame, videoGame2]


console.log(videoGames)   // mostrando todos do array
console.log(videoGames[1])  // mostrando somente posição indice 1 do array (no caso, o playstation ...)

console.log(videoGames[1].nome) // mostrando informações específicas