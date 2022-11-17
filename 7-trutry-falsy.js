/*Los valores truthy y falsy son valores verdaderos y falsos cuando se realizan una coercion 
decualquier tipo a booleano respectivamente. Esto es importarte para manejar condicionales 
ya que una estructura condicional evalua sin un valor es verdadero o falso en un contexto 
booleano*/

// Que son los valores falsy
Boolean(0) // false
Boolean(" ") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// Operador de negacion (no la uses)
!!0 // false
!!" " // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// Valores truthy
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1,2,3]) // true
Boolean(function hola() {} ) // true
Boolean({ a:1, b:2, c:3 }) // true

/*Cabe recalcar que en JS todo valor que no sea falsy es truthy incluyendo las 
estructuras vacias de array y objetos*/

Boolean([]) //true
Boolean({}) //true



 
