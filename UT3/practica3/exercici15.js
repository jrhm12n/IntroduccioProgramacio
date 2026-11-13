const prompt = require('prompt-sync')();
let num1 = Number( prompt('Dame un numero: '))
let num2 = Number( prompt('Dame otro: '))
console.log('+, -, *, /')
let oper = String( prompt('Que operacion quieres hacer: '))
if (oper === '+') {
    console.log(`El resultado de la suma es ${num1 + num2}`)
} else if (oper === '-') {
    console.log(`El resultado de la resta es ${num1 - num2}`)
} else if (oper === '*') {
    console.log(`El resultado de la multiplicacion es ${num1 * num2}`)
} else if (oper === '/') {
    if (num2 != 0){
        console.log(`El resultado de la division es ${num1 / num2}`)
    } else {
        console.log('No se puede dividir entre 0')
    } 
} else {
    console.log('Operacion no valida')
}