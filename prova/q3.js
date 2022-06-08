let preco = +prompt('Informe o valor produto');
let condicao = +prompt('Informe a condição de pagamento.\nUtilize 1 para pagamento à vista no dinheiro\n 2 para pagamento à vista no débito ou pix\n3 para pagamento em até 3x no cartão\n 4 para pagamento até 5x no cartão')

if(condicao==1){
    total=preco-(preco*15/100)
    document.write(`Você pagará ${total} pelo produto`)}

if(condicao==2){
    total=preco-(preco*10/100)
    document.write(`Você pagará ${total} pelo produto`)}

if(condicao==3){
parcelas=preco/2
parcelas1=preco/3
document.write(`Caso divida em 2, pagará parcelas de ${parcelas}\n
Caso divida em 3, você pagará parcelas de ${parcelas1} pelo produto`)}

if(condicao==4){
parcelas2=(preco+(preco*(3/100)))/4
parcelas3=(preco+(preco*(3/100)))/5
total=parcelas2*4
total1=parcelas3*5

document.write(`Caso divida em 4, pagará parcelas de ${parcelas2}. Totalizando ${total}.\n
Caso divida em 5, você pagará parcelas de ${parcelas3} pelo produto. Totalizando ${total1}.`)}


