function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = ipt_nome.value;
    var nickVar = ipt_nick.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoSenhaVar = ipt_confirmSenha.value;

    var erro = '';

    // Inicio de validação dos campos
    if (
      nomeVar == "" ||
      nickVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {

      erro = `Todos os campos devem ser preenchidos`;
      return false;

    }

    if ((emailVar.includes('@gmail.com')) || (emailVar.includes('@outlook.com'))){

      erro = `Email invalido`;
      return false;

    }

    erro_email.innerHTML = erro
    
    if ((senhaVar.length < 8) ||
        senhaVar.toUpperCase == senhaVar ||
        senhaVar.toLowerCase == senhaVar
    ){

      erro = `Sua senha deve conter letras maiusculas, minusculas e 8 caracteres ou mais.`;
      return false;

    }

    erro_senha.innerHTML = erro;

    if (senhaVar != confirmacaoSenhaVar){

      erro = `Senhas divergentes`;
      return false;

    }

    erro_confirm.innerHTML = erro;
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
            window.location = "index.html";
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