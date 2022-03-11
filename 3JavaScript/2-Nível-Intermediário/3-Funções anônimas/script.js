// function somar(numero1, numero2) {
//   return numero1 + numero2
// }
// let resultadoDaSoma = somar(3, 7)
// console.log(resultadoDaSoma)

// ANÔNIMA: uma função dentro de uma variável

let resultadoDaSoma = function somar(numero1, numero2) {
  return numero1 * numero2
}
console.log(resultadoDaSoma(3, 7))