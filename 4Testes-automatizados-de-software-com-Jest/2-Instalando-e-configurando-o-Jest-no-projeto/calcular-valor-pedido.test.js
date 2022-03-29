// // pode usar:  it ('teste ...)
// test('Teste funcionou', () => {
//   // assertion ou asserção
//   expect(true).toBe(true)
// })

// AAA = 3 passos pra criação dos testes - Arrange; Act e Assert

//ARRANGE - arrumar - O objeto de teste
const calcularValorPedido = require('./calcular-valor-pedido');
it('Não deve cobrar valor de frete após 500 reais de produtos.', () => {
  const meuPedido = {
    itens: [
        { nome: 'Arco encantado', valor: 2000},
        { nome: 'Flexa', valor: 1380, entrega: true}
    ]
  }
  //ACT - ação - O que vai ser testado
  const resultado = calcularValorPedido(meuPedido)
  
  //ASSERT - asserção - Resultado esperado
  expect(resultado).toBe(2000)
})

if('Deve cobrar valor de frete quando valor for menor que 500 reais', () => {
    //Arrange
  const meuPedido = {
    itens: [
        {nome: 'Sanduiche', valor: 50},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
  }
  // act
  const resultado = calcularValorPedido(meuPedido);

  //assert
  expect(resultado).toBe(150)
});

it('Deve cobrar o frete quando for igual a 500 reais', () => {
  //Arrange
  const meuPedido = {
    itens: [
        {nome: 'Sanduiche', valor: 500},
        {nome: 'Entrega', valor: 100, entrega: true}
    ]
  }
  const resultado = calcularValorPedido(meuPedido)

  expect(resultado).toBe(600)
})

// Caso os estados de entrega sejam RS e SC, acrescentar 30% na entrega
it('Deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o Estado seja RS', () => {
  const pedidoComEstadoRS = {
    estado: 'RS',
    itens: [
      { nome: 'Sanduíche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true}
    ]
  }
  const resultado = calcularValorPedido(pedidoComEstadoRS);

  expect(resultado).toBe(620)
})

it('Deve adicionar um acrescimo de 20% no valor da entrega do pedido, caso o Estado seja SC', () => {
  const pedidoComEstadoSC = {
    estado: 'SC',
    itens: [
      { nome: 'Sanduíche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true}
    ]
  }
  const resultado = calcularValorPedido(pedidoComEstadoSC)

  expect(resultado).toBe(620)
})

it('Não deve adicionar um acrescimo de 20% no valor da entrega do pedido, caso seja pra SP', () => {
  const pedidoComEstadoSP = {
    estado: 'SP',
    itens: [
      { nome: 'Sanduíche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true}
    ]
  }
  const resultado = calcularValorPedido(pedidoComEstadoSP)

  expect(resultado).toBe(600)
})