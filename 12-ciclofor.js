

/* Los ciclos es una manera rapida y sencilla de poder hacer que una tarea pueda 
repetirse sin que tu lo tengas que hacer de forma manual

Estructura de un ciclo for
Inicio: Inicializamos una variable con el valor de 0, generalmente se utiliza i 
como variable para el bucle, pero no es obligatorio. En este caso usaremos 

var num = 1

Condicion: La condicion sera mientras sea menor o igual que 10 (num <= 10)
Pasos: Debemos aumentar la variable en una unidad, por lo tanto podemos utilizar 
num = num + 1, num += 1 o num++. Este ultimo unicamente cuando la variable aumente una 
unidad.
*/

// Primer ejemplo
/* Este ejemplo lo que va a realizar es recorrer todo nuestro array y mostrara cada 
uno de los nombres que tenga dentro*/

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiante(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i])
}

// Segundo ejemplo
var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
  consola.log(`Hola, ${estudiante}`);
}
for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}








.
