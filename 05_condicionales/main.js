// // //if(*condicion*){
// //     bloque de codigo en caso de que se cumpla la condición
// // }else{

// //if es si
// //else es de lo contrario

// if(condicion){
//     console.log("":D")
   
// }else{
//     console.log(":C")
// }

// //<> iguales =, parecidos ==, idénticos ===

// // if("computadora" === "Computadora"){
// //     console.log("Son identicos")
// // }else{
// //     console.log("Algo anda mal")
// }

// if("10" === 10){
//     console.log("Son identicos")
// }else{
//     console.log("Algo anda mal :C")
// // }

// //CHALLENGE: preguntar su edad
// //Si es mayor, entra a bar, Si no lo es, llama a tus papás

// let edad = prompt ("¿Cuántos años tienes?");

// if (edad >= 18){
//     console.log ("Adelante");
// }else{
//     console.log ("No puedes pasar");
// }


// //MAS DE DOS CONDICIONES - lunes 2 julio
// // //Para meter dos condiciones están otros operadores and &&, - or ||
// let edad = prompt("Ingresa tu edad");
// if(edad < 16) {
//     console.log("No puedes sacar tu licencia");
// }else if(edad >= 16 || edad === 17){
//     console.log("Puedes sacar tu permiso");
// // }else{
// //     console.log("Puedes conducir");
// }

// //Challenge
// //Si mi numero es par : Escribir en la consola *Numero* es par 
// //Si mi numero es impar : Escribir en la consola *Numero* es impar

// let numero = prompt("Escribe un número");
// if(numero%2==0)
//     console.log(numero + " " + "El número es par");
// else
//     console.log(numero + " " + "El número es impar");


// //CHALLENGE - Piedra, Papel o Tijera
// //La probabilidad más común es empate.
// let player1 = prompt("Elige: Piedra, Papel o Tijera")
// let player2 = prompt("Elige: Piedra, Papel o Tijera")

// // if(player1 === player2){
// //     console.log("Es un empate");

// // }else if(player1 === "piedra" && player2 === "tijera"|| player1 === "tijera" && player2 === "papel"){

// //     console.log("Gana player 1")

// // }else if(player1 === "piedra" && player2 === "papel"|| player1 === "tijera" && player2 === "piedra"){

// //     console.log("Gana player 2")
// // }


//Otra forma de hacerlo
// let player1 = prompt ("Escoge piedra, papel o tijera");
// let player2 = prompt ("Escoge piedra, papel o tijera");

// if (player1 == player2){
//     console.log ("Empate");
// }else if (player1 == "piedra" && player2 == "tijera" || player1 == "papel" && player2 == "piedra" || player1 == "tijera" && player2 == "papel") {
//     console.log ("Player1 gana");
// }else{
//     console.log ("Player2 gana");
// }



//EJERCICIO INDEPENDIENTE
// let nombre = prompt ("¿Cómo te llamas?");
// let edad = prompt ("¿Cuántos años tienes?");
    

// if (edad >= 18){
//     console.log ("Bienvenido");
// }else if (nombre == "Carla"){
//     console.log ("Tienes paso VIP");
// }else{
//     console.log ("No puedes pasar");
// }


