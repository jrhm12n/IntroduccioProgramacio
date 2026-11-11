const prompt = require('prompt-sync')()
let tll = Number( prompt('Cual es tu talla: ') )
if (tll == 1) {
    console.log('1 --> Talla XS')
} else if (tll == 2) {
    console.log ("2 --> Talla S")
} else if (tll == 3) {
    console.log ("3 --> Talla M")
} else if (tll == 4) {
    console.log ("4 --> Talla L")
} else {
    console.log ("Talla no disponible")
}