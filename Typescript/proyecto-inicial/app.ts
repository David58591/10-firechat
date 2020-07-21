// Un archivo simple de TypeScript

// function saludo(nombre:string) {
    
//     console.log("Hola " + nombre);
// }

// var nombrejson = {
//     nombre : "Juan"

// }

// saludo(nombrejson.nombre);

// let nombre:string = "Juan";
// let apellido:string  ="Perez";
// let edad:number = 23;

// let texto = "Hola " + nombre + " " +apellido + " " + edad;

// console.log(texto);

// function activar (quien:string,momento?:string){
//     let mensaje:string;
//     if(momento){
//         mensaje = ` ${quien} me activó la batiseñal en la ${momento}`;
//     }else{
//         mensaje = ` ${quien} me activó la batiseñal`;
//     }
   

//     console.log(mensaje);
// }

// activar("Juan");
// activar("Juan","Tarde")

// let mifuncion = function( a){
//     return a;
// }

// let mifuncionF = a => a;

// let mifuncion2 = function( a:number , b:number){
//     return a+b;
// }
// let mifuncionF2 = (a:number,b:number)=> a + b;

// let mifuncion3 = function( a:string , b:number){
//     a.toUpperCase();
//     return a;
// }
// let mifuncionF3 = (a:string,b:number)=> a.toUpperCase();
// console.log(mifuncion("Normal"))
// console.log(mifuncionF("Flecha"))
// console.log(mifuncion2(5,2))
// console.log(mifuncionF2(7,9))
// console.log(mifuncion3("Paco",2))
// console.log(mifuncionF3("Juan",2))

// let heroes:string [] = ["Thor","Superman","Aironman"];

// let [,man, tony] = heroes;
// console.log(man,tony);


// interface Xmen {
//     nombre:string,
//     poder:string
// }

// function enviarMision(nombre:Xmen){
//     console.log ("Enviando a " +nombre.nombre);
// }

// function enviarCuartel(nombre:Xmen){
//     console.log ("De vuelta al cuartel :  " +nombre.nombre);
// }
// let wolverine:Xmen  = {
//     nombre : "Juanas",
//     poder : "Regeneración"
// };

// enviarMision(wolverine);
// enviarCuartel(wolverine);