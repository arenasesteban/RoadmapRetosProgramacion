/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #02 - Funciones y alcance
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

// Declaración de una función
function funcionA(numero) {
    return numero * numero;
}

// Función anónima
const funcionB = function(numero) {
    return numero * numero;
}

// Función flecha
const funcionC = (numero) => {
    return numero * numero;
}

const funcionD = (e) => e * e;

// [ 1 ] - Crea ejemplos de funciones básicas que representen las diferentes posibilidades del lenguaje: Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
// [ 5 ] - Debes hacer print por consola del resultado de todos los ejemplos. (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

// Función sin parámetros y sin retorno
const salidaA = () => console.log("¡Hola, mundo!");

salidaA();

// Función con parámetros y sin retorno
const salidaB = (string) => console.log("¡Hola, " + string + "!");

salidaB("JavaScript");

// Función con varios parámetros con retorno
const salidaC = (a, b) => a + b;

console.log(salidaC(2, 2));

// Funcion con varios retornos
const salidaD = () => ["¡Hola, ", "Esteban!"]

let [paramA, paramB] = salidaD();
console.log(paramA + paramB);

// [ 2 ] - Comprueba si puedes crear funciones dentro de funciones.
// [ 5 ] - Debes hacer print por consola del resultado de todos los ejemplos. (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

function funcionPadre(numero) {
    function funcionHijo(numero) {
        return numero * 10;
    }

    let resultado = funcionHijo(numero) / 2;

    console.log(resultado);
}

funcionPadre(2);

// [ 3 ] - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
// [ 5 ] - Debes hacer print por consola del resultado de todos los ejemplos. (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

let string = "¡Hola, mundo!";

console.log(string.length);
console.log(string.toUpperCase);

// [ 4 ] - Pon a prueba el concepto de variable LOCAL y GLOBAL.
// [ 5 ] - Debes hacer print por consola del resultado de todos los ejemplos. (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

function funcionExterna() {
    let variableGlobal = 10;

    function funcionInterna() {
        let variableInterna = 5;
        console.log("Función interna");
        console.log("Variable global - ", variableGlobal);
        console.log("Variable interna - ", variableInterna);
    }

    funcionInterna();

    console.log("Función externa");
    console.log("Variable global - ", variableGlobal);
    // console.log("Variable interna - ", variableInterna); Produce un error
}

funcionExterna();

/* 
   [ 6 ] - Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número. La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
   * Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
   * Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
   * Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
   * La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/

const funcion = function(cadenaA, cadenaB) {
    let contador = 0;

    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("Múltiplo de " + cadenaA + " y " + cadenaB); 
        else if(i % 3 === 0) console.log("Múltiplo de " + cadenaA); 
        else if(i % 5 === 0) console.log("Múltiplo de " + cadenaB);
        else {
            console.log("Número:", i);
            ++contador;
        }
    }

    console.log("Número de veces que se imprimió un número:", contador);
}

funcion("tres", "cinco");