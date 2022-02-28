/* 
== igual
!= diferente

=== idêntico
!== não idêntico

< menor que ( a menor que b)
> maior que ( a maior que b)
<= menor igual
>= maior igual

*/


const a = 3
const b = 3

console.log(a == b)
console.log(a != b)

console.log(a === b)
console.log(a !== b)

console.log(a < b)
console.log(a > b)
console.log(a <= b)
console.log(a >= b)


// - - - - - - - - - - - - - &&  - - - - - - - - - - - - - 

console.log(a === b && a <= b)
// V e V = verdadeiro

console.log(a === b && a < b)
// V e F = False

console.log(a > b && a === b)
// F e V = False

console.log(a < b && a > b)
// F e F = False

// - - - - - - - - - - - - - OR  - - - - - - - - - - - - -
console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
// F ou V = V

console.log(a > b || a < b)
// F ou F = F

// - - - - - - - - - - - - - NOT (negando ) - - - - - - - - - - - - 
console.log(!(a === b)) // false

console.log(!(a < b)) // true