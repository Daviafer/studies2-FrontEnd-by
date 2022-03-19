/* 
  Representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha
*/
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log('Começando o processo de ferver água.')
      resolve()
    } else {
      console.log('É necessário ligar o fogão e colocar a chaleira no fogão pra ferver a água')
      reject()
    }
  })
}
let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo café.')