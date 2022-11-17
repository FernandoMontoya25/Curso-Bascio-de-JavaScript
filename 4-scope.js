// Scope es igual al alcance que tiene nuestra variable
// Tenemos dos tipos de Scope, Scope Global y Scope Local.

//Ejemplo de Scope Global
var nombre = "JavaScript"
function saludar(){
    console.log("Hola " + nombre)
}
saludar() // Hola JavaScript


// Ejemplo de Scope loca
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo() // "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
