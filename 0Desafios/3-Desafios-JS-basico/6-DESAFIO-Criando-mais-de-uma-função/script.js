// função para cada operação matemática (soma, divisão, multiplicação e subtração)

// FIZ ALGUMAS IMPLEMENTAÇÕES NO RETORNO

function somaNumeros(num1, num2) {
  let soma = num1 + num2;
  return 'A soma do número ' + num1 + ' com ' + num2 + ' é: ' + soma;
}
function divideNumeros(num1, num2) {
  let divisao = num1 / num2;
  return 'A divisão do número ' + num1 + ' com ' + num2 + ' é: ' + divisao;
}
function multiplicaNumeros(num1, num2) {
  let multiplicacao = num1 * num2;
  return 'A multiplicação do número ' + num1 + ' com ' + num2 + ' é: ' + multiplicacao;
}
function subtraiNumeros(num1, num2) {
  let subtracao = num1 - num2;
  return 'A subtração do número ' + num1 + ' com ' + num2 + ' é: ' + subtracao;
}
// Realizando a chamada das 4 funções, colocando eles em uma variável

let resultadoSoma = somaNumeros(2, 2)
console.log(resultadoSoma)

let resultadoDivisao = divideNumeros(20, 5)
console.log(resultadoDivisao)

let resultadoMultiplicacao = multiplicaNumeros(3, 9)
console.log(resultadoMultiplicacao)

let resultadoSubtracao = subtraiNumeros(9, 4)
console.log(resultadoSubtracao)