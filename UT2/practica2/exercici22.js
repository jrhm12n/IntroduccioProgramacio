const prompt = require(`prompt-sync`) ();

let n1 = Number (prompt ("Dame el numero 1 "))
let n2 = Number (prompt ("Dame el numero 2 "))

console.log (`La suma es: ${n1 + n2}`)
console.log (`La resta es: ${n1 - n2}`)
console.log (`La multiplicacion es: ${n1 * n2}`)
console.log (`La division es: ${n1 / n2}`)