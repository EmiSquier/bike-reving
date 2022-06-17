function bienvenida(){
let nombre = document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;

edad >= 18 ? swal(nombre, "Bienvenido!") : swal(nombre, "Me gusta tu entusiasmo!!!")
}

let botonEnviar = document.getElementById("buttonEnviar");
  botonEnviar.addEventListener("click", bienvenida)

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

/*consumo de api*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '18b0f3c3ddmsh476e3145da49a75p17a59fjsn4e6650baf93d',
		'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
	}
};

fetch('https://motorcycle-specs-database.p.rapidapi.com/article/2012/Kawasaki/Ninja%20650', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));