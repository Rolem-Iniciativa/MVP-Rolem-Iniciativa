function CardLogin(Abrir){

    if (Abrir == false){
        return Abrir =
        card_login.style = 'display: flex;', 
        user_icon.onclick = () => CardLogin(true),
        console.log("abriu");
    } 
    
    if(Abrir == true){
        return Abrir = 
        card_login.style = 'display: none;',
        user_icon.onclick = () => CardLogin(false),
        console.log('fechou');
    }
    
}

function Entrar() {

    var emailVar = ipt_email_login.value;
    var senhaVar = ipt_senha_login.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
    "Content-Type": "application/json"
        },
        body: JSON.stringify({
    emailServer: emailVar,
    senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
    console.log(resposta);

    resposta.json().then(json => {
        console.log(json);
        console.log(JSON.stringify(json));
        sessionStorage.ID_USUARIO = json.idUsuario;
        sessionStorage.NOME_USUARIO = json.nome;
        sessionStorage.NICKNAME_USUARIO = json.nickName;
        sessionStorage.EMAIL_USUARIO = json.email;

        setTimeout(function () {
    window.location = "./dashboard/cards.html";
        }, 1000); // apenas para exibir o loading

    });

        } else {

    console.log("Houve um erro ao tentar realizar o login!");

    resposta.text().then(texto => {
        console.error(texto);
    });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}