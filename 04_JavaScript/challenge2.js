// let numeros = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",]

// console.log(numeros)
// console.log(numeros[4], numeros[8])
// arreglo.pop(numeros)
// console.log(numeros)



// //Se puede hacer también concatenando:
// console.log (numeros -[5] + " " + [9])

let arreglo = ["perrito", "tortuga", "hipopotamo"]

//Para sumar otro elemento a un arreglo, y o suma al final
arreglo.push("pajarito")

console.log(arreglo)

//Para borrar elemento a un arreglo,
arreglo.pop()
console.log(arreglo)

arreglo.push ("tortuga", "delfin", "víbora")
console.log(arreglo)

//Palabra reservada. Splice. 
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)

numeros.splice(0,1)
console.log(numeros)

//Para borarr numeros en particular: Despúes de splice "5" indica la posición. ¡Acuérdate que empieza desde 0. Y "1" indica cuántos elementos te borrará. Si pones "2" te borrará dos.
numeros.splice(5,1)
console.log(numeros)

numeros.splice(0,3)
console.log(numeros)


//Variables de tipo objeto. Para hacer bases de datos y API,, como un diccionario. A nombre, dirección, etc.. se les llama Keys
let objeto={
    nombre: "Carla", 
    dirección: "Xopa",
    música: "jazz",
    teléfono: "5554183917",
    libros:["Jane Eyre","Orgullo y Prejuicio"],
    películas:{
        terror: "Anabelle"
        }
}


//Si quiero ver un arreglo
console.log(objeto.libros[1])
console.log(objeto.peliculas.accion[0])