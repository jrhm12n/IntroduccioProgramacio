const prompt = require('prompt-sync')();
let edad = Number( prompt('Cuantos años tienes: ') )
let est = prompt(`Eres estudiante? [Si/No] `)
if (edad < 18 || edad > 65 || est == "Si") {
    console.log("Tienes un descuento")
} else {
    console.log("Precio normal")
}