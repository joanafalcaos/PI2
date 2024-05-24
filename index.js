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

const url = "https://parseapi.back4app.com/classes/BaseEnade";
const headers = {
  "X-Parse-Application-Id": "ctoAeEYlkHYxqP80X1fVEwtFshGtMdzpnJOg9vcK",
  "X-Parse-REST-API-Key": "4xenXpwAwrWzTbARXn37UQ5wpcj0hCuLHYMFThis",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

