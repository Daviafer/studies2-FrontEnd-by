/* 
  Ele simplesmente nos permite escrever código baseado em promessas como se fosse síncrono e verifica se não estamos quebrando o thread de execução
*/

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log('Passo 1 finalizado: Água foi fervida')
      resolve()
    } else {
      console.log('É necessário ligar o fogão e colocar a chaleira no fogão pra ferver a água')
      reject()
    }
  })
}
let passarCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log('Passo 2 finalizado: Café foi passado.')
    resolve(true)
  })
}
let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log('Passo 3 finalizado: Terminei tomar café.')
    resolve(true)
  })
}
let lavarXicara = (cafeTomado) => {
  return new Promise((resolve) => {
    console.log('Passo 4 finalizado: Terminei de lavar a xícara')
    resolve(true)
  })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe(){
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  const cafePassado = await passarCafe(aguaFervida)
  const cafeTomado = await tomarCafe(cafePassado)
  const xicaraLavada = await lavarXicara(cafeTomado)

  if(xicaraLavada) console.log('Finalizar o processo.')
}
iniciarProcessoDeFazerCafe()