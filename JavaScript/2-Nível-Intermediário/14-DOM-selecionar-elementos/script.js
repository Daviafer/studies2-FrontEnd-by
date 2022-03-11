/* 
  O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.
*/

// visualizando todo o document 
// console.log(document)

// ID
let p = document.getElementById('paragrafo1')
console.log(p) // mostrando parágrafo

// CLASSE
let inputPorClasse = document.getElementsByClassName('tag-de-input');
console.log(inputPorClasse)
console.log(inputPorClasse[0])  // mostrando por índice array

//  TAG
let inputPorTag = document.getElementsByTagName('input');
console.log(inputPorTag)

// NAME
// query = consulta qualquer elemento da tag input com o atributo específico, no caso o: name: email
let inputPorName = document.querySelectorAll("input[name='email']");
console.log(inputPorName)     // retornando todos
console.log(inputPorName[1])  // retornando por índice array