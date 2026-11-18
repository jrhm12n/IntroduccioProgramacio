const prompt = require (`prompt-sync`) ();
let velocidadContratada = prompt("Cuanta velocidad tiene contratada (Mbps): ")
let velocidadTest = prompt("Cual es la velocidad del test (Mbps): ")
let ping = prompt("Cuantos MPS tiene el ping (ms): ")
let perdida = prompt("De cuanta es la perdida (%): ")

if (velocidadContratada > 0) {
    let porcentaje 
    if ((porcentaje >= 90) && (perdida === 0 && ping < 30) ) {
        console.log ("Estat: OPTIMA")
    } else if ((porcentaje >= 70 && perdida <= 2 && ping <= 100) ) {
        console.log ("Estat: ACCEPTABLE")
    } else if (perdida > 10 || ping > 200) {
        console.log ("Estat: CRITICA")
        console.log ("Avisa el tecnic de guardia")
    } else {
        console.log ("DEFICIENT")
        console.log ("Cal obrir una incidencia")
    }
} else {
    console.log ("Dades no vàlides")
}
