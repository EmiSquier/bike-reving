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

/*base de datos*/

const BD = [
  {id: 1, marca: 'Kawasaki', modelo: 'er6-f', cilindrada: 650},
  {id: 2, marca: 'Kawasaki', modelo: 'er6-n', cilindrada: 650},
  {id: 3, marca: 'Kawasaki', modelo: 'Vulcan', cilindrada: 1600},
  {id: 4, marca: 'Honda', modelo: 'CBR', cilindrada: 250},
  {id: 5, marca: 'Honda', modelo: 'CB 500 x', cilindrada: 500},
  {id: 6, marca: 'KTM', modelo: 'rc 390', cilindrada: 390},
  {id: 7, marca: 'KTM', modelo: 'Duke 390', cilindrada: 390},
]



const [a, b, c, d, e, f, g, h] = BD;

console.log(g);

console.log(d);

console.log(b)