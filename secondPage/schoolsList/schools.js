const cidades = {
  'abreu': {
    id_cidade : 2600054,
  },
  'cabo': {
    id_cidade : 2602902,
  },
  'camaragibe': {
    id_cidade : 2603454,
  },
  'goiana': {
    id_cidade : 2606200,
  },
  'igarassu': {
    id_cidade : 2606804,
  },
  'itamaraca': {
    id_cidade : 2607604,
  },
  'ipojuca': {
    id_cidade : 2607208,
  },
  'itapissuma': {
    id_cidade: 2607752,
    },
 'jaboatao': {
    id_cidade : 2607901,
    },
 'moreno': {
    id_cidade : 2609402,
    },
 'olinda': {
    id_cidade : 2609600,
    },
 'paulista': {
    id_cidade: 2610707,
    },
 'rec': {
    id_cidade : 2611606,
    },
 'slourenco': {
    id_cidade: 2613701,
  },
}

document.getElementById('open_btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
  })

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
//console.log(urlParams.get('id'))

  const schools = document.getElementById('schools');
  const censoPeClassUrl = "https://parseapi.back4app.com/classes/BaseCensoRmr";
  const headers = {
    "X-Parse-Application-Id": "vI8Ew2vCgezbMDismPbmWizkpiX72IISZ1rmCP9G",
    "X-Parse-REST-API-Key": "S0OPV4TGEgSec4ua8gbSFuGCb9Xm5fDcqkxgvwAe",
    "Content-Type": "application/json",
  };

  const getSchools = async () => {
    const resultsPerPage = 2000;

    let allResults = [];
    let skip = 0;
  
    try {
      while (true) {
        const params = new URLSearchParams({
          limit: resultsPerPage,
          skip: skip,
          where: JSON.stringify({
            id_cidade: cidades[urlParams.get('id')].id_cidade,
          }),
        });
  
        const response = await fetch(`${censoPeClassUrl}?${params.toString()}`, {
          method: "GET",
          headers: headers,
        });
  
        if (response.ok) {
          const data = await response.json();
          const results = data.results;
  
          if (results.length === 0) {
            break;
          }
  
          allResults = allResults.concat(results);
          skip += resultsPerPage;
        } else {
          throw new Error("Network response was not ok");
        }
      }
  
      return allResults;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const schollsNames = async () => {
    try {
      const escolasComBiblioteca = await getSchools();
      schools.innerHTML = "";
      
      let div = document.createElement('div');
  
      escolasComBiblioteca.forEach(escola => {
        let paragraph = document.createElement('li'); 
        let line = document.createElement('br');
        paragraph.textContent = escola.escola;
        div.appendChild(paragraph);
        div.appendChild(line);
      });
      schools.appendChild(div);
    } catch (error) {
      console.error(error);
    }
  };
  
  schollsNames();
  