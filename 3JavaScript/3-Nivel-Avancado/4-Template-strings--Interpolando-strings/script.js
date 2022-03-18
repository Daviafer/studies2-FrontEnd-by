// - Forma antiga - antes da atualização JS 
// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//   return "Primeiro nome: " + primeiroNome + "; último nome: " + ultimoNome + "; idade: " + idade;
// }

// - Interpolando

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro nome: ${primeiroNome}; último nome: ${ultimoNome}; idade: ${idade}`;
}
// console.log(imprimirInformacoesPessoa("Fulano", "Um", 28));
console.log(`${imprimirInformacoesPessoa("Fulano", "Um", 28)}, ele é um DevQuester.`)

// console.log(`Soma: ${10 + 20}`)