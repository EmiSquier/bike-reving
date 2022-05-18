usuario = prompt("Ingrese su usuario (Usuario)");
password = prompt("Ingrese su contraseña (Contraseña)");

while (usuario != "Usuario"){
  alert("Ingrese de nuevo su Usuario")
  usuario = prompt("Ingrese su usuario");
}

while (password != "Contraseña"){
    alert("Ingrese de nuevo su contraseña")
    password = prompt("Ingrese su contraseña");
}


let vehiculo = prompt("Ingrese su tipo de vehiculo");

if (vehiculo === "moto"){

class moto{ 
  constructor(marca, modelo, potencia, cilindrada){
      this.marca = marca;
      this.modelo = modelo;
      this.potencia = potencia;
      this.cilindrada = cilindrada;
  }
  mostrar(){
      alert("Su moto es una "+this.marca +" "+ this.modelo + " con una potencia de "+ this.potencia+ " hp y una cilindrada de "+this.cilindrada + " cc")
  }
}

let marca = prompt("ingrese la marca de su vehiculo");
let modelo = prompt("ingrese su modelo");
let potencia = prompt("ingrese su potencia");
let cilindrada = prompt("ingrese su cilindrada");

const moto1 = new moto(marca, modelo, potencia, cilindrada);
console.log(moto1.marca);
moto1.mostrar()}
else{
  alert("Su vehículo aún no está registrado, pásese a las dos ruedas ;)");
}

//Base de datos de motocicletas

let marca = ['Chevrolet', 'Kawasaki', 'Yamaha', 'Suzuki'];
  console.log(marca);

//Chevrolet no hace motos por lo que debe ser eliminado del array.

let marcaEliminada = marca.shift()
  console.log(marca);

//tenemos una ktm al inicio, así que debemos agregarla

marca.unshift('Ktm');
  console.log(marca)

//necesitamos encontrar la posición de YAMAHA.

let pos = marca.indexOf('Yamaha');
  console.log(pos);
