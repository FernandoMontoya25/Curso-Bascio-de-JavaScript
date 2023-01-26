// Clases
// Constructor es como una funcion

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
    precioProducto() {
        return `El precio de ${this.nombre} es de: $${this.precio} pesos`;
    }
}
const producto2 = new Producto('Monitor Curvo de 40"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto2.precioProducto());
