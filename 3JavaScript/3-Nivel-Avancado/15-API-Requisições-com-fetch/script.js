// evento do button - tirar carta aleatoria
document.getElementById('tirar-carta').addEventListener('click', () => {
  tirarCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado(){
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const resposta = await fetch(url)
  return await resposta.json(url)
}
async function tirarUmaCarta(deck_id){
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  const resposta = await fetch(url)
  return await resposta.json()
}
async function tirarCartaAleatoriaDoBaralho() {
  const baralho = await criarBaralhoEmbaralhado()
  const carta = await tirarUmaCarta(baralho.deck_id)
  //mostrando carta no html
  const imagemCarta = carta.cards[0].image
  document.getElementById('carta').src = imagemCarta
}
tirarCartaAleatoriaDoBaralho()
console.log('Segue o fluxo sem esperar')