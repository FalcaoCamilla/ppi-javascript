let cpf = prompt('9 primeiros digitos do CPF:');
let mult = 10;
let mult1=10;
let soma1 = 0;
let soma2=0;

for(let pos = 0; pos < 9; pos++){
    soma1 += +cpf[pos] * mult;
    mult -= 1;
    r1 = soma1%11;
}

if(r1===0 || r1===1){
    var d1=0;
}else{
    d1=11-r1;
}

for(let i = 1; i < 9; i++){
    soma2 += +cpf[i] * mult1;
    mult1 -= 1;
    r2 = soma2%11;
}

if(r2===0 || r2===1){
    var d2=0;
}else{
    d2=11-r2;
}

document.write(`O seu CPF é: ${cpf}${d1}${d2}`)
