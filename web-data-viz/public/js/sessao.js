// sessão
function validarSessao(page) {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nickName = sessionStorage.NICKNAME_USUARIO;

    if (page == 0){

        if (true/*email != null && nome != null*/) {

            nav.innerHTML = `
            <li ><a class="Page_Atual" href="#">Home</a></li>
            <li><a href="view/tomo_mestre.html">Tomo do Mestre</a></li>
            <li><a href="view/minhas_mesas.html">Minhas Mesas</a></li>
            `
            
            card_nav.innerHTML = `
            <h2 class="text_title">${nickName}</h2>
            <h4>${email}</h4>

            <div class="div_btn">

            <button class="button" onclick="window.location ='ficha_mestre.html'">Ficha do Mestre</button>
            <button id="btn_sair" class="button" onclick="limparSessao(0)">Sair</button>
        
            </div>    
            `

        } else {

            nav.innerHTML = `
            <li ><a class="Page_Atual" href="#">Home</a></li>
            <li><a href="view/tomo_mestre.html">Tomo do Mestre</a></li>
            <li><a href="view/cadastro.html">Registrar-se</a></li>
            `

            card_nav.innerHTML = `
                <div class="div_ipt">
                    <label for="ipt_email_login">E-mail:</label>
                    <input class="ipt" id="ipt_email_login" type="text">
                    
                    <label for="ipt_senha_login">Senha:</label>
                    <input class="ipt" id="ipt_senha_login" type="password">
                </div>
                
                <button class="button btn" onclick="Entrar()">Entrar</button>
                
                <div id="erro_login" class="div_erros_login"></div>
            `

        }
    }

    if (page == 1){

        if (email != null && nome != null) {

            nav.innerHTML = `
            <li><a href="../index.html">Home</a></li>
            <li><a class="Page_Atual" href="tomo_mestre.html">Tomo do Mestre</a></li>
            <li><a href="view/minhas_mesas.html">Minhas Mesas</a></li>
            `

            card_nav.innerHTML = `
            <h2 class="text_title">${nickName}</h2>
            <h4>${email}</h4>

            <div class="div_btn">

            <button class="button" onclick="window.location ='ficha_mestre.html'">Ficha do Mestre</button>
            <button id="btn_sair" class="button" onclick="limparSessao()">Sair</button>
        
            </div>    
            `
            
        } else {

            nav.innerHTML = `
            <li><a href="../index.html">Home</a></li>
            <li><a class="Page_Atual" href="#">Tomo do Mestre</a></li>
            <li><a href="cadastro.html">Registrar-se</a></li>
            `

            card_nav.innerHTML = `
                <div class="div_ipt">
                    <label for="ipt_email_login">E-mail:</label>
                    <input class="ipt" id="ipt_email_login" type="text">
                    
                    <label for="ipt_senha_login">Senha:</label>
                    <input class="ipt" id="ipt_senha_login" type="password">
                </div>
                
                <button class="button btn" onclick="Entrar()">Entrar</button>
                
                <div id="erro_login" class="div_erros_login"></div>
            `
        }
    }
}

function limparSessao(page) {

   if (page == 0) {

        sessionStorage.clear();
        window.location = "index.html";

    }else {

        sessionStorage.clear();
        window.location = "../index.html";

    }
}

