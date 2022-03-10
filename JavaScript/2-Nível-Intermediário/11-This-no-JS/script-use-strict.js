'use strict'

// console.log(this)   // global

// console.log(window)
// console.log(window === this)

// this.name = 'Fulano'

// function saudar() {
//   console.log('This no contexto da função', this)
//   console.log('Olá, ' + this.name)
// }
// saudar()
// ======================= ============== ==================
// let usuario = {
//   nome: 'Fulano de Tal',

//   saudar: function () {
//     console.log('This no contexto do método ', this)
    
//     console.log('This.nome no contexto do método', this.nome)
//   }
// }

// usuario.saudar()
// ======================= ============== ==================
let comida = {
  nome: 'Bróculis',
  temperatura: 0,

  cozinhar: function (temperaturaDeCozimento) {
    console.log('This no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento;
  }
}

console.log(comida)
comida.cozinhar(100)
console.log(comida)
