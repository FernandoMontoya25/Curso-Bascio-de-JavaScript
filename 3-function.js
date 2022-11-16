/*La funciones son procedimientos, un conjunto de sentencias o pasos que realizaran una tarea o calculo con ciertos valores*/
// Tenemos dos tipos de funciones en JS, function Declaration y function Expression

// Function declaration Declarativas expresion

function miFuncion(){
  return 3;
}
miFuncion(); //mandamos llamar la funcion

//Function Expression (Tambien conocidas como funciones anonimas)

var miFuncion = function(a,b) {
  return a + b;
}
miFuncion();

/**************Ejemplos*****************************/

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}
var estudiante = "Fernando";
saludarEstudiante(estudiante); // Hola Fernando 

/**************Ejemplos*****************************/


function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 


 
