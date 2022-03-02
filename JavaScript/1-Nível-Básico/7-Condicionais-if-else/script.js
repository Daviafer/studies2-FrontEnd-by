let nomeFilme = 'Capitão América'

if (nomeFilme === 'Vingadores') {
  console.log('É o filme dos Vingadores')
} else if (nomeFilme === 'Batman') {
  console.log('É o filme do Batman')
} else if (nomeFilme === 'Capitão América') {
  console.log('É o filme do Capitão América')
} else {
  console.log('É outro filme')
}

// ------------ TERNARIO ------------
// condicao ? console.log('true') : console.log('false')

nomeFilme === 'Capitão América' ? console.log('Filme Capitão América') : console.log('Outro filme')

// ------------ SWITCH ------------
// switch(parametro){
//   case valor1:
//     <bloco de declaração>
//     break
//   case valor2:
//     <bloco de declaração>
//     break
//   default:
//     <bloco de declaração>
// }
switch (nomeFilme) {
  case 'Vingadores':
    console.log('É o filme dos Vingadores')
    break
  case 'Capitão América':
    console.log('É o filme do Capitão América')
    break

  default:
    console.log('É outro filme')
    break;
}

// - - - - - MULTI CASOS

let avaliacao = 5

switch (avaliacao) {
  case 1:
  case 2:
    console.log('Filme ruim')
    break
  case 3:
  case 4:
    console.log('Filme mediano')
    break
  case 5:
    console.log('Filme excelente')
    break
  default:
    console.log('Nota inválida')
    break;
}