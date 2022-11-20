

/*Existen métodos de arrays para recorrerlos, y devolver un valor o un array con 
nuevos resultados. Entre estos están dos muy importantes: map y filter. */

// Primero creamos nuestro array
var articulos = [
  { nombre: "Bici", costo: 3000 }, 
  { nombre: "Tv", costo: 2500 }, 
  { nombre: "Libro", costo: 320 }, 
  { nombre: "Celular", costo: 10000 }, 
  { nombre: "Laptop", costo: 20000 }, 
  { nombre: "Teclado", costo: 500 }, 
  { nombre: "Audifonos", costo: 1700 }
];
/**************************Filter*********************************/
/* Filter: Como lo dice el nombre nos ayuda a filtrar. Va a validar si algo es verdad o falso. 
Se crea una nueva variable llamada articulosFiltrados donde se estaran almacenando los datos 
filtrados en este ejercicio nos va a regresar todos los articulos que cuesten 500 o menos tu 
la puedes transformar a como te valla conviniendo*/

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});
articulosFiltrados;

/**************************map*********************************/
/* map: Va a ayudar a mapear ciertos articulos, va a generar un nuevo array sin necesidad de 
modificar el array principal.
Este metodo lo que nos va a hacer es mapearnos todo nuestro array y nos va a regresar 
los nombres de todos nuestros arituculos unicamente*/

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});
nombreArticulos;











