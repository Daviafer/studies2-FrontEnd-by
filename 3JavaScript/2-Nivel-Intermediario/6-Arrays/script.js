let filmes = ['Vingadores', 'Mulher Maravilha']

let descricaoFilme = ['Vingadores', 4.5, true]  // vários tipos de dados

console.log(descricaoFilme[0])


// ARRAY DIMENSIONAL

// contem 3 arrays
let filmes2 = 
[ 
  ['Capitão América', 4.5, true],
  ['Mulher Maravilha', 4.6, false,
    ['Gal Gadot', 25]
  ]  
] 
console.table(filmes2[0])   //pegando vários dados

console.log(filmes2[1][3][0])  //pegando um dado específico dentro de outros arrays, ou seja: (Gal Gadot)