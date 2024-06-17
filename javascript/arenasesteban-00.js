/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    EJERCICIO #00 - Sintaxis, variables, tipos de datos y hola mundo
    LENGUAJE - JavaScript
*/

// [ 1 ] - Crea un comentario en el código y coloca la URL del sitio web oficial del lenguaje de programación que has seleccionado

// Sitio web oficial - https://developer.mozilla.org/es/docs/Web/JavaScript

// [ 2 ] - Representa las diferentes sintaxis que existen de crear comentarios en el lenguaje (en una línea, varias...).

// Comentario de una linea

/* 
   Este tambien es 
   un comentario
   en varias lineas
*/

// [ 3 ] - Crea una variable (y una constante si el lenguaje lo soporta).

// Variables

var variableA = "Variable A"; // Alcance de funcion
let variableB = "Variable B"; // Alcance de bloque 

// Constates

const CONSTATE = "Constante A";

// [ 4 ] - Crea variables representando todos los tipos de datos primitivos del lenguaje (cadenas de texto, enteros, booleanos...).

let string = "Hola, mundo";     // Cadena de texto
let int = 1;                    // Numero entero
let float = 0.1;                // Numero flotante
let boolean = true;             // Valor booleano
let bigInt = 9007199254740991n  // Big int
let x = null;                   // Nulo
let y;                          // Indefinido


// [ 5 ] - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"

console.log("¡Hola, JavaScript!")