const prompt = require (`prompt-sync`) ();
let parar = 0
let incidencia = prompt("Cual es la incidencia (XARXA/HARDWARE/SOFTWARE): ")
let horas = prompt("Horas desde que se abrio la incidencia?: ")
let empresa = prompt("El cliente es de una empresa (si/no): ")
let servei = prompt("El servicio del cliente esta parado? (si/no): ")
let termini
let resultado

switch (incidencia) {
    case "XARXA":
        console.log ("Termini 4 horas")
        termini = Number("4")
        console.log ("Departamento: Xarxes")
    break
    case "HARDWARE":
        console.log ("Termini: 24 horas")
        termini = Number("24")
        console.log ("Departamento: Taller")
    break
    case "SOFTWARE":
        console.log ("Termini: 48 horas")
        termini = Number("48")
        console.log ("Departamento: Suport d'aplicacions")
    break
    default:
        console.log ("Tipus d'incidencia no valid")
        parar = 1
}
if (!parar) {
    let prioridad
    if (empresa == "si" && servei == "si") {
        prioridad = "CRITICA"
    } else {
        prioridad = "NORMAL"
    }
    console.log (`Prioridad ${prioridad}`)
    if (prioridad == "CRITICA") {
        termini = termini / 2
    }
    resultado = horas - termini
    if (resultado <= horas) {
        if (prioridad == "CRITICA") {
            console.log ("Cal avisar al cap de servei")
        } else {
        console.log (`Termini superat en ${resultado}`)
        }
    } else {
        console.log ("Dins del termini")
        console.log (`Queden ${resultado} h`)
    }
}