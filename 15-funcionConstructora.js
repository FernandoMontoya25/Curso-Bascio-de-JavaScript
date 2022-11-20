

// Funcion constructora

function auto(marca, modelo, annio){  // Creas una función con los parametros que va a recibir,
  this.marca = marca;                 // Utilizamos el "this" para asignar valores a las propiedades del objeto
  this.modelo = modelo;
  this.annio = annio;
}

// Generar una nueva instancia de nuestra funcion constructora es 
// generar un objeto que deriba de otro objeto
var autoNuevo new auto("Tesla", "Modelo 3", 2020);
var autoNuevo2 new auto("Tesla", "Modelo x", 2018);
var autoNuevo3 new auto("Toyota", "Corola", 2020);

// Los mandamos llamar
autoNuevo // Object { marca: "Tesla", modelo: "Model 3", annio: 2020 }
autoNuevo2 // Object { marca: "Tesla", modelo: "Model x", annio: 2018 }
autoNuevo3 // Object { marca: "Toyota", modelo: "Corola", annio: 2020 }


/* ------------------------------------------------------------ Ejercicio generar ---------------------------------------------------- */

// Generar un problema que te pida meter cierta cantidad de autos a un array

// Se genera la funcion con los parametros que vamos a querer
function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

let x = 1;
let cantidad = Number(prompt("¿Cuantos autos vas a querer generar?"));

var autos = [];
while(x <= cantidad){
  let marca = prompt("¿Que marca es el nuevo carro?: ");
  let modelo = prompt("¿Que modelo es: ");
  let annio = Number(prompt("¿De que año es?: "))
  autos.push(new auto(marca, modelo, annio)); // Se manda llamar la funcion constructora para llenar los espacios de nuestros nuevos autos
  x++
};
for(let i = 0; i <= cantidad; i++){
  console.log(autos[i]);
}





 
