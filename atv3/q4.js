window.alert("Lendo o maior elemento")

var qtdelementos = +prompt("Qual a quantidade de elementos que será lido?: ")

var roda = 0
var maior = 0
var elemento = 0

while (roda < qtdelementos){
    elemento = +prompt("Insira o elemento: ")
    if (elemento > maior){
        maior === elemento
    }
    roda++
}
console.log(elemento)