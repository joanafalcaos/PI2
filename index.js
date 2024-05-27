var ctx = document.getElementsByClassName("total-libraries-states")

var chartUm = new Chart(ctx, {
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

var ctx = document.getElementsByClassName("total-libraries-region")

var chartDois = new Chart(ctx, {
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

var ctx = document.getElementsByClassName("total-public-libraries-state")

var chartTres = new Chart(ctx, {
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

var ctx = document.getElementsByClassName("total-public-libraries-region")

var chartQuatro = new Chart(ctx, {
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

var ctx = document.getElementsByClassName("total-private-libraries-state")

var chartCinco = new Chart(ctx, {
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

var ctx = document.getElementsByClassName("total-private-libraries-region")

var chartSeis = new Chart(ctx, {
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

  const getQtAnyLibrarie = async (anyLibrarie) => {
    let url = censoPeClassUrl;
    if(anyLibrarie){
        const whereClause = JSON.stringify({
            IN_BIBLIOTECA: {
              $in: [0, undefined]
            }
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
    count++;
  });
    var anyLibrariesQt = document.getElementById('total-schools-without-libraries')
    anyLibrariesQt.textContent = count;
};

showQtAnyLibrarie();