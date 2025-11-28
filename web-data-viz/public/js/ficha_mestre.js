const Estrutura = document.getElementById("barrasEstrutura");
const Enredo = document.getElementById("barrasEnredo");
  
function DadosGrafico (){
  var idUsuario = sessionStorage.ID_USUARIO

  fetch(`/graficos/pegarDados/`, {
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

        console.log('Nenhuma dado encontrado')
        throw 'Nenhum resultado encontrado'

      }

      resposta.json().then(function (resposta) {
        var dados = resposta[0];
        console.log(dados)

        new Chart(Estrutura, {
          type: "bar",
          data: {
            labels: [""],
            datasets: [
              {
                axis: 'y',
                label: "Linha",
                data: [dados.EstruturaLinha],
                borderColor: ["#001c42ff"],
                borderWidth: 0.5,
                backgroundColor: ["#70acffff"],
              },
              {
                axis: 'y',
                label: "Arvore",
                data: [dados.EstruturaArvore],
                borderColor: ["#274d4dff"],
                borderWidth: 0.5,
                backgroundColor: ["#548383"],
              },
              {
                axis: 'y',
                label: "Teia",
                data: [dados.EstruturaTeia],
                borderColor: ["#2d3e52ff"],
                borderWidth: 0.5,
                backgroundColor: ["#48607eff"],
              },
            ],
          },
          options: {
            indexAxis: 'y',
            responsive: true, // Faz o gráfico redimensionar automaticamente com o container
            plugins: {
              // Configurações para plugins nativos (legend, title, tooltip, etc.)
              legend: { display: true , // Mostra a legenda (nome do dataset)
                labels: {
                  font: {
                    weight: "semi-bold",
                    size: 11,
                  },
                  color: "rgba(255, 255, 255, 1)",
                },
              },
              title: {
                display: true,
                text: "Estruturas Narrativas Utilizadas",
                color: "rgba(255, 255, 255, 1)",
                font: { size: 15, weight: "bold", family: "Arial" },
              }, // Título do gráfico
              tooltip: {
                // Personaliza o conteúdo do tooltip (o balão que aparece ao passar o mouse)
                callbacks: {
                  label: function (context) {
                    // "label" recebe o contexto do ponto e retorna a string que aparecerá no tooltip
                    return context.dataset.label + ": " + context.parsed.x;
                    // context.dataset.label = nome do dataset
                    // context.parsed = valor do data do eixo x
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        new Chart(Enredo, {
          type: "bar",
          data: {
            labels: [""],
            datasets: [
              {
                axis: 'y',
                label: "Superando o Monstro",
                data: [dados.EnredoSuperarMonstro],
                borderWidth: 1,
                backgroundColor: ["#004e61"],
              },
              {
                axis: 'y',
                label: "Busca",
                data: [dados.EnredoBusca],
                borderWidth: 1,
                backgroundColor: ["#007896"],
              },
              {
                axis: 'y',
                label: "Viagem e Retorno",
                data: [dados.EnredoViagemRetorno],
                borderWidth: 1,
                backgroundColor: ["#479aa7ff"],
              },
              {
                axis: 'y',
                label: "Comédia",
                data: [dados.EnredoComedia],
                borderWidth: 1,
                backgroundColor: ["#1fd1c8ff"],
              },
              {
                axis: 'y',
                label: "Tragédia",
                data: [dados.EnredoTragedia],
                borderWidth: 1,
                backgroundColor: ["#BF7C33"],
              },
              {
                axis: 'y',
                label: "Renascimento",
                data: [dados.EnredoRenacimento],
                borderWidth: 1,
                backgroundColor: ["#f36c05ff"],
              },
              {
                axis: 'y',
                label: "Da Miséria à Riqueza",
                data: [dados.EnredoMiseriaRiqueza],
                borderWidth: 1,
                backgroundColor: ["#b85f10ff"],
              },
            ],
          },
          options: {
            indexAxis: 'y',
            responsive: true, // Faz o gráfico redimensionar automaticamente com o container
            plugins: {
              // Configurações para plugins nativos (legend, title, tooltip, etc.)
              legend: { display: true , // Mostra a legenda (nome do dataset)
                labels: {
                  font: {
                    weight: "semi-bold",
                    size: 11,
                  },
                  color: "rgba(255, 255, 255, 1)",
                },
              },
              title: {
                display: true,
                text: "Enredos utilizados",
                color: "rgba(255, 255, 255, 1)",
                font: { size: 15, weight: "bold", family: "Arial" },
              }, // Título do gráfico
              tooltip: {
                // Personaliza o conteúdo do tooltip (o balão que aparece ao passar o mouse)
                callbacks: {
                  label: function (context) {
                    // "label" recebe o contexto do ponto e retorna a string que aparecerá no tooltip
                    return context.dataset.label + ": " + context.parsed.x;
                    // context.dataset.label = nome do dataset
                    // context.parsed = valor do data do eixo y
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
        
      });

    }else {

      throw ('Houve um erro na API!');

    }
            
  })

  .catch(function (resposta) {

    console.error(resposta);
    
  });


}

function DadosKPI(){

  var idUsuario = sessionStorage.ID_USUARIO

  fetch(`/graficos/pegarDadosKPI/`, {
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

        console.log('Nenhuma dado encontrado')
        throw 'Nenhum resultado encontrado'

      }

      resposta.json().then(function (resposta) {
        var dados = resposta[0];
        console.log(dados)

        kpi_TemaUsuario.innerHTML = dados.TemaUsuario
        kpi_EstruturaUsuario.innerHTML = dados.EstruturaUsuario
        kpi_ArcoUsuario.innerHTML = dados.ArcoUsuario
        kpi_TemaFavorito.innerHTML = dados.TemaFavorito
        kpi_EstruturaFavorito.innerHTML = dados.EstruturaFavorito
        kpi_ArcoFavorito.innerHTML = dados.ArcoFavorito
        nome_usuario.innerHTML = sessionStorage.NICKNAME_USUARIO

      });

    }else {

      throw ('Houve um erro na API!');

    }
            
  })

  .catch(function (resposta) {

    console.error(resposta);
    
  });


}




