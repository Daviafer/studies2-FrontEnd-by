/* 
  O filter é uma função que aceita outra função com parâmetro que será usada pra filter elementos do array
*/

let pessoas = [
  { nome: 'Fulano um', idade: 30 },
  { nome: 'Fulano dois', idade: 30 },
  { nome: 'Fulano tres', idade: 27 },
]
// // SEM o FILTER 
// let pessoasComIdadeDe30Anos = []
// for (let i = 0; i < pessoas.length; i++) {
//   if (pessoas[i].idade === 30) {
//     pessoasComIdadeDe30Anos.push(pessoas[i])
//   }
// }
// console.log(pessoasComIdadeDe30Anos)

//Usando o Filter

//array function
// let pessoasComIdadeDe30Anos = pessoas.filter((pessoa) => return pessoa.idade === 30)

let pessoasComIdadeDe30Anos = pessoas.filter(function(pessoa){
  return pessoa.idade === 30
})
console.log(pessoasComIdadeDe30Anos)