window.alert("Calculando pagamento por hora")

var horasTrabalhadas = +prompt("Informe a quantidade de horas trabalhadas")
var valorHora = +prompt("Informe o valor recebido por hora")
var pagamento=0

if (horasTrabalhadas>40){
    var horasExtras=horasTrabalhadas-40;
    var valorExtra=valorHora*1.5;
    var pagamento=valorHora*40 + valorExtra*horasExtras
    document.write(`O valor total a ser pago é de ${pagamento} reais`)
}else{
    var pagamento = horasTrabalhadas*valorHora
    document.write(`O valor total a ser pago é de ${pagamento} reais`)
}