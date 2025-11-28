const Estrutura = document.getElementById("barrasEstrutura");
const Enredo = document.getElementById("barrasEnredo");

new Chart(Estrutura, {
  type: "bar",
  data: {
    labels: [""],
    datasets: [
      {
        axis: 'y',
        label: "Linha",
        data: [10],
        borderColor: ["#001c42ff"],
        borderWidth: 0.5,
        backgroundColor: ["#70acffff"],
      },
      {
        axis: 'y',
        label: "Arvore",
        data: [10],
        borderColor: ["#274d4dff"],
        borderWidth: 0.5,
        backgroundColor: ["#548383"],
      },
      {
        axis: 'y',
        label: "Teia",
        data: [10],
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
            return context.dataset.label + ": " + context.parsed.y;
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

new Chart(Enredo, {
  type: "bar",
  data: {
    labels: [""],
    datasets: [
      {
        axis: 'y',
        label: "Superando o Monstro",
        data: [20],
        borderWidth: 0.5,
        backgroundColor: ["#004e61"],
      },
      {
        axis: 'y',
        label: "Busca",
        data: [10],
        borderWidth: 0.5,
        backgroundColor: ["#007896"],
      },
      {
        axis: 'y',
        label: "Viagem e Retorno",
        data: [2],
        borderWidth: 0.5,
        backgroundColor: ["#479aa7ff"],
      },
      {
        axis: 'y',
        label: "Comédia",
        data: [20],
        borderWidth: 0.5,
        backgroundColor: ["#1fd1c8ff"],
      },
      {
        axis: 'y',
        label: "Tragédia",
        data: [10],
        borderWidth: 0.5,
        backgroundColor: ["#BF7C33"],
      },
      {
        axis: 'y',
        label: "Renascimento",
        data: [2],
        borderWidth: 0.5,
        backgroundColor: ["#f36c05ff"],
      },
      {
        axis: 'y',
        label: "Da Miséria à Riqueza",
        data: [2],
        borderWidth: 0.5,
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
            return context.dataset.label + ": " + context.parsed.y;
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
