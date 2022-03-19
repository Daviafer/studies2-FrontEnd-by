/* 
  A única diferença é que setTimeout() aciona a expressão apenas uma vez, enquanto setInterval() continua acionando a expressão regularmente após o intervalo de tempo determinado. (a menos que você diga para parar). Para parar mais chamadas, devemos chamar clearInterval(timerId)
*/

// setTimeout(() => {
//   alert ('Olá mundo!')
// }, 2000); // 2 segundos

// setTimeout(() =>{
//   console.log('Mensagem após Alert Olá mundo')
// }, 4000);

// setInterval(() =>{
//   console.log('Executando a cada 2 segundos')
// }, 2000);

// console.log('Mensagem depois de setTimeout')

// limpando setTimeout ou setInterval
//execução
const idDoIntervalo = setInterval(() => {
  console.log('Executando a cada 2 segundos')
}, 2000);

//limpando
console.log(idDoIntervalo)

clearInterval(idDoIntervalo)
clearTimeout()