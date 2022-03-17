/* 
  Cria um array novo com mesmo número de elementos (espécie de cópia do array)
*/
let pessoas = [
  { nome: 'Fulano um', idade: 33},
  { nome: 'Fulano dois', idade: 31},
  { nome: 'Fulano três', idade: 28}
]
// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//   nomeDasPessoas.push(pessoas[i].nome);
// }
// console.log(nomeDasPessoas)

// USANDO MAP 

// let nomeDasPessoas = pessoas.map(function(pessoa){
//   return pessoa.nome + " têm " + pessoa.idade + " anos de idade."
// })
// console.log(nomeDasPessoas)

// array function

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm "+ pessoa.idade + " anos de idade")
console.log(nomeDasPessoas)