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

let subtitulo = document.getElementById("subtitulo");
subtitulo.remove();

/*let motoMarca = document.getElementById("marca").value;
let motoModelo = document.getElementById("modelo").value;
let motoCilindrada = document.getElementById("cilindrada").value;*/

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

