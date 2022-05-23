window.alert("Verificando login e senha coincidentes")

var login = prompt('login')
var pass = prompt('senha')

while(login===pass){
    window.alert('Login e senha devem ser diferentes')
    var login = prompt('login')
    var pass = prompt('senha')
}

if(login!==pass){
    document.getElementById('impressao').innerHTML='OK'
}
