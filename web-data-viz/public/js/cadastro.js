function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var nickVar = ipt_nick.value;
    var emailVar = (ipt_email_cadastro.value).toLowerCase();
    var senhaVar = ipt_senha_cadastro.value;
    var confirmacaoSenhaVar = ipt_confirmSenha.value;

    console.log(nomeVar)
    console.log(nickVar)
    console.log(emailVar)
    console.log(senhaVar)

    var erro = ''

    // Inicio de validação dos campos
    if (
      nomeVar == "" ||
      nickVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {
      
      erro = `Todos os campos devem ser preenchidos`;

    }else {

      if ((!emailVar.includes('@gmail.com')) && (!emailVar.includes('@outlook.com'))){

        erro = `Email invalido`;
        
      }
      
      erro_email.innerHTML = erro
      erro = '';
      
      if ((senhaVar.length < 8) ||
          senhaVar.toUpperCase() == senhaVar ||
          senhaVar.toLowerCase() == senhaVar
      ){

        erro = `Senha Fraca.`;
        
      }
      
      erro_senha.innerHTML = erro;
      erro = '';

      if (senhaVar != confirmacaoSenhaVar){

        erro = `Senhas divergentes`;
        
      }
      
      erro_confirm.innerHTML = erro;
      erro = '';

    }

    erro_geral.innerHTML = erro;

    // Fim da validação dos campo

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        nickServer: nickVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(() => {
            window.location = "../index.html";
          }, "2000");

        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
}