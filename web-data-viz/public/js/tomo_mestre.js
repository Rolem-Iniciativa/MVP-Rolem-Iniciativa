var listaConteudo = [{
    topico: 'Primeiros Passos',
    conteudo: [{
        title: 'Começe agora',
        conteudo: '../assets/videos/PrimeirosPassos.mp4'
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

            <div id="topicos" style='display: none;'> 
                <span class='topico' onclick="ExibirTopico()">${listaConteudo[0].conteudo[0].title}</span>
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
        topicos.style = 'display: block; text-align: center;'
        topico0.onclick = () => FecharTopico(0)
        

    }
    
 }

 function FecharTopico (id){
    

    if (id == 0){

        livro_fechado0.style = 'opacity: 1;';
        livro_aberto0.style = 'opacity: 0;';
        topicos.style = 'display: none'
        topico0.onclick = () => AbrirTopico(0)

    }
    
 }

 function ExibirTopico(){

    conteudo.innerHTML = `
    <h2 class="text_title">Nivel 01: Começe Agora</h2>
    <video controls>
        <source src="${listaConteudo[0].conteudo[0].conteudo}" type="video/mp4">
      </video>
    `;

 }