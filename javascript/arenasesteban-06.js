/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #06 - Recursividad
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

//  [ 1 ] - Entiende el concepto de recursividad creando una función recursiva que imprima números del 100 al 0.

function recursion(numero = 100) {
    console.log("Numero: ", numero);
    if(numero !== 0) {
       recursion(numero - 1);
    } 
}

recursion();

//  [ 2 ] - Calcular el factorial de un número concreto (la función recibe ese número).

function factorial(numero) {
    if(numero === 0 || numero === 1) {
        return 1;
    } 
    
    return numero * factorial(numero - 1);
}

console.log("Factorial:", factorial(4));

//  [ 3 ] - Calcular el valor de un elemento concreto (según su posición) en la  sucesión de Fibonacci (la función recibe la posición).

function fibonacci(numero) {
    if(numero == 0) {
        return 0;
    }
    else if(numero == 1) {
        return 1;
    } 

    return fibonacci(numero - 1) + fibonacci(numero - 2);
}

console.log("Fibonacci:", fibonacci(6));