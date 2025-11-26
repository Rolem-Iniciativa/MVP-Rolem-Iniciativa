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
        sessoesVar == '' ||
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

          setTimeout(() => {
            alert('Campanha salva com sucesso');
          }, "1000");

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

function exibirCampanhas(){

  var idUsuario = sessionStorage.ID_USUARIO
  var cardCampanha = '';

  fetch(`/campanhas/exibir/${idUsuario}`).then (function (resposta) {

    if (resposta.ok) {
      if (resposta.status == 204) {

        console.log('Nenhuma campanha cadastrada')
        throw 'Nenhum resultado encontrado'

      }

      resposta.json().then(function (resposta) {

        console.log("Dados recebidos: ", JSON.stringify(resposta));

        cardCampanha += `
          <div onclick="exibir()" class="card_campanha">
                
            <div class="container_flex">
                <h2 class="text_title">A Queda de Vanir</h2>
                <p class="text">
                    <span id="spn_sistema">Sistema:</span>
                    <span class="spn_descricao"></span> Descrição:
                    <div class="camp_descricao"></div>
                </p>
            </div>

            <div class="detalhes">
                <h2 class="text_title">Detalhes</h2>
                <span id="spn_tema" class="text">Tema:</span>
                <span id="spn_Estrutura" class="text">Estrutura:</span>
                <span id="spn_Arco" class="text">Arco Narrativo:</span>
                <span id="spn_Sessões" class="text">Sessões Jogadas:</span>

            </div>

          </div>`

      });

    }else {

      throw ('Houve um erro na API!');

    }
            
  })

  .catch(function (resposta) {

    console.error(resposta);
    
  });

}