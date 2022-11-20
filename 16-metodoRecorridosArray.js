

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

/**************************find*********************************/
/* El método find consiste en encontrar el primer elemento de un array que cumpla con 
la condición especificada en la función (callback). Si ningún elemento cumpla con la 
condición, retornará undefined.
Sin modificar el array creando uno nuevo */

var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Tv"
});
encuentraArticulo;

/**************************forEach*********************************/
/* El método forEach de los arrays consiste en ejecutar una función (callback) para 
cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. 
Este método no retorna ningún valor.
Este ejemplo nos va a buscar una caracteristica especifica de cada uno de nuestro articulos 
en este ejemplo le pedimos que nos busque el nombre de todo */

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

/**************************some*********************************/
/* El método somees inmutable y consiste en retornar un valor lógico verdadero si existe 
al menos un elemento que cumpla la condición establecida en la función (callback). 
Unicamente va a retornar si es verdadero o falso*/

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});
articuloBaratos;


// Pagina por si quieres mas metodos para poder aplicar en JavaScript
// https://es.javascript.info/array-methods



 
