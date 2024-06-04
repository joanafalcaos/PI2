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
  labels: ["Federal", "Estadual", "Municipal"],
  datasets: [{
    label: "Quantidade",
    data: [],
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

const ctx2 = document.getElementsByClassName("schools-libraries");

const data2 = {
  labels: ["Escolas com biblioteca","Escolas sem biblioteca"],
  datasets: [{
    label: "Quantidade",
    data: [],
    borderWidth: 3,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
  }]
};

const config2 = {
  type: 'pie',
  data: {
    labels: data2.labels,
    datasets: [{
      label: data2.datasets[0].label,
      data: data2.datasets[0].data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
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

const chartDois = new Chart(ctx2, config2);

const ctx3 = document.getElementsByClassName("typeAdm-libraries");

const data3 = {
  labels: ["Federal","Estadual","Municipal"],
  datasets: [{
    label: "Quantidade",
    data: [],
    borderWidth: 3,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
  }]
};

const config3 = {
  type: 'pie',
  data: {
    labels: data3.labels,
    datasets: [{
      label: data3.datasets[0].label,
      data: data3.datasets[0].data,
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

const chartTres = new Chart(ctx3, config3);

const ctx4 = document.getElementsByClassName("schools-with-librarian");

const data4 = {
  labels: ["Escolas com bibliotecários","Escolas sem bibliotecários"],
  datasets: [{
    label: "Quantidade",
    data: [],
    borderWidth: 3,
    borderColor: 'rgba(77,166,253,0.85)',
    backgroundColor: 'transparent',
  }]
};

const config4 = {
  type: 'pie',
  data: {
    labels: data4.labels,
    datasets: [{
      label: data4.datasets[0].label,
      data: data4.datasets[0].data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
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

const chartQuatro = new Chart(ctx4, config4);

// BOX DE ESCOLAS SEM BIBLIOTECAS
const censoPeClassUrl = "https://parseapi.back4app.com/classes/BaseCensoRmr";
const headers = {
  "X-Parse-Application-Id": "vI8Ew2vCgezbMDismPbmWizkpiX72IISZ1rmCP9G",
  "X-Parse-REST-API-Key": "S0OPV4TGEgSec4ua8gbSFuGCb9Xm5fDcqkxgvwAe",
  "Content-Type": "application/json",
};

const totalSchoolsElement = document.getElementById('total-schools-value');
let tipo_adm_valores = []
let schoolAndLibrariesQt = []
let tipo_adm_valores_biblio = []
let schoolWithLibrarian = []

//BLOCO DO GERAL - INÍCIO
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


async function admCountGeneral() {
  for (let i = 0; i < 3; i++) {
    let controle  = i+1;
      await typeAdmGeneral(controle);
  }
}
admCountGeneral();

async function typeAdmGeneral(controle) {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
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

async function getSchoolsAndLibrariesQtTotal() {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      has_biblio: 1,
    }),
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const escolasComBiblioteca = data.count;
      schoolAndLibrariesQt[0] = escolasComBiblioteca;

      const paramsTotalEscolas = new URLSearchParams({
        count: 1,
      });

      const responseTotalEscolas = await fetch(`${censoPeClassUrl}?${paramsTotalEscolas.toString()}`, {
        method: "GET",
        headers: headers,
      });

      if (responseTotalEscolas.ok) {
        const dataTotalEscolas = await responseTotalEscolas.json();
        const totalEscolasNaCidade = dataTotalEscolas.count;
        schoolAndLibrariesQt[1] = totalEscolasNaCidade;

        for (let i=0; i< schoolAndLibrariesQt.length; i++){
          if(i === 1){
            let controle = schoolAndLibrariesQt[i-1]
            schoolAndLibrariesQt[i] -= controle;
          }
        }
        chartDois.data.datasets[0].data = schoolAndLibrariesQt;
        chartDois.update();
      } else {
        throw new Error("Network response was not ok");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}
getSchoolsAndLibrariesQtTotal();

async function admCountLibrariesGeral() {
  for (let i = 0; i < 3; i++) {
    let controle  = i+1;
      await getTypeAdmLibrariesQtGeral(controle);
  }
}
admCountLibrariesGeral();

async function getSchoolsLibrarianInfoTotal() {
  const cd1 = {
    qt_bibliotecarios: { $gt: 0 }
  };

  const cd2 = {
    qt_bibliotecarios: { $lt: 1 }
  };

  const condicao1JSON = JSON.stringify(cd1);
  const condicao2JSON = JSON.stringify(cd2);

  const params = new URLSearchParams({
    count: 1,
    where: condicao1JSON,
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const escolasComBibliotecario = data.count;
      schoolWithLibrarian[0] = escolasComBibliotecario;

      const paramsTotalEscolas = new URLSearchParams({
        count: 1,
        where: condicao2JSON,
      });

      const responseTotalEscolas = await fetch(`${censoPeClassUrl}?${paramsTotalEscolas.toString()}`, {
        method: "GET",
        headers: headers,
      });

      if (responseTotalEscolas.ok) {
        const dataTotalEscolas = await responseTotalEscolas.json();
        const totalEscolasNaCidade = dataTotalEscolas.count;
        schoolWithLibrarian[1] = totalEscolasNaCidade;

        chartQuatro.data.datasets[0].data = schoolWithLibrarian;
        chartQuatro.update();
      } else {
        throw new Error("Network response was not ok");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}
getSchoolsLibrarianInfoTotal();

async function getTypeAdmLibrariesQtGeral(controle) {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      tipo_adm: controle,
	    has_biblio: 1,
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

      tipo_adm_valores_biblio[controle - 1] = valor;
      
      chartTres.data.datasets[0].data = tipo_adm_valores_biblio;
      chartTres.update();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}

// BLOCO DO GERAL - FIM

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
      const totalSchools = data.count;
      if (totalSchoolsElement) {
        totalSchoolsElement.textContent = '';
        totalSchoolsElement.textContent = totalSchools;
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

async function getSchoolsAndLibrariesQt(cidadeValor) {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      id_cidade: cidadeValor,
      has_biblio: 1,
    }),
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const escolasComBiblioteca = data.count;
      schoolAndLibrariesQt[0] = escolasComBiblioteca;

      const paramsTotalEscolas = new URLSearchParams({
        count: 1,
        where: JSON.stringify({
          id_cidade: cidadeValor,
        }),
      });

      const responseTotalEscolas = await fetch(`${censoPeClassUrl}?${paramsTotalEscolas.toString()}`, {
        method: "GET",
        headers: headers,
      });

      if (responseTotalEscolas.ok) {
        const dataTotalEscolas = await responseTotalEscolas.json();
        const totalEscolasNaCidade = dataTotalEscolas.count;
        schoolAndLibrariesQt[1] = totalEscolasNaCidade;

        for (let i=0; i< schoolAndLibrariesQt.length; i++){
          if(i === 1){
            let controle = schoolAndLibrariesQt[i-1]
            schoolAndLibrariesQt[i] -= controle;
          }
        }
        chartDois.data.datasets[0].data = schoolAndLibrariesQt;
        chartDois.update();
      } else {
        throw new Error("Network response was not ok");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}

async function admCountLibraries(cidadeValor) {
  for (let i = 0; i < 3; i++) {
    let controle  = i+1;
      await getTypeAdmLibrariesQt(controle,cidadeValor);
  }
}

async function getTypeAdmLibrariesQt(controle,cidadeValor) {
  const params = new URLSearchParams({
    count: 1,
    where: JSON.stringify({
      id_cidade: cidadeValor,
      tipo_adm: controle,
	  has_biblio: 1,
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

      tipo_adm_valores_biblio[controle - 1] = valor;
      
      chartTres.data.datasets[0].data = tipo_adm_valores_biblio;
      chartTres.update();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}

async function getSchoolsLibrarianInfo(cidadeValor) {
  const cd1 = {
    id_cidade: cidadeValor,
    qt_bibliotecarios: { $gt: 0 } // Usando a sintaxe do MongoDB para "maior que" (>)
  };

  const cd2 = {
    id_cidade: cidadeValor,
    qt_bibliotecarios: { $lt: 1 } // Usando a sintaxe do MongoDB para "maior que" (>)
  };

  const condicao1JSON = JSON.stringify(cd1);
  const condicao2JSON = JSON.stringify(cd2);
  console.log("CONDIÇÃO: " + condicao1JSON + condicao2JSON);

  const params = new URLSearchParams({
    count: 1,
    where: condicao1JSON,
  });
  try {
    const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
      method: "GET",
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      const escolasComBibliotecario = data.count;
      schoolWithLibrarian[0] = escolasComBibliotecario;

      const paramsTotalEscolas = new URLSearchParams({
        count: 1,
        where: condicao2JSON,
      });

      const responseTotalEscolas = await fetch(`${censoPeClassUrl}?${paramsTotalEscolas.toString()}`, {
        method: "GET",
        headers: headers,
      });

      if (responseTotalEscolas.ok) {
        const dataTotalEscolas = await responseTotalEscolas.json();
        const totalEscolasNaCidade = dataTotalEscolas.count;
        schoolWithLibrarian[1] = totalEscolasNaCidade;

        chartQuatro.data.datasets[0].data = schoolWithLibrarian;
        chartQuatro.update();
      } else {
        throw new Error("Network response was not ok");
      }
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error)
  }
}

/// onclick func
function change(buttonId) {
  // Removendo a classe ativa de todos os botões
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.classList.remove('btn-active');
  });

  // Adicionando a classe ativa ao botão clicado
  var activeButton = document.getElementById(buttonId);
  activeButton.classList.add('btn-active');

  // Atualização do mapa e das informações conforme o botão clicado
  var img = document.getElementById('map');
  img.src = cidades[buttonId].src;
  img.alt = cidades[buttonId].alt;
  img.title = cidades[buttonId].title;

  if (buttonId === 'general') {
    totalScholls();
    admCountGeneral();
    getSchoolsAndLibrariesQtTotal();
    admCountLibrariesGeral();
    getSchoolsLibrarianInfoTotal();
  } else {
    getCity(cidades[buttonId].id_cidade);
    admCount(cidades[buttonId].id_cidade);
    getSchoolsAndLibrariesQt(cidades[buttonId].id_cidade);
    admCountLibraries(cidades[buttonId].id_cidade);
    getSchoolsLibrarianInfo(cidades[buttonId].id_cidade);
  }
}

//func open sidebar
document.getElementById('open_btn').addEventListener('click', function(){
  document.getElementById('sidebar').classList.toggle('open-sidebar');
})