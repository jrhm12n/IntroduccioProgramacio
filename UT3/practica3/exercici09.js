const prompt = require(`prompt-sync`) ();

let edad = prompt (`Cual es tu edad? `)

if (edad < 18) {
    console.log ("Eres menor de edad")
}   else if (edad >= 18) {
    console.log ("Eres mayor de edad")
}