//VENTANAS DE DIÁLOGO aparecen cuando abres la página y haces pregunta al usuario.
//OJO: no necesitan cerarrse con algún comando.

//1. Tipo STRING o TEXTO
let nombre = prompt("¿Cuál es tu nombre?");


//Las ALERT sirven como mensajes de bienvenida, o para alertar algo. Y se pueden combinar con las ventanas de diálogo concatenándolas así:
alert("Bienvenido" + " " + nombre);

//2. Tipo NUMÉRICO
let peso = prompt("¿Cuál es tu peso?");
alert("Tu peso es de" + " " + peso + " " + "kilogramos");

let peso_luna = (peso/9.81) * 1.6;
alert("Tu peso en la luna es de" +" "+ peso_luna+ " "+ "kilogramos");

//Convertir string de número a formato numérico
peso= parseInt(peso);