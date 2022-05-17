window.alert("Calculando média")

let b1 = +prompt('Nota 1');
let b2 = +prompt('Nota 2');
let b3 = +prompt('Nota 3');
let b4 = +prompt('Nota 4');

var media = ((b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10);

document.write(`Sua média final é: ${media}`);