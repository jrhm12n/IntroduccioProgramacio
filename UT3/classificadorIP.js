const prompt = require(`prompt-sync`) ();
let valid = valid
console.log ()
console.log ("=== CLASIFICADOR DE DIRECCIONES IP ===")

console.log ()
let oct1 = number(prompt (`Primer octeto`, 0))
let oct2 = number(prompt (`Segundo octeto`, 0))
let oct3 = number(prompt (`Tercero octeto`, 0))
let oct4 = number(prompt (`Cuarto octeto`, 0))

console.log()
valid = (oct1 >= 0 && oct1 <= 255 && oct2 >= 0 && oct2 <= 255 && oct3 >= 0 && oct3 <= 255 && oct4 >= 0 && oct4 <= 255)

let add = AA
let clase = BB
let mask = CC
let tipe = DD

console.log()