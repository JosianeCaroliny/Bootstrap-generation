let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido :('
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido :D'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido :('
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido :D'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length > 100) {
        txtMensagem.innerHTML = 'Mensagem com no máximo 100 caracteres, por favor! :)'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha todos os campos do formulário corretamente, por favor :)')
    }
}