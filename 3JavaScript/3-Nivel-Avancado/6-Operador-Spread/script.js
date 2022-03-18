/* 
  Consegue expandir um objeto interável (um array ou string, objetos que podem ser percorridos)
*/

const pessoas = ['Fulano', 'Ciclano', 'Beltrano']
console.log(...pessoas)

// CONCATENAR DOIS ARRAYS - concat e spread
let pessoas1 = ['Fulano', 'Ciclano', 'Beltrano']
let pessoas2 = ['Fulano2', 'Ciclano2', 'Beltrano2']

// pessoas1 = pessoas1.concat(pessoas2)   // concat
pessoas1 = [ ...pessoas1, ...pessoas2]    // spread

console.log(pessoas1)
console.log("-- -- --")

// CLONAR OBJETOS

const clonePessoa = {nome: 'Fulano', idade: 28}

const objetoClonado = { ...clonePessoa}
console.log(objetoClonado)
console.log(clonePessoa)