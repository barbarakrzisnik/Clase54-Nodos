///// Clase 54 - Nodos

// Metodos de JS Para seleccionar elementos del dom
// querySelector
// querySelectorAll
// getElementById
// getElementByClassName
// getElementsByTagName

// En el html todos los elementos tienen un solo ascendiente

////// JS nos muestra al padre de un elemento: 

const tarjeta = document.querySelector(".card")
console.log(tarjeta.parentElement)

// Puedo llamar con esta forma, o llamando a la clase desde el querySelector
// Nos permite hacer cambios 

/////// JS nos muestra los hijos de un elemento:

console.log(tarjeta.children)
// Nos trae un array con todos los hijos
// Aca no puedo hacer cambios, porque es un array

//PERO, si puedo llamar a cada elemento, y ahi si puedo cambiar

tarjeta.children[0].style.backgroundColor = "red"

// Por lo tanto, lo puedo recorrer con un for! y ponerle rojo a cada uno

for (let i = 0; i < tarjeta.children.length; i++) {
    tarjeta.children[i].style.backgroundColor = "red"
}

//Esto me sirve para ahorrarme variables entre otras cosas

// En ese mismo for, puedo poner un parent element para que modifique el padre de cada elemento que recorre el for


////// Event bubbling

//Cuando mis elementos estan encimados, JS interpreta que le hago por ejemplo, click a los tres al mismo tiempo

//Ej  Seccion / Div / Imagen

//Esto es por espacio que ocupan, espacio real

// Pero hay casos que no quiero que algun evento no se propague:

div.onclick = (e) => {
    e.stopPropagation()
}

//La e va siempre como parametro
//Cuando pongo un stop propagation a partir de ese elemento corta la propagacion

//Ejemplo en el fav de la tarjeta de ML, no quiero propagar y que ese me lleve a comprar. Ese solo me hace poner fav

// una funcion del dom necesita el E, osea el evento del dom
// El dom siempre pasa el mismo parametro para la funcion

// CRUD Elements  // CREATE UPDATE DELETE // ALTA BAJA MODIFICACION ABM

// Cambiar, agregar o quitar elementos en el dom
// Instintivamente pensamos en usar innerHTML pero si tengo cosas asociadas, puede traer problemas
//como se reemplaza, las variables declaradas ya no sirven mas
//es raro, es medio un misterio 

//no hay que usar innerHTML mucho, porque cosume muchos recursos, y complica cuando esta asociado el elemento a otra funcion

//En tarjetas hiper complejas, el innerHTML la hace mas lenta


//Como creamos elementos del dom?
//Create update delete

//Metodo que recibe como parametro la etiqueta que quiero crear
const img = document.createElement("img")

//Agregar hijo
tarjeta.appendChild(img)

//Creo el elemento y lo agrego como hijo a un elemento del dom
//A este elemento le puedo agregar atributos, clases, etc

//Este sistema es mas rapido mas eficiente

//Para eliminar usamos:
lista.removeChild(card)
//Sigue existiendo pero inutilizado, porque no esta mas en el HTML
//Como es siempre la misma imagen, no se borran los atributos ni clases. No se resetea


//No tiro un elemento en cualquier lado, para eliminarlo o crearlo, necesito ir al padre del elemento y hacerlo como hijo

//Variable de estado. Ejemplo de hacer aparecer y desaparecer una foto

const tarjeta = document.querySelector(".card")
const boton = document.querySelector(".card button")
const botonBorrar = document.querySelector("#borrar")
let seEstaMostrandoLaImagen = false

boton.onclick = () => {
  if (seEstaMostrandoLaImagen) {
    const img = document.querySelector("img")
    tarjeta.removeChild(img)
    seEstaMostrandoLaImagen = false
  }
  else {
    const img = document.createElement("img")
    img.src = "http://www.placekitten.com/200"
    img.classList.add("rojo")
  
    img.onclick = () => {
      alert("click en esta imagen")
    }
    tarjeta.appendChild(img)
    seEstaMostrandoLaImagen = true
  }
}
