var voto=+prompt('Vote 11 para Cecília Meireles \n 33 para Ariano Suassuna \n 44 para Machado de Assis \n 99 para Graciliano Ramos \n 0 para voto em branco \n 1234 para encerrar a votação \n Para anular o voto, informe qualquer outro valor')
var cecilia=0
var ariano = 0
var machado = 0
var graciliano = 0
var branco = 0

while(voto!=1234){
    function getVotos(voto){
        switch(voto){
            case 11:
                cecilia++;
            case 33:
                ariano++;
            case 44:
                machado++;
            case 99:
                graciliano++;
            case 0:
                branco++;
            default:
                nulo++;
        }
    }
}


if(voto = 1234){
    document.getElementById('impressao').innerHTML=`Cecília Meireles recebeu ${cecilia} votos \n Ariano recebeu ${ariano} votos \n Machado de Assis recebeu ${machado} votos \n Graciliano recebeu ${graciliano} votos \n O total de votos brancos foram de ${branco} e nulos ${nulo}`
}