let nombre1 = document.getElementById("nombre");
nombre1.onchange= () => {
  let saludo1 = document.createElement("h3");
  saludo1.innerHTML = nombre1.value + " welcome to this, your motorbike site.";
  document.body.append(saludo1);
  saludo1.setAttribute("id", "saludo")
}


let informacion = document.createElement("p");
informacion.innerHTML = "<h3>This app will allow you to log your brand and model bike for information, tecnical specs, and users opinions<h3>";
document.body.append(informacion);
informacion.setAttribute("id", "subtitulo")

let subtitulo = document.getElementById("subtitulo");
subtitulo.remove();


function mostrarMoto (){
  let motoMarca = document.getElementById("marca").value;
  let motoModelo = document.getElementById("modelo").value;
  let motoCilindrada = document.getElementById("cilindrada").value;
  
  let crearMoto = document.createElement("p");
  crearMoto.innerHTML = "Su moto es una "+motoMarca+" "+motoModelo+" de "+motoCilindrada+" cc";
  document.body.append(crearMoto);
  crearMoto.setAttribute("id", "crearMoto")
}

function borrarMoto(){
  let borrarMoto = document.getElementById("crearMoto");
  borrarMoto.remove()
}

let botonCrear = document.getElementById("button");
  botonCrear.addEventListener("click", mostrarMoto);

let botonBorrar = document.getElementById("buttonDelete");
  botonBorrar.onclick = () => {borrarMoto()};

/*base de datos local marcas*/

localStorage.setItem('1', 'Benelli');
localStorage.setItem('2', 'CfMoto');
localStorage.setItem('3', 'Harley Davidson');
localStorage.setItem('4', 'Kawasaki');
localStorage.setItem('5', 'KTM');
localStorage.setItem('6', 'Suzuki');

/*rangos de cilindradas comunes*/

localStorage.setItem('chica', 'menos de 250cc');
localStorage.setItem('mediana', 'entre 250cc y 600cc');
localStorage.setItem('alta', 'entre 600cc y 1800 cc');

/*obteniendo una marca y cilindrada en particular*/

let marcaStorage = localStorage.getItem('4');
let cilindradaStorage = localStorage.getItem('alta');

let botonStorage = document.getElementById("buttonStorage");
  botonCrear.addEventListener("click", mostrarStorage());
  
function mostrarStorage(){
  let mostrarStorage = document.createElement("h3");
  mostrarStorage.innerHTML = marcaStorage +" "+cilindradaStorage;
  document.body.append(mostrarStorage);
  mostrarStorage.setAttribute("id", "storage");
}

