let hora
let capDeSetmana

// Cas A
hora = 9;
if (hora < 10 || hora > 18) {
    console.log("Accés denegat 1");
}
// Dara acceso denegado ya que 9 es menor que 10 asi que cumple uno de los requisitos


// Cas B
hora = 15;
capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
    console.log("Accés denegat 2");
}
// No sera acceso denegado ya que es mayor que 10 y menor que 18 y no es fin de semana

// Cas C
hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat 3");
}
// No sera acceso denegado porque no es menor que 10 y mayor que 18 (caso imposible) a pesar de que si es fin de semana