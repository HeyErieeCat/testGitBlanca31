// //Dos tipos FOR y WHILE

// // for(inicio ; final o limite; secuencia){
// //     bloque de codigo
// // }

// // let i = 0

// // for(i ; i <= 100; i = i + 1){
// //     console.log(i)
// // }

// // for(let e = 10; e <= 50; e = e + 5){
// //     console.log(e)
// // }



// //CHALLENGE
// //Empiece en 3, llegue a 500 y sea de 9 en 9
// // let i = 3

// // for(i ; i <= 500; i = i + 9){
// //     console.log(i)
// // }

// // //eMPIECE EN -100, LLEGUE A 0 Y SEA DE 1 EN 1
// // let i = -100

// // for(i ; i <= 0; i = i + 1){
// //     console.log(i)
// // }


// // //Empiece en 500, llegue a 2000 y sea de 100 en 100
// // let i = 500

// // for(i ; i <= 2000; i = i + 100){
// //     console.log(i)
// // }

// // for (i=1; i<=10; i++){
// //     console.log ("Oh yeah");
// // }


// //Ciclo del 0 al 100 y el usuario elige: el inicio, el final o la secuencia. Pero con parseInt sólo considera números enteros. O sea que si quieres que sea secuencia de decimales, no va a funcionar.
// // let usuario = prompt("¿Qué secuencia escojes?");

// // let i = 0

// // for(i ; i <= 100; i = i + usuario){
// //     usuario = parseInt(usuario);
// //     console.log(i)
// // }


// //Con el Number sí funcionan los decimales
// // let usuario = Number(prompt("¿Qué secuencia escojes?"))

// // let i = 0

// // for(i ; i <= 100; i = i + usuario){
// //     console.log(i)
// // }


// // //Mostrar en la consola del 1 al 100 y qué numeros son par o impares.
// // let i = 0

// // for(i ; i <= 100; i = i + 1){
// //     if(i%2===0)
// //     console.log(i + " " + "El número es par");
// // else
// //     console.log(i + " " + "El número es impar");
// // }

// // let i = 0
// // for(i; i<=10; i++){
// //     if (i%2===0){
// //     console.log (i + " " + "Es par");
// //     }else{
// //     console.log (i + " " + "Es impar");
// //     }
// // }

// // // //ciclo 1 al 100, si es divisible entre 3=Fizz, divisible entre 5=Buzz, y divisible entre 3 y 5=FizzBuzz. Pero si es 15 que no aparezcan 3 como 15=Fizz, 15=Buzz, y 15=FizzBuzz

// for (i=1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " " + "FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log(i + " " + "Fizz")
//     } else if (i % 5 === 0) {
//         console.log(i + " " + "Buzz")
//     } else {
//         console.log(i)
//     }
// }


// // // //PARA CONTAR CUANTOS INDICES TENEMOS DENTRO DEL ARREGLO
// // // let array = ["a", "b", "c", "d", "e", "f"]
// // // console.log(array.length)

// // // //PARA LLAMAR A LOS INDICES. El i++ significa i=i+1 (cuánto va a ir aumentando)
// // // for(let i = 0 ; i < array.length; i++){
// // //     console.log(array[i])
// // // // }

// // // let dias = ["lun", "ma", "mie", "jue", "vie"];
// // // for (i = 0 ; i <= dias.length -1 ; i++){
// // //     console.log(dias[i]);
// // // }


// MIERCOLES 3 JULIO
// Challenge: hacer tabla de multiplicar del 1 al 10. Debe aparecer 1 * 1=1 1*2=" y así. Este código es más largo!!!!
// for(i=1; i <= 1; i++){
//     for(e=1; e <= 10; e++){
//         console.log(i + " x " + e + " = " + i*e)
//     }
// }

//Opción 1: Repetir el valor de 1 en el resultado. El de Ponchi y más corto!!!!
// for(i=1; i<=10 ; i++){
//    console.log("1" + "x" + i + "=" + i)
//     }

//Opción 2: Que literal multiplique
// for(i=1; i<=10 ; i++){
//     console.log("1" + "x" + i + "=" + 1*i)
//      }

//TABLA DEL 2
//Opción 2: Que literal multiplique
// for(i=1; i<=10 ; i++){
//     console.log("2" + "x" + i + "=" + 2*i)
//      }


// // Challenge: Que el usuario escoga un número del 1 al 5 par hacer FACTORIAL
// let usuario = prompt("Escoge un núm del 1 al 5 para saber su factorial");
// for(usuario; i <= 5; i--){
//     console.log(i*usuario)
//     }

// // //Challenge: Sacar los factoriales del 1 al 5
//FACTORIAL
// //La i funciona como un contador, y por ello durante las operaciones matemáticas la i se iguala al número problema. O sea, empieza el factorial siempre de 1 (en el código para hacerlo más fácil, pero en mate es al revés) y hasta llegar al núemro que se le quiere sacar el factorial
// let num = 1
// let numero = prompt('Ingresa tu numero')


// for(let i = 1; i<=numero;i++){
//     console.log(num = num * i)
// }
// console.log(num)