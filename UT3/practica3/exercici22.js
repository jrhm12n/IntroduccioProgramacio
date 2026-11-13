const prompt = require('prompt-sync')();
let num = Number( prompt("Dame un numero del 1 al 7: ") )
switch(num) {
    case 1: 
    case 2: 
    case 3: 
    case 4:
    case 5:
      console.log('Dia de trabajo')
      break
    case 6: 
    case 7: 
      console.log('Fin de semana')
      break
    default: 
      console.log('Dia no valido')
}