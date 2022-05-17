window.alert("Estudando Split")

let nome = prompt('Nome');
let matr = +prompt('Matrícula');
let email = prompt('Email');

let user = email.split("@");

document.write(`Seu nome é ${nome}, sua matrícula é ${matr} e seu user é ${user[0]}`);