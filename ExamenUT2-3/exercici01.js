const prompt = require (`prompt-sync`) ();
const empresa = String("NetLlevant")
const añoActual = Number(2026)

let nomEquipo
let RAM
let capacidadGB
let añoCompra
let garantia
let IP

console.log ("==== NetLlevant Dades ====")

nomEquipo = String(prompt("Nom de l'equip: "))
RAM = Number(prompt("Memòria RAM (GB): "))
capacidadGB = Number(prompt("Capacitat del disc (GB): "))
añoCompra = Number(prompt("Any de compra: "))
garantia = Boolean (prompt("Esta en garantia? (si/no): "))
IP = Number("10.201.112.0")

console.log ("==== NetLlevant INVENTARI ====")

console.log (nomEquipo)
let RAMMB = RAM * 1024
console.log (RAMMB)
let DiscoTB = capacidadGB / 1024
console.log (DiscoTB)
let antiguidad = añoActual - añoCompra
console.log (antiguidad)
console.log (`En garantia: ${garantia}`)

console.log ("--- TIPUS DE DADES ---")
console.log (typeof(antiguidad))
