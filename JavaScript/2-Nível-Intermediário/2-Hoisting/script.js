/* Deslocamento da declaração de todas as variáveis e funções para o topo do código. A mudança (içamento) ocorre durante a fase de Criação do Contexto de Execução que move as declarações de variáveis e de funções para o início do script.
 */

//var pais        // declaraçao
//pais = 'Brasil' // atribuição

console.log(pais)   // resultado é undefined
var pais = 'Romênia'

/*  O que acontece:
var pais
console.log(pais)
pais = 'Romênia'
*/

// -------------------- LET 

console.log(pais2)    //  não é possível acessar pais2
let pais2 = 'Brasil'


