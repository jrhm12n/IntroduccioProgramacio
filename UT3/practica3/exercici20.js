const prompt = require('prompt-sync')();
let edad = Number( prompt('Cuantos años tienes: ') )
let ntrd = prompt(`Tienes la entrada? [Si/No] `)
if (edad == 18 && ntrd == "Si") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}