function Bienvenida(){
  alert("Iniciando el programa...")
}
Bienvenida();

function pronombre(sexo){

  let nombre = prompt("ingrese su nombre")
  if(sexo == "masculino"){
    alert("Bienvenido a la plataforma, "+ nombre);
  }else if(sexo == "femenino"){
    alert("Bienvenida a la plataforma, "+ nombre);
  }else{
    alert("Bienvenide a la plataforma, "+ nombre);
  }
}

pronombre(prompt("Ingrese su sexo (masculino, femenino, otro)"));

let resultado = function(numero){

  console.log(numero - 1);
  console.log(numero + 1);

}

resultado(parseInt(prompt("Ingrese un numeroide")));