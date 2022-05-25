






let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');

function validaNome(){

    let txtNome =document.querySelector('#txtNome')
    if (nome.value.length < 5) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'

    } else  {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true

    }
}

    function validaEmail(){


        let txtEmail = document.querySelector('#txtEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
    
        } else  {
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'
            emailOk = true
    
        }
}                                         

    function validaAssunto () {
        let txtAssunto = document.querySelector('#txtAssunto')

        if (assunto.value.length >= 100) {
            txtAssunto.innerHTML = 'digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            

        } else {
            txtAssunto.innerHTML = 'Obrigada pela  mensagem.'
            txtAssunto.style.color = 'green'
            assuntoOk = true
        }
    }            

        function enviar(){

            if(nomeOk == true && emailOk == true && assuntoOk == true){
                alert('mensagem enviada com sucesso...')
            }else {
                alert('preencha corretamente o  formulário...')
            }

        }

        function mapaZoom (){
            mapa.style.width = '800px'
            mapa.style.height = '600px'

        }

        function mapaNormal(){
            mapa.style.width = '400px'
            mapa.style.height = '250px'
        }

     
    

    