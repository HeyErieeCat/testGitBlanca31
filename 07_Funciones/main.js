//Dos formas de declarar funciones en JS
//Forma 1 antigua: funcion (){}
//Ojo: las funciones no funcionan como variables. Por lo que se deben llamar con su nombre seguido de () -->Si no pones hasta abajo suma(), no va a aparecer nada.
// //a y b son parámetros

// function suma (){
//     console.log( 5 + 5 );
// }
// suma()

//Así como alert y prompt que llaman, en las funciones también se deben llamar.

// function suma (a,b){
//     console.log( a + b );
// }
// suma(5,4)
// suma(8,3)
// suma(3,2)

//FUNCION RESTA
// //Palabra reservada Return, regresa el valor de las variables.
// function resta (a,b){
//     return a - b
// }

// console.log (resta(10-4))
// console.log(resta(resta(50-20),4))

// resta(10,4)

// //Challenge: funcion que me diga el área de un cuadrado
// function multiplic(a,b) {
//     return a * b
// }
// console.log(multiplic (3,3))

// console.log(a,b)


//FORMA NUEVA DE FUNCTION - arrow function (Es más rápido que function)
//Las funciones siempre van a ser constantes (De ahí const), pero sus parámetros pueden cambiar
//Lo que indica que es una funcion es => esta flechita

// const areaC = (a) => {
//     return a*a
// }
// //Ahora la llamamos:
// console.log(areaC(5))

//.................
// let a = prompt ("Ingresa tu número")

// const areaC = () =>{
    
//         return a*a
// }

// console.log(areaC())

// //Que el usuario los valores de un triángulo y que te de la respuesta
// let a = prompt ("Ingresa el tamaño de la base de un triángulo")
// let b = prompt ("Ingresa el tamaño de la altura de un triángulo")

// const areaT = () =>{
    
//         return a*b/2
// }

// console.log(areaT())
// alert (areaT())

// let p1 = prompt ("Ingresa el tamaño de la base de un triángulo")
// let p2 = prompt ("Ingresa el tamaño de la altura de un triángulo")

//     console.log((p1 * p2) / 2);


//EJERCICIO INDEPENDIENTE
// Ahorita tengo 25 años. Si cada fin de semana ahorro &50 ¿Cuánto voy a tener cuando tenga 38 años?
// let edadActual = prompt ("¿Cuántos años tienes ahorita?")
// let edadFutura = prompt ("Escribe tu edad futura")
// let ahorro = prompt ("¿Cuánto te gustaría ahorrar por semana?")

// const AñosDif = () =>{
//         return (edadFutura - edadActual)*52*ahorro
//     }
//     console.log (AñosDif ())

//Funcion que sume mis parámetros (lo que va a dentro de los paréntesis) a y b, reste es c y d y lo multiplique por  e.
// let a = 5
// let b = 4
// let c = 3
// let d = 2
// let e = 2

// const resultado = () =>{
//     return (a + b -c -d) *e
// }

// console.log (resultado())

//Con prompt
// let a = prompt ("Escribe valor de a")
// let b = prompt ("Escribe valor de b")
// let c = prompt ("Escribe valor de c")
// let d = prompt ("Escribe valor de d")
// let e = prompt ("Escribe valor de e")

// const resultado = () =>{
//     return (a + b -c -d) *e
// }

// console.log (resultado())

// // //Ingresa la contraseña correcta para entrar al sitio. Es gatitos13
// let contraseña = prompt ("¿Cuál es la contraseña?");

// const contraseña = (){
// }
// if ( contraseña === "gatitos13" ){
//     console.log ("Contraseña correcta");
// }else{
//     console.log ("Contraseña incorrecta");
// }

// console.log(contraseña())

//Con funciones:
// let pregunta = prompt ("Escribe la contraseña");
// let correcto = gatitos13

// const contraseña = (){
//     return (gatitos13)
// }

// console.log (pregunta)


//SOLUCION: Instrucciones crear una funcion. El promt ¿va dentro o afuera?. Primero considerar los parámetros y despúes hacer el prompt. Creas dos constantes, la de password la creas para que no se pierda. = va ser igual,,, == comparar un valor ("10" == 10 el primero es un string y el segundo es un número pero si le pones doble igual, va a decir,, va pues, te lo tomo como igual),, === compara tipos de datos (pero si usas los tres iguales, "10" y 10 no va a ser lo imsmo porque el primero es string y el segundo es número.) Así que debemos utilizar las tres ===


// let usuario = prompt ("¿Cuál es la contraseña")
// const password = "gatitos13"

// const login =(a, b) => {
//     if ( a  === b ) {
//     console.log("Bienvenido ")
//     } else {
//     console.log("Contraseña incorrecta")
//     }
// }

//No importa que aquí abajo ya no usemos a y b, porque la compu por defecto va a tomar esos valores y en ese orden.
login (usuario, password)

// login (user2, password2)

//Otra forma
const login = () => {
    let user = prompt ("¿Cuál es la contraseña")
    const password = "gatitos13"
    if ( user  === password ) {
        console.log("Bienvenido ")
    } else {
        console.log("Contraseña incorrecta")
    }
    }

login ()