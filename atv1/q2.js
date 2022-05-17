window.alert("Calculando montante")

let c = +prompt('Capital inicial aplicado');
let i = +prompt('Taxa de juros');
const n = 240;

var total = c * (1 + i/100)**n;

document.write(`Sua quantia final é: ${total}`);