let frutas = ['banana', 'maçã', 'melancia', 'acerola']
let frutasTamanho = frutas.length

for (let i = 0; i < frutasTamanho; i++) {
  console.log('Fruta: ' + frutas[i]);   // todas a frutas
}

console.log('---foreach--')
//  ---------- FOREACH ---- - -- --
                    // item, indice, array
frutas.forEach(function(item){ 
console.log('Frutas: ' + item)
})

console.log('--push---')
// ------- adicionando elemento no final do array
frutas.push('manga')
console.log(frutas)

console.log('--pop---')
// ------- tirar o elemento no final do array
frutas.pop()
console.log(frutas)

console.log('--shift---')
// ------- tirar o elemento no início do array
frutas.shift()
console.log(frutas)

console.log('--unshift---')
// ------- adicionar o elemento no início do array
frutas.unshift('Morango')
console.log(frutas)

console.log('--indexOf---')
// ------- verifica a posição do elemento
let posicaoMaca = frutas.indexOf('maçã')
console.log(posicaoMaca)