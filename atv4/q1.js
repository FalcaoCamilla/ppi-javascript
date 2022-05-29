let num = +prompt('Informe a quantidade de questões')
let resp = prompt('Informe suas respostas')
let gab = prompt('Informe o gabarito da prova sem espaços ou quaisquer outros caracteres diferentes de A, B, C, D e E')
var arr = resp.split('')
var arrgab = gab.split('')

console.log(arr)
console.log(arrgab)

let acertos = 0

for(i=0; i < num; i++){
   if(arr[i] === arrgab[i]){
       console.log(acertos)
       acertos++
   }
}

document.write(`Você acertou ${acertos}`)