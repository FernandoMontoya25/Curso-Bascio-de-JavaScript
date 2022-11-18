/*La estructura switch es otra manera de evaluar condicionales, la diferencia con if 
es que las condiciones deben ser iguales a un caso o algo especifico*/

var x = Number(prompt("Digite un numero: "));

switch(x){
  case 1:
    console.log("Soy un uno");
    break;
  case 2:
    console.log("Soy un dos");
    break;
  case 3:
    console.log("Soy un tres");
    break;
  default:
    console.log("No soy ni el 1 ni el 2 ni el 3");
}
