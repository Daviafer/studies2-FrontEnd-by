/* Higher order functions = função dentro de uma função */

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
  const mesAtual = 2
  let anoDeNascimento = 2022 - idade
  
  if (mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}
  // função dentro de uma função
  let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento+ '.')
}
calcularAnoDeNascimento(28, 9, imprimirAnoDeNascimento)

// ------------ OUTRO EXEMPLO ------------

function multiplicar(multiplicador) {
  return function (numero) {
    return numero * multiplicador
  }
}
let dobrar = multiplicar(2)       //valor que será feiro com o número escolhido
let triplicar = multiplicar(3)    
let quadruplicar = multiplicar(4) 

console.log(dobrar(3))      // escolhendo número 3
console.log(triplicar(3))
console.log(quadruplicar(3))