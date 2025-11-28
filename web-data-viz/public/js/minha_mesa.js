function NovaCampanha () {

    var tituloVar = titulo.value;
    var descricaoVar = tex_historia.value;
    var sistemaVar = sistema.value;
    var sessoesVar = sessoes.value;
    var temaVar = slc_tema.value;
    var enredoVar = slc_enredo.value;
    var estruturaVar = slc_estrutura.value;
    var arcoVar = slc_arco.value;

    console.log(tituloVar)
    console.log(descricaoVar)
    console.log(sistemaVar)
    console.log(sessoesVar)
    console.log(temaVar)
    console.log(enredoVar)
    console.log(estruturaVar)
    console.log(arcoVar)

    if (tituloVar == '' ||
        sistemaVar == '' ||
        temaVar == '#' ||
        enredoVar == '#' ||
        estruturaVar == '#' ||
        arcoVar == '#'
    ){

        alert('Os campos devem ser preenchidos antes de salvar')
        return false
    }

    fetch('/campanhas/cadastrar', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tituloServer: tituloVar, 
            descricaoServer: descricaoVar,
            sistemaServer: sistemaVar, 
            usuarioServer: sessionStorage.ID_USUARIO,
            sessoesServer: sessoesVar, 
            temaServer: temaVar, 
            enredoServer: enredoVar, 
            estruturaServer: estruturaVar, 
            arcoServer: arcoVar,
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          window.alert("Campanha salva com sucesso");

        }
        else if (resposta.status == 404) {

          window.alert("Deu 404!");

        }else {

          throw ("Houve um erro ao tentar criar a campanha!"  + resposta.status);

        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;

}

function ListarCampanhas(){

  var idUsuario = sessionStorage.ID_USUARIO
  var cardCampanha = '';

  console.log (idUsuario)

  fetch(`/campanhas/listar/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
            })
        }).then (function (resposta) {

    if (resposta.ok) {
      if (resposta.status == 204) {

        console.log('Nenhuma campanha cadastrada')
        throw 'Nenhum resultado encontrado'

      }

      resposta.json().then(function (resposta) {

        console.log("Dados recebidos: ", JSON.stringify(resposta));

        for (let i = 0; i < resposta.length; i++) {
          var campanha = resposta[i]

          cardCampanha += `
            <div onclick="DadosCampanha(${campanha.Id})" class="card_campanha">
                  
              <div class="container_flex">
                  <h2 class="text_title">${campanha.Titulo}</h2>
                  <p class="text">
                      <span id="spn_sistema">Sistema:${campanha.Sistema}</span>
                  </p>
              </div>

              <div class="detalhes">
                  <h2 class="text_title">Detalhes</h2>
                  <span id="spn_tema" class="text">Tema: ${campanha.Tema} </span>
                  <span id="spn_Estrutura" class="text">Estrutura: ${campanha.Estrutura} </span>
                  <span id="spn_Arco" class="text">Arco Narrativo: ${campanha.ArcoNarrativo} </span>
                  <span id="spn_Sessões" class="text">Sessões Jogadas: ${campanha.Sessoes} </span>

              </div>

            </div>`
        
        }

        container_campanha.innerHTML = cardCampanha

      });

    }else {

      throw ('Houve um erro na API!');

    }
            
  })

  .catch(function (resposta) {

    console.error(resposta);
    
  });

}

function DadosCampanha(id){

  sessionStorage.ID_CAMPANHA = id
  var idUsuario = sessionStorage.ID_USUARIO

  fetch(`/campanhas/DadosCampanha/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                idCampanhaServer: sessionStorage.ID_CAMPANHA
            })
        }).then (function (resposta) {

    if (resposta.ok) {
      if (resposta.status == 204) {

        console.log('Nenhuma campanha encontrada')
        throw 'Nenhum resultado encontrado'

      }

      resposta.json().then(function (resposta) {

        console.log("Dados recebidos: ", JSON.stringify(resposta));
        var campanha = resposta[0]

        sessionStorage.titulo = campanha.Titulo;
        sessionStorage.sistema = campanha.Sistema;
        sessionStorage.sessoes = campanha.Sessoes;
        sessionStorage.slc_tema = campanha.Tema;
        sessionStorage.slc_enredo = campanha.Enredo;
        sessionStorage.slc_estrutura = campanha.Estrutura;
        sessionStorage.slc_arco = campanha.ArcoNarrativo;
        sessionStorage.tex_historia = campanha.Descricao;

      });

      window.location = 'campanhaUpdate.html';

    }else {

      throw ('Houve um erro na API!');

    }
            
  })

  .catch(function (resposta) {

    console.error(resposta);
    
  });

}

function exibir (){

  titulo.value = sessionStorage.titulo
  sistema.value = sessionStorage.sistema
  sessoes.value = sessionStorage.sessoes
  slc_tema.value = sessionStorage.slc_tema
  slc_enredo.value = sessionStorage.slc_enredo
  slc_estrutura.value = sessionStorage.slc_estrutura
  slc_arco.value = sessionStorage.slc_arco
  tex_historia.value = sessionStorage.tex_historia

} 

function AtualizarCampanha (){

  var tituloVar = titulo.value;
  var descricaoVar = tex_historia.value;
  var sistemaVar = sistema.value;
  var sessoesVar = sessoes.value;
  var temaVar = slc_tema.value;
  var enredoVar = slc_enredo.value;
  var estruturaVar = slc_estrutura.value;
  var arcoVar = slc_arco.value;

  console.log(tituloVar)
  console.log(descricaoVar)
  console.log(sistemaVar)
  console.log(sessoesVar)
  console.log(temaVar)
  console.log(enredoVar)
  console.log(estruturaVar)
  console.log(arcoVar)

  if (tituloVar == '' ||
      sistemaVar == '' ||
      temaVar == '#' ||
      enredoVar == '#' ||
      estruturaVar == '#' ||
      arcoVar == '#'
    ){

        alert('Os campos devem ser preenchidos antes de salvar')
        return false
    }
  
    fetch(`/campanhas/atualizar`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              tituloServer: tituloVar, 
              descricaoServer: descricaoVar,
              sistemaServer: sistemaVar, 
              campanhaServer: sessionStorage.ID_CAMPANHA,
              sessoesServer: sessoesVar, 
              temaServer: temaVar, 
              enredoServer: enredoVar, 
              estruturaServer: estruturaVar, 
              arcoServer: arcoVar,    
              
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                window.alert("Modificações realizadas com sucesso");
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar salvar as mudanças Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });


}