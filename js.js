const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '18b0f3c3ddmsh476e3145da49a75p17a59fjsn4e6650baf93d',
    'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
  }
};

const url = 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/' + document.getElementById("marca").value

const urlSpec = 'https://motorcycle-specs-database.p.rapidapi.com/article/' + document.getElementById('year').value + '/' + document.getElementById('marca').value + '/' + document.getElementById('modelo').value

let buton = document.getElementById("button")
buton.addEventListener('click', logMarca)

let butonModelo = document.getElementById("buttonModelo")
butonModelo.addEventListener('click', logModelo)

function logModelo() {

  const arrayModelos = fetch(url, options)
    .then(response => response.json())

  console.log(arrayModelos)
}

function logMarca() {
  const arrayMarcas = fetch('https://motorcycle-specs-database.p.rapidapi.com/make', options).then(response => response.json())
  console.log(arrayMarcas)
}

function logSpecs() {
  const arraySpecs = fetch(urlSpec, options)
    .then(response => response.json())
  console.log(arraySpecs)
}

let buttonSpecs = document.getElementById("buttonSpecs");
buttonSpecs.addEventListener('click', logTabla());
