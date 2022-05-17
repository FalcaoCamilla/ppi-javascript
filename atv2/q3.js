window.alert("Diferença entre anos")

let date1=prompt("Informe a primeira data no formato DD/MM/YYYY");
let date2=prompt("Informe a primeira data no formato DD/MM/YYYY");

var d1 = date1.split("/");
var d2 = date2.split("/");
var a1=parseInt(d1[2]);
var a2=parseInt(d2[2])

if (a2>a1){
    var diffYear= a2 - a1;
    document.write(`A diferença entre os anos é: ${diffYear}`)
}else{
    document.write(`Informe o ano correto`)
}