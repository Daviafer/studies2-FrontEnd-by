/* 
  Módulos são arquivos que podem ser exportados e depois importar em algum ponto específico do JS que precisa usar.
  Reusabiliade = usar apenas 1 arquivo e ou código e mudar somente nele para todos outros serão afetados
*/

//importando de operações
import { somar, multiplicar } from './operacoes-matematicas.js'
console.log(somar(4, 6))
console.log(multiplicar(5, 6))