/* 
  O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
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

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
// dentro do then usando função anônima
// passarCace depende da função ferverAgua, e assim por diante
.then(() => {
  return passarCafe();
})
.then(() => {
  return tomarCafe();
})
.then(() => {
  return lavarXicara();
})
.then(() => {
  console.log('Finalizando processo!')
})