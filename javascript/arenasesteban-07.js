/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #07 - Pilas y colas
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Implementa los mecanismos de introducción y recuperación de elementos propios de las pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array o lista (dependiendo de las posibilidades de tu lenguaje).
*/

// Pila - LIFO

let stack = []; // Último en entrar, primero en salir

// Añadir elemento al stack
function agregarPila(array, elemento) {
    array.unshift(elemento);
}

function eliminarPila(array) {
    array.shift();
}

// Añadir en pila
agregarPila(stack, 1); // [ 1 ]
agregarPila(stack, 2); // [ 2, 1 ]
agregarPila(stack, 3); // [ 3, 2, 1 ]

console.log(stack); // [ 3, 2, 1 ]

// Eliminar en pila
eliminarPila(stack);

console.log(stack); // [ 2, 1 ]

// Cola - FIFO

let queue = []; // Primero en entrar, primero en salir

function agregarCola(array, elemento) {
    array.push(elemento);
}

function eliminarCola(array) {
    array.shift();
}

// Añadir en cola
agregarCola(queue, 1); // [ 1 ]
agregarCola(queue, 2); // [ 1, 2 ]
agregarCola(queue, 3); // [ 1, 2, 3 ]

console.log(queue); // [ 1, 2, 3 ]

// Eliminar en cola
eliminarCola(queue);

console.log(queue); // [ 2, 3 ]

/* 
    [ 2 ] - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web. Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como el nombre de una nueva web.
*/

const rl = require('./arenasesteban-modules');

let paginas = ["Inicio"];
let indice = 0;

function pila(callback) {
    console.log("\n----+ MENU - PILA +----");
    console.log(`PAGINA ACTUAL - ${paginas[indice]}`);
    console.log("[ 1 ] - Añadir pagina web");
    console.log("[ 2 ] - Adelante");
    console.log("[ 3 ] - Atrás");
    console.log("[ 4 ] - Salir");

    rl.question("Introduce una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                console.log("\n[ OPCIÓN ESCOGIDA: Añadir pagina web ]");
                rl.question("\nIngrese una pagina web: ", (entrada) => {
                    agregarPila(paginas, entrada);
                    ++indice;
                    console.log("\nPagina web guardada con éxito");
                    pila();
                });
                break;
            case "2":
                console.log("\n[ OPCIÓN ESCOGIDA: Adelante ]");
                if(indice - 1 >= 0 && indice - 1 < paginas.length) {
                    --indice;
                    console.log("Se ha avanzado de pagina correctamente");
                } else {
                    console.log("No se puede avanzar de pagina");
                }
                pila();
                break;
            case "3":
                console.log("\n[ OPCIÓN ESCOGIDA: Atrás ]");
                if(paginas.length - 1 > 0) {
                    eliminarPila(paginas);
                    console.log("Se ha retrocedido de pagina correctamente");
                } else {
                    console.log("No se puede retroceder de pagina");
                }
                pila();
                break;
            case "4":
                console.log("\n[ OPCIÓN ESCOGIDA: Salir ]");
                console.log("\nCerrando...");
                callback();
                return;
            default:
                console.log("\n[ ERROR ] Por favor, ingresar una opción valida");
                pila();
        }
    });
}

/* 
    [ 3 ] - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una impresora compartida que recibe documentos y los imprime cuando así se le indica. La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se interpretan como nombres de documentos.
*/

let documentos = [];

const cola = function() {
    console.log("\n----+ MENU - COLA +----");
    console.log("[ 1 ] - Agregar documento");
    console.log("[ 2 ] - Imprimir");
    console.log("[ 3 ] - Salir");

    rl.question("Introduce una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                console.log("\n[ OPCIÓN ESCOGIDA: Agregar documento ]");
                rl.question("\nIngrese un documento: ", (entrada) => {
                    agregarCola(documentos, entrada);
                    console.log("\nDocumento guardado con éxito");
                    cola();
                });
                break;
            case "2":
                console.log("\n[ OPCIÓN ESCOGIDA: Imprimir ]");
                if(documentos.length > 0) {
                    console.log(`\nImprimiendo ${documentos[0]}`);
                    eliminarCola(documentos);
                } else {
                    console.log("\nNo hay documentos en la cola");
                }
                cola();
                break;
            case "3":
                console.log("\n[ OPCIÓN ESCOGIDA: Salir ]");
                console.log("\nCerrando...");
                rl.close()
                return;
            default:
                console.log("\n[ ERROR ] Por favor, ingresar una opción valida");
                cola();
        }
    });
}

pila(cola);