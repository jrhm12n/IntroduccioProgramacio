const prompt = require(`prompt-sync`) ();
console.log ()
console.log ("=== CLASIFICADOR DE DIRECCIONES IP ===")

console.log ()
let oct1 = Number(prompt (`Primer octeto: `, 0))
let oct2 = Number(prompt (`Segundo octeto: `, 0))
let oct3 = Number(prompt (`Tercero octeto: `, 0))
let oct4 = Number(prompt (`Cuarto octeto: `, 0))

console.log()
let valid = (oct1 >= 0 && oct1 <= 255 && oct2 >= 0 && oct2 <= 255 && oct3 >= 0 && oct3 <= 255 && oct4 >= 0 && oct4 <= 255)

if (valid) {
    let ipc = (`${oct1}.${oct2}.${oct3}.${oct4}`)
    console.log (`IP: ${ipc}`)
    let prvpub = (oct1 === 10 && oct2 >= 0 && oct3 >= 0 && oct4 >= 0 && oct2 <= 255 && oct3 <= 255 && oct4 <= 255) ? true : (oct1 === 172 && oct2 >= 16 && oct3 >= 0 && oct4 >= 0 && oct2 <= 31 && oct3 <= 255 && oct4 <= 255) ? true : (oct1 === 192 && oct2 === 168 && oct3 >= 0 && oct4 >= 0 && oct3 <= 255 && oct4 <= 255) ? true : 'false';    
    let clase
    if (oct1 === 0) {
            clase = "Reservada"
    }   else if (oct1 >= 1 && oct1 <= 126) {
            clase = "A"
    }   else if (oct1 === 127){
            clase = "Loopback"
    }   else if (oct1 >= 128 && oct1 <= 191) {
            clase = "B"
    }   else if (oct1 >= 192 && oct1 <= 223) {
            clase = "C"
    }   else if (oct1 >= 224 && oct1 <= 239) {
            clase = "D, multicast"
    }   else if (oct1 >= 240 && oct1 <= 255)
            clase = "E, experimental"

    console.log (`Clase: ${clase}`)
    
    let bloq
    switch(clase) {
        case "A":
            console.log ("Mascara por defecto: 255.0.0.0")
        break
        case "B":
            console.log ("Mascara por defecto: 255.255.0.0")
        break
        case "C":
            console.log ("Mascara por defecto: 255.255.255.0")
        break
        default:
            bloq = 1
            console.log("Mascara por defecto: No tiene (direccion espeical)")
    }
if (bloq != 1 && (valid)) {
    (prvpub == true) ? console.log ("Tipo: Privada"):
        console.log ("Tipo: Publica")
}
}   else {
    console.log("Adreça no valida")
    console.log("Los octetos deben estar entre 0 y 255")
    }
console.log()