const prompt = require (`prompt-sync`) ();
let client = prompt("Client: ")
let horas = prompt("Hores de mà d'obra: ")
let piezas = prompt("Cost de les peces (€)")
let mantenimento = prompt("Té contracte de manteniment? (si/no): ")
let urgente = prompt("Servei urgent? (si/no): ")

let MaObra
let Descompte
let Recarrec
let Impasable
let IVA
let total




// Total: IVA se aplica a resultado de calculo de ma de obra, descuento y recargo