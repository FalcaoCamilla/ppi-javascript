$('#btn').on('click', principal);
/*$('id').on('evento', função) */

let p = $('<div class="resultado"></div>'); /* criar a tag html */
p.insertAfter('form'); /* inserir a tag criada depois da tag form */

function principal(){
    const num = $('#num').val(); /*document.getElementById('').value*/
    const fat = fatorial(+num);
    const res = $('.resultado');
    res.html(`O fatorial de ${num} é ${fat}`);
}

/*Devolve o fatorial*/ 
function fatorial(n){
    if (n == 0 || n ==1){ /* caso base da função recursiva, que é repetida até satisfazer o caso */
        return 1;
    } else {
        return n * fatorial(n-1)
    }
}