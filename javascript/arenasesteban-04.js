/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #04 - Cadenas de caracteres
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
    - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
*/

// Creación de un string
let stringA = "cadena de texto"; // Comillas dobles
let stringB = 'cadena de texto'; // Comillas simples
let stringC = `cadena de texto`; // Backticks

// Acceder a un caracter
let string = "JavaScript";

let caracterA = string[4];          // S 
let caracterB = string.charAt(4);   // S

// Logitud de una cadena
let longitud = string.length; // 10

// Substrings
let cadenaA = string.substring(4);                  // "Script"
let cadenaB = string.substring(4, string.length);   // "Script"

// Concatenación de cadenas
let strA = "¡Hola";
let strB = "Mundo!";

let concatenacionA = strA + ", " + strB;        // "¡Hola, Mundo!"
let concatenacionB = strA.concat(", ", strB);   // "¡Hola, Mundo!"

// Repetición
let cadenaC = string.repeat(3); // "JavaScriptJavaScriptJavaScript"

// Recorrer una cadena
for(let i = 0; i < string.length; i++) {
    console.log(string[i]);
}

for(let caracter of string) {
    console.log(caracter);
}

// Conversión
let cadenaD = string.toUpperCase(); // "JAVACRIPT"
let cadenaE = string.toLowerCase(); // "javascript"

// Reemplazo
let cadenaF = string.replace("a", "o");     // "JovaScript"
let cadenaG = string.replaceAll("a", "o");  // "JovoScript"

// División
let cadenaH = string.split("a"); // ["J", "v", "Script"]

// Unión
let array = ["1", 2, "3", 4];

let cadenaI = array.join("");   // "1234"
let cadenaJ = array.join(" ");  // "1 2 3 4"

// Interpolación
let suma = 2 + 2; 
let cadenaK = `Suma: ${suma}`;

// Verificación
let cadenaL = string.startsWith("J");   // true
let cadenaM = string.endsWith("t");     // true
let cadenaN = string.includes("z");     // false

/* 
    [ 2 ] - Crea un programa que analice dos palabras diferentes y realice comprobaciones para descubrir si son:
    - Palíndromos
    - Anagramas
    - Isogramas
*/

function funcion(stringA, stringB) {
    console.log(`¿La cadena "${stringA}" es palindromo? ${stringA === stringA.toLowerCase().split("").reverse().join("")}`);
    console.log(`¿La cadena "${stringB}" es palindromo? ${stringB === stringB.toLowerCase().split("").reverse().join("")}`);

    console.log(`¿La cadena "${stringA}" es anagrama de "${stringB}"? ${stringA.toLowerCase().split("").sort().join("") === stringB.toLowerCase().split("").sort().join("")}`);

    function isograma(string) {
        let letras = {};

        for(let letra of string.toLowerCase()) {
            if(!letras[letra]) {
                letras[letra] = 1;
            } else {
                letras[letra] += 1;
            }
        }

        let cantidad = 0;

        for(let letra in letras) {
            if(cantidad === 0) {
                cantidad = letras[letra];
            }

            if(cantidad !== letras[letra]) {
                return false;
            } 
        }

        return true;
    }
    
    console.log(`¿La cadena "${stringA}" es un isograma? ${isograma(stringA)}`);
    console.log(`¿La cadena "${stringB}" es un isograma? ${isograma(stringB)}`);
}

funcion("amor", "reconocer");