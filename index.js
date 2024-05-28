const ctx = document.getElementsByClassName("school-type-adm");

const data = {
  labels: ["Municipal", "Estadual", "Federal"],
  datasets: [{
    label: "Quantidade",
    data: [5,10,2],
    borderWidth: 3,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
  }]
};

const config = {
  type: 'pie',
  data: {
    labels: data.labels,
    datasets: [{
      label: data.datasets[0].label,
      data: data.datasets[0].data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  }
};

const chartUm = new Chart(ctx, config);

var ctx2 = document.getElementsByClassName("total-libraries-region")

var chartDois = new Chart(ctx2, {
    type:'line',
    data:{
      labels: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
      datasets: [{
        label: "Quantidade",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10,5,10,5,14,20,15,6,14,8,12,15,5,10,12],
        borderWidth: 3,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      }]

    }
  })

var ctx3 = document.getElementsByClassName("total-public-libraries-state")

var chartTres = new Chart(ctx3, {
    type:'line',
    data:{
      labels: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
      datasets: [{
        label: "Quantidade",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10,5,10,5,14,20,15,6,14,8,12,15,5,10,12],
        borderWidth: 3,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      }]

    }
  })

var ctx4 = document.getElementsByClassName("total-public-libraries-region")

var chartQuatro = new Chart(ctx4, {
    type:'line',
    data:{
      labels: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
      datasets: [{
        label: "Quantidade",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10,5,10,5,14,20,15,6,14,8,12,15,5,10,12],
        borderWidth: 3,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      }]

    }
  })

var ctx5 = document.getElementsByClassName("total-private-libraries-state")

var chartCinco = new Chart(ctx5, {
    type:'line',
    data:{
      labels: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
      datasets: [{
        label: "Quantidade",
        data: [5,10,5,14,20,15,6,14,8,12,15,5,10,5,10,5,14,20,15,6,14,8,12,15,5,10,12],
        borderWidth: 3,
        borderColor: 'rgba(77,166,253,0.85)',
        backgroundColor: 'transparent',
      }]

    }
  })

  const censoPeClassUrl = "https://parseapi.back4app.com/classes/CensoPeClass";
  const headers = {
    "X-Parse-Application-Id": "zS4HA9IMZEWTlTnnx4C0pDpFssKbp8LM9aNxkhY8",
    "X-Parse-REST-API-Key": "1A7kwTiWyeg1GwXDl8rcoyStzWJB4SId5PX8wGOh",
  };
  const headersJson = {
    ...headers,
    "Content-Type": "application/json",
  };

  // BOX DE ESCOLAS SEM BIBLIOTECAS
  const getQtAnyLibrarie = async (anyLibrarie) => {
    let url = censoPeClassUrl;
    if(anyLibrarie){
        const whereClause = JSON.stringify({
            IN_BIBLIOTECA: 0
          });
        url = `${url}?where=${whereClause}`;
        url = encodeURI(url);
        console.log("url", url);
    }
    const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();
      return data.results;
  };

const showQtAnyLibrarie = async () => {
  //Chamando a func para pegar os resultados
  const escolasComBiblioteca = await getQtAnyLibrarie(true);

  //limpando dados antigos
  resultadoContainer.innerHTML = "";

  // Iterando para contar a qt
  var count = 0;
  escolasComBiblioteca.forEach(escola => {
    console.log(escola)
    count++;
  });
    var anyLibrariesQt = document.getElementById('total-schools-without-libraries')
    anyLibrariesQt.textContent = count;
};

showQtAnyLibrarie();

/// onclick func
function change(buttonId) {
  var img = document.getElementById('map');
  switch(buttonId) {
      case 'general':
          img.src = 'img/rmr_mapa.png';
          img.alt = 'Mapa da RMR de Recife';
          img.title = 'Mapa da RMR de Recife';
          break;
      case 'abreu':
          img.src = 'img/mapa_abreu_lima.png'; // Substitua pelo caminho da outra imagem
          img.alt = 'Abreu e Lima'; // Substitua pela descrição da outra imagem
          img.title = 'Abreu e Lima'; // Substitua pelo título da outra imagem
          break;
      case 'cabo':
          img.src = 'img/cabo_sto_agostinho_mapa.png';
          img.alt = 'Cabo de Santo Agostinho';
          img.title = 'Cabo de Santo Agostinho';
          break;
      case 'camaragibe':
          img.src = 'img/camaragibe_mapa.png';
          img.alt = 'Camaragibe';
          img.title = 'Camaragibe';
          break;
      case 'goiana':
          img.src = 'img/goiana_mapa.png';
          img.alt = 'Goiana';
          img.title = 'Goiana';
          break;
      case 'igarassu':
          img.src = 'img/igarassu_mapa.png';
          img.alt = 'Igarassu';
          img.title = 'Igarassu';
          break;
      case 'itamaraca':
          img.src = 'img/ilha_itamaraca_mapa.png';
          img.alt = 'Ilha de Itamaracá';
          img.title = 'Ilha de Itamaracá';
          break;
      case 'ipojuca':
          img.src = 'img/ipojuca_mapa.png';
          img.alt = 'Ipojuca';
          img.title = 'Ipojuca';
          break;
      case 'itapissuma':
          img.src = 'img/itapissuma_mapa.png';
          img.alt = 'Itapissuma';
          img.title = 'Itapissuma';
          break;
      case 'jaboatao':
          img.src = 'img/jaboatao_guararapes_mapa.png';
          img.alt = 'Jaboatão dos Guararapes';
          img.title = 'Jaboatão dos Guararapes';
          break;
      case 'moreno':
          img.src = 'img/moreno_mapa.png';
          img.alt = 'Moreno';
          img.title = 'Moreno';
          break;
      case 'olinda':
          img.src = 'img/olinda_mapa.png';
          img.alt = 'Olinda';
          img.title = 'Olinda';
          break;
      case 'paulista':
          img.src = 'img/paulista_mapa.png';
          img.alt = 'Paulista';
          img.title = 'Paulista';
          break;
      case 'recife':
          img.src = 'img/recife_mapa.png';
          img.alt = 'Recife';
          img.title = 'Recife';
          break;
      case 'slourenco':
          img.src = 'img/sao_lourenco_mapa.png';
          img.alt = 'São Lourenço da Mata';
          img.title = 'São Lourenço da Mata';
  }
}