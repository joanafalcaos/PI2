const cidades = {
  'general': {
    src : 'img/rmr_mapa.png',
    alt : 'Mapa da RMR de Recife',
    title : 'Mapa da RMR de Recife',
  },
  'abreu': {
    src : 'img/mapa_abreu_lima.png',
    alt : 'Abreu e Lima',
    title : 'Abreu e Lima',
    id_cidade : 2600054,
  },
  'cabo': {
    src : 'img/cabo_sto_agostinho_mapa.png',
    alt : 'Cabo de Santo Agostinho',
    title : 'Cabo de Santo Agostinho',
    id_cidade : 2602902,
  },
  'camaragibe': {
    src : 'img/camaragibe_mapa.png',
    alt : 'Camaragibe',
    title : 'Camaragibe',
    id_cidade : 2603454,
  },
  'goiana': {
    src : 'img/goiana_mapa.png',
    alt : 'Goiana',
    title : 'Goiana',
    id_cidade : 2606200,
  },
  'igarassu': {
    src : 'img/igarassu_mapa.png',
    alt : 'Igarassu',
    title : 'Igarassu',
    id_cidade : 2606804,
  },
  'itamaraca': {
    src : 'img/ilha_itamaraca_mapa.png',
    alt : 'Ilha de Itamaracá',
    title : 'Ilha de Itamaracá',
    id_cidade : 2607604,
  },
  'ipojuca': {
    src : 'img/ipojuca_mapa.png',
    alt : 'Ipojuca',
    title : 'Ipojuca',
    id_cidade : 2607208,
  },
  'itapissuma': {
    src : 'img/itapissuma_mapa.png',
    alt : 'Itapissuma',
    title : 'Itapissuma',
    id_cidade: 2607752,
    },
 'jaboatao': {
    src : 'img/jaboatao_guararapes_mapa.png',
    alt : 'Jaboatão dos Guararapes',
    title : 'Jaboatão dos Guararapes',
    id_cidade : 2607901,
    },
 'moreno': {
    src : 'img/moreno_mapa.png',
    alt : 'Moreno',
    title : 'Moreno',
    id_cidade : 2609402,
    },
 'olinda': {
    src : 'img/olinda_mapa.png',
    alt : 'Olinda',
    title : 'Olinda',
    id_cidade : 2609600,
    },
 'paulista': {
    src : 'img/paulista_mapa.png',
    alt : 'Paulista',
    title : 'Paulista',
    id_cidade: 2610707,
    },
 'recife': {
    src : 'img/recife_mapa.png',
    alt : 'Recife',
    title : 'Recife',
    id_cidade : 2611606,
    },
 'slourenco': {
    src : 'img/sao_lourenco_mapa.png',
    alt : 'São Lourenço da Mata',
    title : 'São Lourenço da Mata',
    id_cidade: 2613701,
  },
}

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

// BOX DE ESCOLAS SEM BIBLIOTECAS
const censoPeClassUrl = "https://parseapi.back4app.com/classes/BaseCensoRmr";
const headers = {
  "X-Parse-Application-Id": "vI8Ew2vCgezbMDismPbmWizkpiX72IISZ1rmCP9G",
  "X-Parse-REST-API-Key": "S0OPV4TGEgSec4ua8gbSFuGCb9Xm5fDcqkxgvwAe",
  "Content-Type": "application/json",
};

const totalSchoolsElement = document.getElementById('total-schools-value');
let tipo_adm_valores = []

// cria um filtro usando chave/parametro URLSearchParams do js
const totalScholls = async () => {
  const params = new URLSearchParams({
    count: 1,
  });
//passa esse parametro para toString para usar no fetch
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
// se a resposta for sucesso, traz o resultado em json
    if (response.ok) {
      const data = await response.json();
      const totalSchoolsValue = data.count;
      if (totalSchoolsElement) {
        totalSchoolsElement.textContent = '';
        totalSchoolsElement.textContent = totalSchoolsValue;
      } else {
        console.error("Element with id 'total-schools-value' not found.");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
};
totalScholls();

const getCity = async (cidadeValor) => {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      id_cidade: cidadeValor,
    }),
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const totalAbreuLimaValue = data.count;
      if (totalSchoolsElement) {
        totalSchoolsElement.textContent = '';
        totalSchoolsElement.textContent = totalAbreuLimaValue;
      } else {
        console.error("Element with id 'total-schools-value' not found.");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
};

async function admCount(cidadeValor) {
  for (let i = 0; i < 3; i++) {
    let controle  = i+1;
      await getTypeAdm(controle,cidadeValor);
  }
}

async function getTypeAdm(controle,cidadeValor) {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      id_cidade: cidadeValor,
      tipo_adm: controle,
    }),
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const valor = data.count;

      // Define o valor no índice específico do array com base no controle
      tipo_adm_valores[controle - 1] = valor;

      console.log("Valor: " + tipo_adm_valores);
      
      // Atualiza o gráfico com os novos dados
      chartUm.data.datasets[0].data = tipo_adm_valores;
      chartUm.update();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}

/// onclick func
function change(buttonId) {
  var img = document.getElementById('map');

  img.src = cidades[buttonId].src
  img.alt = cidades[buttonId].alt
  img.title = cidades[buttonId].title

  if (buttonId === 'general') {
    totalScholls();
    admCount()
  } else {
    getCity(cidades[buttonId].id_cidade);
    admCount(cidades[buttonId].id_cidade);
  }
}