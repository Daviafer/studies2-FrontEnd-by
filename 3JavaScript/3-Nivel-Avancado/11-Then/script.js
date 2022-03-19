/* 
  O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
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

let passarCafe = () => console.log('Passando café.')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('Fazendo café.')