// == Usando export default retira as chaves ao chamar a função. == Pode alterar o nome da função aqui sem alterar o resultado 

// import somarNovo from './operacoes-matematicas.js'

// console.log(somarNovo(3,5))


// exportação nomeada = pode ter várias exportações nomeadas por arquivo
import {somar} from './operacoes-matematicas.js'

console.log(somar(3,5))