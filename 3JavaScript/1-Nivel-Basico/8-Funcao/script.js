/* 
    function nomeDaFuncao(){
      <bloco de execução>
    }

    nomeDaFuncao()
*/
/* 
    function nomeDaFuncao(parametro1, parametro2){
      <bloco de execução>
    }

    nomeDaFuncao(parametro1, parametro2)
*/

function exemploDeFuncao() {
  alert('Função realizada')
}
  exemploDeFuncao()

// / / / / / / / / / / / / / / / / / / / / / / / /

function some(numero1, numero2) {
  return numero1 + numero2
}
// atribuindo a uma variável
let resuldadoDaSoma = soma(2,3)
console.log(resuldadoDaSoma) // 5

// pegando valor anterior que é 5 e somando novamente com 10
resuldadoDaSoma = soma(resuldadoDaSoma, 10)
console.log(resuldadoDaSoma) // 15

// / / / / / / / / / / / / / / / / / / / / / / / /

// definindo valor padrão (Quester) no parâmetro caso não tenha sido definido na chamada
function incentivarQuester(nomeQuester = 'Quester') {
  alert('Muito bem ' + nomeQuester + ' você está treinando JavaScript, continue!')
}
incentivarQuester('Fulano de tal') // caso não tenha nome fica em Quester