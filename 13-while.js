/* Para el ciclo while no conocemos la cantidad de veces que la estructura repetira 
una o varias instruccione. Aunque tambien se puede acoplar para que realice un determinado 
numero de repeticiones. */

// Primer ejemplo

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

// Linea 7: Se crea el array
// Linea 9-11: Se crea la funcion
// Linea 12: Mientras la cantidad de valores que contiene el array de estudiantes 
// sea mayor a 0 estara corriendo
// Linea 14: Se crea otro array para ir metiendo ahi los valores que le 
// estaremos sacando al array de estudiantes
// Linea 15: Se llama a la funcion 
// Linea 13: Se visualiza como el array de estudiantes se va quedando sin valores
