
//Crear una variable porque html es doctype y getElement es un elemento reservado. Utilizas las etiquetas porque aquí puedes gurdar información que html no puede. Por ejemplo, el nombre de las personas.
let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")
let boton = document.getElementById("boton")
let input = document.getElementById("input")
let mostrar = document.getElementById("mostrar")

//Cambira alguna etiqueta en tu JS, primero etiqueta inner va a pintar el valor. JS se leer de derecha a izq

// etiqueta.innerHTML = "Es un nuevo saludo"
// texto.innerHTML = "Es un nuevo texto"

//Que cambie la etiqueta se hace así
// const cambiar = () => {
//     titulo.innerHTML = "Es un nuevo título con una funcion"
//     subtitulo.innerHTML= "Es un nuevo texto creado con función"
//    }

//Value lo va a jalar como valor, de tu imput. Let es para que lo guarde en la memoria
const mostrarInput = () => {
    let texto = input.value
    mostrar.innerHTML = texto
}

boton.addEventListener("click" , mostrarInput)
//HAcer el boton un EVENTO
boton.addEventListener ("click" , cambiar)






