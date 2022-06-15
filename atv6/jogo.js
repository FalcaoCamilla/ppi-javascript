$('#btn').on('click', principal);

let gerado = gerarNumero();


let p = $('<div class="resultado"></div>'); /* criar a tag html */
p.insertAfter('form');

function principal(){
    let palpite = $('#num').val();
    const comp = comparar(+palpite, gerado);
    const res = $('.resultado');
    if(comp === 0){
        res.html('Você acertou!')
    } else if (comp === -1){
        res.html('Tente um número maior')
    } else if(comp === 1){
        res.html('Tente um número menor')
    }
    console.log(gerado)
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
    return Math.floor(Math.random() *20 + 1); //math random gera de 0 a 1
}