/* 
  Rest permite que uma função receba um número indefinido de parâmetros e spread permite definir um número indefinido de parâmetros. Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções.
*/

// Rest deve sempre ser o último dos parâmetros (...nomesQuester)
function incentivarQuester(mensagem, ...nomesQuesters) {
  //mostrando todos do REST na mesma linha
  // console.log(`${mensagem} ${nomesQuesters}`)

  // mapeando array (cada nome em cada linha)
  nomesQuesters.map(nomesQuesters => console.log(`${mensagem} ${nomesQuesters}`))

}
incentivarQuester('Parabéns por ter chegado no módulo JavaScript avançado', 'João', 'Alberto', 'Keila', 3, true)