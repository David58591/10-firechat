// Uso de Let y Const
/* var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
  nombre: nombre,
  edad: edad
}; */

//Uso de Let y Const


let nombre ="Ricardio  Tapia";
let edad =23;
const PERSONAJE = {
    nombre : nombre,
    edad : edad
}
console.log("El personaje se llama " + PERSONAJE.nombre + " y tiene la edad de " +PERSONAJE.edad );


// Cree una interfaz que sirva para validar el siguiente objeto

interface Batman{
    nombre:string,
    artesMarciales:string[]
}

var batman:Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
console.log(batman);

// Convertir esta funcion a una funcion de flecha

/* function resultadoDoble( a, b ){
  return (a + b) * 2
} */

let funcionFlecha = (a:number, b:number) => (a+b)*2;
console.log("El doble de la suma de los dos numeros introducidos "+"es " + funcionFlecha(2,5));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/* function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
 */

 function getAvenger ( nombre:string, poder?:string, arma = "arco"){
    var mensaje;
    if( poder ){
       mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }else{
       mensaje = nombre + " tiene un " + arma
    }

    return mensaje;
 }

 console.log(getAvenger("David"));
 console.log(getAvenger("David","Supersayan"));
 console.log(getAvenger("David","Supersayan","Escopeta"));
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
    base:number;
    altura:number;

    

   calcularArea(base:number,altura:number) {
       let resultado:number = base * altura;

       return resultado;
   }

}
let rectangulo =  new Rectangulo();
console.log("El área del rectangulo es " + rectangulo.calcularArea(2,5));