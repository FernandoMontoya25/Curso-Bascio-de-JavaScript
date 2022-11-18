/******************Primer ejericico************************************************/

// Recrear el juego de piedra, papel y tigera conforme lo que hemos aprendido en el curso
// Este ejercicio todavia no le pide un dato al usuario eso es un poco mas adelante

/*var piedra = 1;
var papel = 2;
var tigera = 3;
*/

var piedraPapelTigera = function(usuario, maquina){
  if(usuario == 1 && maquina == 2){
    console.log("Perdiste")
  } else if(usuario == 2 && maquina == 3){
    console.log("perdiste")
  } else if(usuario ===3 && maquina == 1){
    console.log("perdiste")
  } else if(usuario === maquina){
    console.log("Quedaron empates")
  } else{
    console.log("Felicidades ganaste")
  }
}

var usuario = 2;
var maquina = 2;

piedraPapelTigera(usuario, maquina);

 
/**********************Segundo ejercicio**********************************/

let usuario = Number(prompt("Con que va a jugar el usuario:  1. Piedra 2. Papel 3. Tigera: "));
let enemigo = Number(prompt("Con que va a jugar el enemigo:  1. Piedra 2. Papel 3. Tigera: "));

switch(usuario){
  case 1:
    console.log("El usuario eligio piedra");
    break;
  case 2:
    console.log("El usuario eligio papel!");
    break;
	case 3:
		console.log("El usuario eligio Tigeras")
		break;
	default:
		console.log("Debes elegir uno")
		break
};
switch(enemigo){
  case 1:
    console.log("El enemigo eligio piedra");
    break;
  case 2:
    console.log("El enemigo eligio papel!");
    break;
	case 3:
		console.log("El enemigo eligio Tigeras")
		break;
	default:
		console.log("Debes elegir uno")
		break
};


var piedraPapelTigera = function(usuario, enemigo){
  if(usuario == 1 && enemigo == 2){
    console.log("Gano el enemigo")
  } else if(usuario == 2 && enemigo == 3){
    console.log("Gano el enemigo")
  } else if(usuario ===3 && enemigo == 1){
    console.log("Gano el enemigo")
  } else if(usuario === enemigo){
    console.log("Quedaron empates")
  } else{
    console.log("Felicidades ganaste")
  }
}

piedraPapelTigera(usuario, enemigo);
