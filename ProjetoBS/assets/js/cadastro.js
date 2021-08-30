// #region Validações

//0
function valida_nome(x) {

    var nome = x.value
    if (isNaN(nome)) {
        x.style.border = "2px solid green"

        return true;
    }

    else {

        x.style.border = "2px solid red"
        return false;
    }

}
//6
function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {

        field.style.border = "2px solid green"
        return true;
    }
    else {

        field.style.border = "2px solid red"
        return false;
    }
}

function valida_assunto(x) {

    var nome = x.value
    if (isNaN(nome)) {
        x.style.border = "2px solid green"

        return true;
    }

    else {

        x.style.border = "2px solid red"
        return false;
    }

}
function valida_mensagem(x) {

    var nome = x.value
    if (isNaN(nome)) {
        x.style.border = "2px solid green"

        return true;
    }

    else {

        x.style.border = "2px solid red"
        return false;
    }

}


// #region Máscaras e Cálculos

// INICIO FUNÇÃO DE MASCARA MAIUSCULA
function maiuscula(x) {
    v = (x.value.toUpperCase());
    x.value = v;

}
//FIM DA FUNÇÃO MASCARA MAIUSCULA


//Função para exibir "Balões no formulário".
$(function () {
    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
})

// #endregion

// #endregion


class Pessoa { //classe pessoa, todos os objetos pessoa seguirão esse modelo 

    constructor() {
        this.nome = ""; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor 
        this.email = "";
        this.assunto = "";
        this.mensagem = ""
    }
    //Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"
    mostrar_dados() {
        // return this.nome + " " + this.email + " " + this.data_nascimento + " " + this.cpf + " " + this.sexo + " " + this.idade
        // return `<h3>Olá ${this.nome},<h3><br>
        // <p>Seu login é ${this.email}, você tem ${this.idade} anos de idade, se define como uma pessoa ${this.sexo} e pode usar ${this.cpf} como senha. ${this.gravidez}</p>`
        return `
        <h4 class="text-center display-1">Sua Mensagem<h4>
        <p>Nome: ${this.nome}</p>
        <p>Email: ${this.email}</p>
        <p>Assunto: ${this.assunto}</p>
        <p>Mensagem: ${this.mensagem}</p>
        <br>
        <div id="dialog_sucesso" class="alert alert-success alert-dismissible fade show text-center"
            role="alert" style="display: none;">
            <p>
            Mensagem enviada com sucesso. Entraremos em contato em breve.
            </p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        

        `
    }
}

function enviar_dados() {
    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var profissao_input = document.getElementById("profissao");
    var email_input = document.getElementById("email");
    var assunto_input = document.getElementById("assunto");
    var mensagem_input = document.getElementById("mensagem");


    var formValido = true;

    //validando todos os dados do input segundo as funções valida

    if (!valida_nome(nome_input)) {
        formValido = false;
    }

    if (!valida_email(email_input)) {
        formValido = false;
    }

    if (!valida_assunto(assunto_input)) {
        formValido = false;
    }

    if (!valida_mensagem(mensagem_input)) {
        formValido = false;
    }



    //se qualquer erro retorna falso e não envia o form

    if (!formValido) {
        //Função UI para caixa de diálogo.
        $(function () {
            // $("#dialog").dialog();
            $('#dialog_erro').alert().show()
            $('#dialog_sucesso').alert().hide()
        });

        // document.getElementById("print").innerHTML = "<h3>Dados Inválidos!</h3><br><p>Por favor, verifique os campos em vermelho e tente novamente.</p>"
        return formValido;
    }
    else {
        //mostrar div  do form válido em verde com os dados da pessoa
        var nome = nome_input.value.toUpperCase();
        var email = email_input.value;
        var assunto = assunto_input.value;
        var mensagem = mensagem_input.value;



        //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)     
        var pessoa_1 = new Pessoa();
        pessoa_1.nome = nome;
        pessoa_1.email = email;
        pessoa_1.assunto = assunto;
        pessoa_1.mensagem = mensagem;


        // document.getElementById("center").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto 
        $(function () {
            // $("#dialog").dialog();
            $('#dialog_erro').alert().hide()
            $('#dialog_sucesso').alert().show()
            setInterval(function () {
                $("input").val("");
                $("textarea").val("");
            }, 500);
        });
        return true;
    }
}

