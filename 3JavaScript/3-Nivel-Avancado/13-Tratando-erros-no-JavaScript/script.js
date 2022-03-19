/* 
   - try e catch = para tratamento de erros
   - Finally = será executado após try e catch de forma independente.
   - throw = informar erro caso seja necessário; pode retornar um texto, numero, booleano, chamar função ou usar construtores do próprio JS para dar um throw de um erro específico
*/

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    
    //throw
    // typeof - verifica o tipo da variável
    if(typeof chaleiraEstaNoFogao != 'boolean') throw 'Erro - Somente o tipo booleano é aceito'
    
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log('Passo 1 finalizado: Água foi fervida')
      resolve()
    } else {
      const mensagemDeErro = 'É necessário ligar o fogão e colocar a chaleira no fogão pra ferver a água'
      reject(mensagemDeErro)
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

let chaleiraEstaNoFogao = 'testando o throw'
// let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false

async function iniciarProcessoDeFazerCafe() {
  try {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)

  } catch (error) {
      console.log(error)
  } finally {
    console.log('Finalizar o processo.')
  }
}
iniciarProcessoDeFazerCafe()