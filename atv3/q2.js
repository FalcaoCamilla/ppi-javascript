window.alert("Ordenando lista")

var lista = [3, 2, 5, 7, 1, 6]
j = 1

while (j < lista.length){
    var x = lista[j]
    var i = j-1
    while (i >= 0 && lista[i] > x){
        lista[i+1] = lista[i]
        i = i-1
    }
    lista[i+1] = x
    j++
}

console.log(`A quantidade de elementos ordenados dentro da lista foi de: ${j}`)