//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')
//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
//boton
let boton = document.getElementById('boton')

//PAra hacer aparecer y desaparecer un elemento... en este caso la card
let card=document.getElementById("card")


const accion = () => {
//Aquí estás creando una memoria y lo que dice = es .value, indica que se convierta en un valor esa etiqueta y no sólo que se quede en el limbo.
    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value
//Para hacer un condicional en la respuesta. toLowerCase o toUpperCase son funciones y sirve para que la compu acepte mayúsculas o minúsculas. OJO: si utilizas toLower.. abajo pones la condición en minúsculas. Si usas toUper.. utilizas mayúsculas. Y hay que evaluarlo y ponerlo en console.log
    let textoPizzaMm = textoPizza.toLowerCase()
        console.log

    if (textoPizzaMm === "si" || textoPizzaMm === "sí") {
        //Utilizamos .innerHTML para que el usuario lo vea en pantalla. console.log solo nosotros lo vemos.
        mostrarPizza.innerHTML = "YUPI :)"
    } else if (textoPizzaMm === "no") {
        mostrarPizza.innerHTML = "OWWW :("
    } else {
        mostrarPizza.innerHTML = "Ingresa nuevamente tu respuesta"
    }

//aparecer la card
card.classList.remove("desaparecer")

//.innerHTML es lo que va a sobre escribir o cambiar el valor. 
    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono
}

   

boton.addEventListener('click', accion)

//Let es un elemento nuevo que vas a incertar.
//