/* 
    for(inicializador; condição; incremento){
      declaração
    }
*/

for(let a = 1; a < 5; a++){
  console.log(a);
}

/* 
    while(condicao){
      bloco de execucao
    }
*/
let a = 10
let b = 15

while (a < b) {
  console.log('Incrementando a variável a: ' + a)

  a++
}

/* 
    do{
      bloco de execucao
    } while(condicao)
*/
var x = 1

do{
  console.log('Número: ' + x)
  x++
} while(x <= 5)