let gerado = gerarNumero();

let p = $('<div class="resultado"></div>'); /* criar a tag html */
p.insertAfter('form');

function principal(){
    const num = $('#num').val();
    const comp = comparar(+num);
    const res = $('.resultado');
    res.html(comparar);
}

function comparar(palpite, gerado){
    if(palpite === gerado){
        return 0
    } else if(palpite < gerado){
        return -1
    } else if(palpite > gerado){
            return 1
        }
}

function gerarNumero(){
    return Math.random();
}