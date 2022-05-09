const VEHICULO = {
    tipo: "moto",
    marca: "KTM",
    modelo: "rs 390",
}

console.log(VEHICULO.modelo)
console.log(VEHICULO.marca)
console.log(VEHICULO.tipo)

function MOTO(tipo, cilindrada, potencia){
    this.tipo = tipo;
    this.cilindrada = cilindrada;
    this.potencia = potencia; 
}

const MOTO1 = new MOTO("enduro", 701, 75)
console.log(MOTO1)

const MOTO2 = new MOTO("turismo", 1200, 180)
console.log(MOTO2)

class auto{ 
    constructor(marca, modelo, potencia, cilindrada){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.cilindrada = cilindrada;
    }
    mostrar(){
        console.log("Su vehiculo es un "+this.marca +" "+ this.modelo + " con una potencia de "+ this.potencia+ " hp y una cilindrada de "+this.cilindrada + " lt")
    }
}

let marca = prompt("ingrese la marca de su vehiculo");
let modelo = prompt("ingrese su modelo");
let potencia = prompt("ingrese su potencia");
let cilindrada = prompt("ingrese su cilindrada");

const auto1 = new auto(marca, modelo, potencia, cilindrada)
console.log(auto1.marca)
auto1.mostrar()