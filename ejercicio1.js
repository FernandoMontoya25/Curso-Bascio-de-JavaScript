

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

 
