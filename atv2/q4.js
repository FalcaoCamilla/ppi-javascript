window.alert("Calculando valores com desconto")

var preco = parseFloat(prompt("Informe o preço"))
var desconto = +prompt("Informe o percentual de desconto (apenas números)")
var vd = preco * (desconto/100)
var vf = preco - vd
document.write(`O valor final do produto é: ${vf}`)
