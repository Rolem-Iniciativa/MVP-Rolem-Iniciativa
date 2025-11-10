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