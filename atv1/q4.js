window.alert("Calculando...")

let nome = prompt('Nome');
let dias = +prompt('Dias');
var diaria = 80;

var total = dias*diaria;

document.write(`Sr(a). ${nome}, você deve pagar ${total} por ${dias} dias de aluguel`);