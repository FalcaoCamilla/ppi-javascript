//ex1
let numeros=[1, 6, 7, 9, 15, 23, 98, 2];
var busca=+prompt("Informe o número que deseja buscar na lista")

i=0;
achou=false;
while(i < numeros.length && !achou){
    if(numeros[i]===busca){
        achou=true;
    }
    i++;
}
if (achou){
    console.log(`O número ${busca} está na lista! Sua posição é ${i}`)
}else{
    console.log(`O número ${busca} não está na lista`)
}

//ex2
let soma=0;
for(let par=2; par <= 100; par +=2){
    soma+=par;
}
console.log(`A soma dos números inteiros pares de 2 a 100 é ${soma}`);

//ex3
let info4v=['camilla', 'malu', 'ney']
info4v.forEach(estudante => {
    console.log(estudante);
})

//ex 4
