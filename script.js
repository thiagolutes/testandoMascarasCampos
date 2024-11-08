document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('logado') === true) {
        window.location.href = 'valores.html'
    }
    if (localStorage.getItem('afterDeslog') === "ok") {
        mostrarMsg('Deslogado com sucesso', 'sucesso');
        localStorage.setItem('afterDeslog', "nonOk")
    }
});

let cpf
let cep
let telefone
let cnpj
let codigo

document.getElementById('cpf').addEventListener('input', function () {
    this.value = mascaraCpf(this.value);
});
document.getElementById('cep').addEventListener('input', function () {
    this.value = mascaraCep(this.value);
});
document.getElementById('telefone').addEventListener('input', function () {
    this.value = mascaraTelefone(this.value);
});
document.getElementById('cnpj').addEventListener('input', function () {
    this.value = mascaraCnpj(this.value);
});
document.getElementById('codigo').addEventListener('input', function () {
    this.value = mascaraCodigo(this.value);
});


function mascaraCpf(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpf = value
    return value;
}

function mascaraCep(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1-$2');
    cep = value
    return value;
}

function mascaraTelefone(value) {
    value = value.slice(0, 16)
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{0})(\d)/, '$1($2');
    value = value.replace(/(\d{2})(\d)/, '$1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    telefone = value
    return value;

}

function mascaraCnpj(value) {
    if (value.length < 11) {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        if(value.length == 10){
            value = value + "/0001-"
        }
        cnpj = value
        return value;
    }
    cnpj = value
    return value;
}

function mascaraCodigo(value) {
    if (value.length < 19) {
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '$1_$2');
        value = value.replace(/(\d{2})(\d)/, '$1//$2');
        value = value.replace(/(\d{3})(\d)/, '$1-$2');
        value = value.replace(/(\d{3})(\d)/, '$1.9-$2');
        codigo = value
        return value;
    }
    codigo = value
    return value;
}

function save() {
    validadar()
}

function validadar() {
    nome = document.getElementById('nome').value
    endereco = document.getElementById('endereco').value
    if (nome == "") {
        mostrarMsg('Digite seu nome!', 'erro');
        return
    }
    if (endereco == "") {
        mostrarMsg('Digite seu endereco!', 'erro');
        return
    }
    if (cep.lenght < 10) {
        mostrarMsg('Digite seu cep completo!', 'erro');
        return
    }
    if (cpf.lenght < 14) {
        mostrarMsg('Digite seu cpf completo!', 'erro');
        return
    }
    if (telefone.lenght < 14) {
        mostrarMsg('Digite seu telefone completo!', 'erro');
        return
    }
    if (cnpj.lenght < 18) {
        mostrarMsg('Digite seu cnpj completo!', 'erro');
        return
    }
    if (codigo.lenght < 19) {
        mostrarMsg('Digite o codigo completo!', 'erro');
        return
    }
    mostrarMsg('Cadastrado com sucesso', 'sucesso');

    localStorage.setItem('nome', nome)
    localStorage.setItem('endereco', endereco)
    localStorage.setItem('cep', cep)
    localStorage.setItem('cpf', cpf)
    localStorage.setItem('telefone', telefone)
    localStorage.setItem('cnpj', cnpj)
    localStorage.setItem('codigo', codigo)
    localStorage.setItem('logado', true)

    localStorage.setItem('afterLog', "ok")
    window.location.href = 'valores.html'
}

function mostrarMsg(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.innerText = message;
    messageElement.className = type;
    messageElement.classList.remove('hidden');
    setTimeout(function () {
        messageElement.classList.add('hidden');
    }, 2400);
}
