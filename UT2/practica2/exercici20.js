const prompt = require(`prompt-sync`) ();

let prac = prompt ("Dime algo ")
console.log (typeof prac)

prac = Boolean(prac)
console.log (typeof prac)