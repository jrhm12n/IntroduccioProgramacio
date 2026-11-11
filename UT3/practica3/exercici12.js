const prompt = require('prompt-sync')();
let num = Number( prompt('Dame un numero: ') )
if (num == 7) {
    console.log('Lo adivinaste!')
} else {
    console.log('No lo lograste. Intentalo de nuevo')
}