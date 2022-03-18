let pessoa = {nome: "Fulano", sobrenome: "Um", idade: 28}

// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)

// DESISTRUTURANDO UM OBJETO

// caso nome variável seja diferente precisa referenciar a propriedade. Ex: variável diferente: idadePessoa. 
let {nome, sobrenome, idade: idadePessoa} = pessoa

console.log(nome)
console.log(idadePessoa)

console.log("-- --- ----")
// DESISTRUTURANDO UM ARRAY
const numeros = [1, 2, 3]

const [um, dois, tres, quatro] = numeros

console.log(um)
console.log(dois)
console.log(tres)
console.log(quatro) // undefined - não informado