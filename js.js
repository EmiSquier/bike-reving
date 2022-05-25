let informacion = document.createElement("p");
informacion.innerHTML = "<h3>This app will alow you to log your brand and model bike for information, tecnical specs, and users opinions<h3>";
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