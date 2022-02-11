//noprotect
//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1// 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
var recargo_salario = 0.05 // 5%
var recargo_propiedades = 0.35 // 35%
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
// Salida del ciclo
var continuar = ""
while(continuar!="Salir"){

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var propiedades = prompt("¿Ingrese valor de sus propiedades? Ingrese Solamente Cantidades")
var salario = prompt("¿Ingrese su salario mensual? Ingrese solo cantidades")
var casado = prompt('¿Está casado actualmente?','SI/NO')
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("¿Tiene hijos o hijas?","SI/NO")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if ("SI"== hijos.toUpperCase()){
  cantidad_hijos = prompt ("¿Cuantos hijos tiene? ingrese solamente numeros")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos_numero
if ("SI"==hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
var salario_numero
var propiedades_numero
if (propiedades > 0){
  propiedades_numero = parseInt(propiedades)
} 
if (salario > 0){
  salario_numero = parseInt(salario)
}
//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  } else if (edad_numero >=25 && edad_numero<50){
  recargo = precio_base * edad_25
  } else if (edad_numero >50){
  recargo = precio_base * edad_50
 } 
 alert("El recargo por su edad es de "+ recargo)
recargo_total = recargo_total + recargo
//aqui puede colocar un else if() con el siguiente rango
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  recargo = precio_base * casado_18
} else if(edad_conyuge_numero >=25 && edad_conyuge_numero < 50){
  recargo = precio_base * casado_25
}else if (edad_conyuge_numero>=50){
recargo = precio.precio_base * casado_50
}else {
  recargo = 0
}
alert("El recargo por la edad de su conyugue es de " + recargo)
/** 
 * 2. Recargo por la edad del conyuge
 */
 recargo_total = recargo_total + recargo
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if (cantidad_hijos_numero > 0){
  recargo = ((precio_base * hijos_recargo)*cantidad_hijos_numero)
  alert("El recargo por hijos ingresados es de " + recargo)
}else{
  recargo = 0
}
recargo_total = recargo + recargo_total
/**
 * 4. Recargo por porcentaje de salario 
 * */
if (salario_numero > 0){
  recargo = salario_numero * recargo_salario
  alert("El recargo por salario ingresado es de "+ recargo)
} else {
  recargo = 0
}
recargo_total = recargo + recargo_total
/**
 *  5. Recargo por propiedades
 * */
if (propiedades_numero > 0){
  recargo = propiedades_numero * recargo_propiedades
  alert("El recargo por propiedades es de "+ recargo)
}else {
  recargo = 0
}
recargo_total = recargo + recargo_total
precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
continuar = prompt("¿Desea Continuar o Salir? Solo puede elegir una de estas dos opciones con inicial mayuscula")
}
