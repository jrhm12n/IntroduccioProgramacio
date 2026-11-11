const prompt = require('prompt-sync')();
let num = Number( prompt('Dame un numero: ') );
(num >= 1 && num <= 100) ? console.log('Nombre valido') :
console.log('Nombre no valido')