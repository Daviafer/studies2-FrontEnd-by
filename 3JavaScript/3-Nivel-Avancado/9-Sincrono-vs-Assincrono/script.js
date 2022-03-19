/* 
  Processamento ASSÍNCRONO refere-se a processamentos que não dependem do resultado de outros, e podem, portanto, ocorrer simultaneamente/separadamente. Eles correm em Threads diferentes. Em oposição, os processamentos SÍNCRONOS são executados um a seguir ao outro, o próximo só inicia quando o anterior terminar
*/
  // SÍNCRONO 
  console.log('------- Síncrono ------')

function colocarAguaFerver() {
  console.log('1 - Colocar água pra ferver')
}
function prepararPraPassarCafe() {
  console.log('2 - Pegar o pó de café;')
  console.log('3 - Pegar o filtro de café;')
  console.log('4 - Colocar o café no filtro;')
  console.log('5 - Colocar o filtro em cima da xícara;')
}
function passarCafe(){
  console.log('6 - Passando o café')
}

colocarAguaFerver()
prepararPraPassarCafe()
passarCafe()


// ASSÍNCRONO 
console.log('------- Assíncrono ------')

function colocarAguaPraFerver2() {
  console.log('1 - Colocar água pra ferver')

  //enquanto a água ferve, é realizado outras taferas
  setTimeout(() => {
    console.log('Água ferveu!')
    passarCafe2()  // etapa final
  }, 5000); //tempo
}
function prepararPraPassarCafe2() {
  console.log('2 - Pegar o pó de café;')
  console.log('3 - Pegar o filtro de café;')
  console.log('4 - Colocar o café no filtro;')
  console.log('5 - Colocar o filtro em cima da xícara;')
}
function passarCafe2() {
  console.log('6 - Passando o café')
}

colocarAguaPraFerver2()
prepararPraPassarCafe2()