const prompt = require(`prompt-sync`) ();

const kb = 1024
const mb = (kb * 1024)
const gb = (mb * 1024)

console.log (" ")
console.log ("====== Conversor de unidades ======")
console.log (" ")

console.log ("Convertir Bytes a --> KB, MB y GB")
let bt = Number (prompt ("¿Cuantos bytes tiene el fichero? "))
let btk = bt / kb
let btm = bt / mb
let btg = bt / gb

console.log (" ")
console.log (`El fichero tiene ${btk.toFixed(2)} KB`)
console.log (`El fichero tiene ${btm.toFixed(2)} MB`)
console.log (`El fichero tiene ${btg.toFixed(2)} GB`)
console.log (" ")

console.log ("Convertir de GB a --> bytes")
let gt = Number (prompt ("¿Cuantos GB tiene el fichero? "))
let gtg = gt * gb

console.log (" ")
console.log (`El fichero tiene ${gtg.toFixed(2)} bytes`)

console.log (" ")
console.log ("Calcula el tiempo de descarga")
let gbd = Number (prompt ("¿Cuantos GB tiene el fichero a descargar? "))
let mbps = Number (prompt ("¿Cuantos Mbps tiene tu red? "))
console.log (" ")

let btp = (gbd * gb)
let bit = (btp * 8)
let bps = (mbps * mb)
let sec = (bit / bps)
let min = (sec / 60)

console.log (`Va a tardar ${sec.toFixed(2)} segundos en descargarse`)
console.log (`Y va a tardar ${min.toFixed(2)} minutos en descargarse`)
console.log (" ")