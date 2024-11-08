document.addEventListener('DOMContentLoaded', function() {    
    if(localStorage.getItem('afterLog') === "ok"){
        mostrarMsg('Cadastrado com sucesso', 'sucesso');
        localStorage.setItem('afterLog', "nonOk")
    }
    document.getElementById('nome').innerText = localStorage.getItem('nome')
    document.getElementById('endereco').innerText = localStorage.getItem('endereco')
    document.getElementById('cep').innerText = localStorage.getItem('cep')
    document.getElementById('cpf').innerText = localStorage.getItem('cpf')
    document.getElementById('telefone').innerText = localStorage.getItem('telefone')
    document.getElementById('cnpj').innerText = localStorage.getItem('cnpj')
    document.getElementById('cod').innerText = localStorage.getItem('codigo')
});

let nome
let endereco
let cpf
let cep
let telefone
let cnpj
let codigo


function deslogar() {
    localStorage.setItem('logado', false)
    mostrarMsg('Deslogado com sucesso', 'sucesso');
    localStorage.setItem('afterDeslog', "ok")
    window.location.href='index.html'
}

function mostrarMsg(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.innerText = message;
    messageElement.className = type;
    messageElement.classList.remove('hidden');    
    setTimeout(function() {
        messageElement.classList.add('hidden');
    }, 2400);
}
