/* Un objeto es una estructura de datos que permite almacenar valores mediante 
propiedad - valor a traves de la sintaxis de llaves ( {} ) y separados por comas. */

// Ejemplo de objeto
var miAuto = {
  marca: "Toyota", 
  modelo: "corola", 
  annio: "2020", 
  detallesDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`)
  };

// this: Hace referencia a su propiedad padre por ejemplo habla que quiere el valor 
// que tiene la variable modelo de su padre o el año
  
  
// Acceder a algo especifico
console.log(miAuto.marca)
// Como añadir propiedades a un objeto 
miAuto.color = "rojo"; // y ya con esto lo tiene agregado
// Como modificar propiedades de un objeto
miAuto.marca = "Ford"
// Como eliminar propiedades de un objeto
delete miAuto.marca
// Como convertir mi objeto en un array
Objet.values("nombreDeMiObjeto");

 
