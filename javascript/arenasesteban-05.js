/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #05 - Valor y referencia
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

//  [ 1 ] - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según su tipo de dato.

// Asingación por valor

let numero = 64;

let copiaNumero = numero;

console.log(numero);        // 64
console.log(copiaNumero);   // 64

copiaNumero = 128;

console.log(numero);        // 64
console.log(copiaNumero);   // 128

let string = "Hola";

let copiaString = string;

console.log(string);        // Hola
console.log(copiaString);   // Hola

copiaString = "Mundo";

console.log(string);        // Hola
console.log(copiaString);   // Mundo

// Asignación por referencia - Arrays

const array = [1, 2, 3]; // Arreglo vacío

const copiaArray = array;

console.log(array);         // [ 1, 2, 3 ]
console.log(copiaArray);    // [ 1, 2, 3 ]

copiaArray[3] = 4;

console.log(array);         // [ 1, 2, 3, 4 ]
console.log(copiaArray);    // [ 1, 2, 3, 4 ]

const letras = ["A", "B", "C"];

const copiaLetras = [...letras]; // Operador de propagación

console.log(letras);        // [ 'A', 'B', 'C' ]
console.log(copiaLetras);   // [ 'A', 'B', 'C' ]

copiaLetras.push("D");

console.log(letras);        // [ 'A', 'B', 'C' ]
console.log(copiaLetras);   // [ 'A', 'B', 'C', 'D' ]

// Asignación por referencia - Objects

const objecto = { name: "Esteban" };

const copiaObjecto = objecto;

console.log(objecto);   // { name: 'Esteban' }
console.log(copiaObjecto);     // { name: 'Esteban' }

copiaObjecto.name = "Emilio";

console.log(objecto);   // { name: 'Emilio' }
console.log(copiaObjecto);     // { name: 'Emilio' }

const usuario = {
    nombre: "Esteban",
    edad: 23,
    hobby: ["Videojuegos", "Bailar"]
};

const copiaUsuario = {
    ...usuario // // Operador de propagación
}

console.log(usuario);       // { nombre: 'Esteban', edad: 23, hobby: [ 'Videojuegos', 'Bailar' ] }
console.log(copiaUsuario);  // { nombre: 'Esteban', edad: 23, hobby: [ 'Videojuegos', 'Bailar' ] }

copiaUsuario.edad = 24;         
copiaUsuario.hobby[1] = "Comer"; 

console.log(usuario);       // { nombre: 'Esteban', edad: 23, hobby: [ 'Videojuegos', 'Comer' ] }
console.log(copiaUsuario);  // { nombre: 'Esteban', edad: 24, hobby: [ 'Videojuegos', 'Comer' ] }

//  [ 2 ] - Muestra ejemplos de funciones con variables que se les pasan "por valor" y "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.

function swap(x, y) {
    let z = x;
    x = y;
    y = z;
    return [x, y];
}

let x = 0, y = 1;
console.log(`Valores originales: (${x}, ${y})`);

let [a, b] = swap(x, y);
console.log(`Valores despues: (${x}, ${y}) - Respuesta: (${a}, ${b})`);

function bubblesort(array) {
    let n = array.length;

    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - 1; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j+ 1] = temp;
            }
        }
    }

    return array;
}

let numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Arreglo original:", numeros);

bubblesort(numeros);
console.log("Arreglo ordenado:", numeros);