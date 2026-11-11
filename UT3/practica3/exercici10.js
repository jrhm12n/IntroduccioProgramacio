const prompt = require(`prompt-sync`) ();

let grd = prompt (`Cual es la temperatura en Celsius? `)

if (grd < 10) {
    console.log ("Hace frio")
}   else if (grd >= 10 && grd < 25) {
        console.log ("La temperatura es moderada")
}   else if (grd >= 25) {
        console.log ("Hace calor")
}