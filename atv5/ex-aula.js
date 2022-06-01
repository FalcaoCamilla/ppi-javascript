function fatorial(n){
    let fat = 1;

    for(let i = n; i >= 2; i--){
        fat *= i;
    }
    return fat;
}

function fatorial2 (n){
    if(n==1 || n==0){
        return 1;
    }else{
        return n*fatorial2(n-1)
    }
}
//função recursiva
//3*fat(3-1)
//2*fat(2-1)
//fat1 = 1
//2*1 = 2
//3*2 = 6

let arr=[1, 3, 10, 2, 6]
atual=0
maior=0
function max(arr){
    for(i=0; i < arr.length; i ++){
        atual = arr[i]
        if(atual>maior){
            maior = atual
        }
    }
    return maior
}

console.log(max(arr))