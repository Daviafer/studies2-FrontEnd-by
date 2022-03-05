/* 
    var   = escopo global
    let   = escopo local
    const = escopo local
 */

// if(true){
//   var mensagem = 'Olá var'
// }
// console.log(mensagem)

// if(true){
//   let msg = 'Olá let'
// }
// console.log(msg)

// = = = = = = = = = = FUNCTION = = = = = = = = = =

function falar() {
  
    // mesmo sendo global, o var tem limite no function
  var mensagemFuncao = 'Olá mundo'
  console.log(mensagemFuncao)
}
falar()
console.log(mensagemFuncao)   // chamando sem resultado - não definido

// = = = = = = = = = = VARIÁVEL GLOBAL = = = = = = = = = =
// definida no index.html
console.log(url)