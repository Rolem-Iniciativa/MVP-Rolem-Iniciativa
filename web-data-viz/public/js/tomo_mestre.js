var listaConteudo = [{
    topico: 'Primeiros Passos',
    conteudo: [{
        title: '',
        conteudo: ''
    }]
}, {

    topico: 'Herói da vila',
    conteudo: [{
        titulo: '',
        conteudo: ''
    }]
}];

function ExibirConteudo(){

    var addConteudo = '';

    for (var i = 0; i < listaConteudo.length; i++) {

        addConteudo += `
        <div class="conteudo">
           <div class="title_side">

                    <div class="icon_transition">
                        <img id="livro_fechado${i}" class="livro_fechado" class="aberto"  src="../assets/icon/IconTopicEnd.svg" alt="">
                        <img id="livro_aberto${i}" class="fechado" src="../assets/icon/IconTopicOpen.svg" alt="">
                    </div>
                    <h2 id='topico${i}' class="text_title title_conteudo" onclick="AbrirTopico(${i})">${listaConteudo[i].topico}</h2>

                </div>

            </div>
        `         
    
    }

    conteudo_side.innerHTML = addConteudo
}

ExibirConteudo()

function AbrirTopico (id){
    

    if (id == 0){

        livro_fechado0.style = 'opacity: 0;';
        livro_aberto0.style = 'opacity: 1;';
        topico0.onclick = () => FecharTopico(0)
        

    }else if (id == 1){

        livro_fechado1.style = 'opacity: 0;';
        livro_aberto1.style = 'opacity: 1;';
        topico1.onclick = () => FecharTopico(1)
        

    }else if (id == 2){

        livro_fechado2.style = 'opacity: 0;';
        livro_aberto2.style = 'opacity: 1;';
        topico2.onclick = () => FecharTopico(2)
        

    }else if (id == 3){

        livro_fechado3.style = 'opacity: 0;';
        livro_aberto3.style = 'opacity: 1;';
        topico3.onclick = () => FecharTopico(3)

    }
    
 }

 function FecharTopico (id){
    

    if (id == 0){

        livro_fechado0.style = 'opacity: 1;';
        livro_aberto0.style = 'opacity: 0;';
        topico0.onclick = () => AbrirTopico(0)

    }else if (id == 1){

        livro_fechado1.style = 'opacity: 1;';
        livro_aberto1.style = 'opacity: 0;';
        topico1.onclick = () => AbrirTopico(1)

    }else if (id == 2){

        livro_fechado2.style = 'opacity: 1;';
        livro_aberto2.style = 'opacity: 0;';
        topico2.onclick = () => AbrirTopico(2)

    }else if (id == 3){

        livro_fechado3.style = 'opacity: 1;';
        livro_aberto3.style = 'opacity: 0;';
        topico3.onclick = () => AbrirTopico(3)

    }
    
 }