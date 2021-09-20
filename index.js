// Ejercicio 1 : Creación de nodo.

// Crear un nodo de tipo h1
// Asignarle un texto Hola DOM!
// Colocarle un color, un tamaño de texto y una familia de fuente a elección.

const header = document.getElementById("header")
const main = document.getElementById("main")

// const titulo = document.createElement("h1")
// main.appendChild(titulo)
// titulo.textContent = "Hola DOM!"
// titulo.style.color = "red"
// titulo.style.fontSize = "32px"
// titulo.style.fontFamily = "helvetica"


// Ejercicio 2: Creación de listas

// Crear un elemento desde el DOM de tipo ol

// Asignarle 3 elementos de tipo li, con lo siguientes textos:

// Home
// Nosotros
// Contacto

// const menu = document.createElement("ul")
// main.appendChild(menu)
// const home = document.createElement("li")
// menu.appendChild(home)
// menu.innerHTML =  "<li>Home</li><li>Nosotros</li><li>Contacto</li>"



// Ejercicio 2: Listas anidadas

// Replica la siguiente estructura HTML creando nodos mediante javascript

// <ul>
//   <li>Verduras</li>
//   <li>Garbanzos</li>
//   <li>
//     Frutas
//     <ul>
//       <li>Manzanas</li>
//       <li>Naranjas</li>
//       <li>Bananas</li>
//       <li>Frutillas</li>
//     </ul>
//   </li>
// </ul>

// const productos = document.createElement("ul")
// main.appendChild(productos)


// const verduras = document.createElement("li")
// const garbanzos = document.createElement("li")
// const frutas = document.createElement("li")

// productos.appendChild(verduras)
// productos.appendChild(garbanzos)
// productos.appendChild(frutas)

// verduras.innerHTML = "Verduras"
// garbanzos.innerHTML = "Garbanzos"
// frutas.innerHTML = "Frutas"

// const frutasLista = document.createElement("ul")
// frutas.appendChild(frutasLista)
// frutasLista.innerHTML = "<li>Manzanas</li><li>Naranjas</li><li>Bananas</li><li>Frutillas</li>"





// Ejercicio 3: Botones

// Por cada ítem de la siguiente lista, crear un botón con el texto de dicho ítem. Al clickear un botón, debe aparecer un alert que diga Has clickeado el mes X, dependiendo del mes clickeado (por ejemplo, Has clickeado el mes: Mayo)

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 

// const enero = document.createElement("button")
// main.appendChild(enero)
// enero.innerHTML = "Enero"


for (let i = 0; i < meses.length; i++) {
    meses[i] = document.createElement("button")
    main.appendChild(meses[i])
    meses[i].innerHTML = "HOLA"
}








// Ejercicio 4: Lista de tareas

// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un botón que diga Eliminar. Al clickear el botón, se debe eliminar de la lista el nodo correspondiente.

// const tareas = [
//   'Comprar comida',
//   'Estudiar para examen',
//   'Pagar impuestos',
//   'Pasear a perro',
//   'Comprar entradas para el cine',
// ]
// Ejercicio 5: Prioridades

// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem. Cada vez que se clickea el ítem, debe ir cambiando de color, siguiendo este orden: gris -> celeste -> amarillo -> rojo. Cuando llega al último color y se lo vuelve a clickear, debe volver al primer color.

// const tareas = [
//   'Comprar comida',
//   'Estudiar para examen',
//   'Pagar impuestos',
//   'Pasear a perro',
//   'Comprar entradas para el cine',
// ]
// Ejercicio 6: Completar tareas

// Crear una lista desordenada. Por cada ítem del array, crear un ítem de lista con el texto de dicho ítem y un checkbox. Si el checkbox está tildado, al texto deben agregarse los estilos text-decoration: line-through; color: gray;. Si está destildado, debe volver a la normalidad.

// const tareas = [
//   'Comprar comida',
//   'Estudiar para examen',
//   'Pagar impuestos',
//   'Pasear a perro',
//   'Comprar entradas para el cine',
// ]
// Ejercicio 7: Tatetí

// En un documento .html, agregar dentro del body lo siguiente:
// <div class="tablero"></div>
// En un archivo .css, agregar lo siguiente:
// html,
// body {
//   height: 100%;
// }

// body {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .tablero {
//   display: flex;
//   flex-wrap: wrap;
//   width: 600px;
//   height: 600px;
// }

// .casilla {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 200px;
//   margin: 10px;
//   box-sizing: border-box;
//   background-color: #eeeeee;
//   border-radius: 5px;
//   font-size: 60px;
//   font-weight: bold;
// }
// Por cada ítem de la siguiente matriz, agregar al elemento tablero un elemento div que contenga como texto dicho ítem:
// const tablero = [
//   ['X', 'O', 'X'],
//   ['O', 'X', 'X'],
//   ['O', 'O', 'X'],
// ]
// Al clickear cada casilla, se debe cambiar el texto de la siguiente forma:
// Si hay una X, cambiar a una O
// Si hay una O, dejarla vacía
// Si está vacía, cambiar a una X
// Ejercicio 8: Grilla

// Crear una función generarGrilla(filas, columnas, contenedor, claseCasilla) que tome por parámetros:

// un número filas, representando la cantidad de filas
// un número columnas, representando la cantidad de columnas
// un nodo HTML contenedor que es el elemento donde se va crear la grilla
// un string claseCasilla, que es la clase que se le va a agregar a cada casilla
// La función debe en el elemento contenedor agregar filas * columnas cantidad de casillas, con clase claseCasilla, de ancho ancho contenedor / columnas y de alto alto contenedor / filas.

// El elemento contenedor debe tener los siguientes estilos:

// .contenedor {
//    display: flex;
//    flex-wrap: wrap;
//    width: 800px;
//    height: 800px;
//    border: 1px solid #000;
// }
// Ejercicio 9: Puntaje

// Crear en un documento html un input y un div.

// al escribir algo en el input y apretar "enter", agregue un nuevo puntaje al div
// si el input está vacío, no debe agregar nada
// cuando se apreta "enter", el input debe vaciarse
// el puntaje (otro div contenedor) contiene: - un elemento span para mostrar el nombre (que se agregó mediante el input) - un elemento span para mostrar el puntaje (que comienza en 0) - un botón para incrementar el puntaje - un botón para disminur el puntaje
// al presionar los botones se modifica el puntaje de cada jugador incrementándose o disminuyendo respectivamente
// el puntaje mínimo es 0
// Ejemplo

// [Ingrese un nuevo nombre...]

// Jeff    100 puntos    [+][-]
// Britta  50 puntos     [+][-]
// Abed    500 puntos    [+][-]
// Troy    200 puntos    [+][-]
// Annie   250 puntos    [+][-]
// Shirley 400 puntos    [+][-]
// Pierce  20 puntos     [+][-]