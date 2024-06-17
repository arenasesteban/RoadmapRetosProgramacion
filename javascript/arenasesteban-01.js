/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    EJERCICIO #01 - Operadores y estructuras de control
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

// [ 1 ] - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits... (Ten en cuenta que cada lenguaje puede poseer unos diferentes)

// Operadores de asignación
console.log("\n--+ OPERADORES - Asignación +--\n")
console.log("Asignación           - x = 10    :", x = 10);
console.log("Adición              - x += 1    :", x += 1);
console.log("Resta                - x -= 1    :", x -= 1);
console.log("Multiplicación       - x *= 2    :", x *= 2);
console.log("División             - x /= 2    :", x /= 2);
console.log("Residuo              - x %= 4    :", x %= 4);
console.log("Exponenciación       - x **= 2   :", x **= 2);
console.log("AND lógico           - x &&= 4   :", x &&= 4);
console.log("OR lógico            - x ||= 2   :", x ||= 2);
console.log("");

// Operadores de comparación
console.log("--+ OPERADORES - Comparación +--\n")
console.log("Igualdad             - 2 == 4    :", 2 == 4);
console.log("Desigualdad          - 2 != 4    :", 2 != 4);
console.log("Igualdad estricta    - 2 === 2   :", 2 === 2);
console.log("Igualdad estricta    - 2 === '2' :", 2 === '2');
console.log("Desigualdad estricta - 2 !== 2   :", 2 !== 2);
console.log("Desigualdad estricta - 2 !== '2' :", 2 !== '2');
console.log("Mayor que            - 2 > 4     :", 2 > 4);
console.log("Mayor o igual que    - 2 >= 2    :", 2 >= 2);
console.log("Menor que            - 2 < 4     :", 2 < 4);
console.log("Menor o igual que    - 2 <= 1    :", 2 <= 1);
console.log("");

// Operadores aritméticos
console.log("--+ OPERADORES - Aritméticos +--\n")
console.log("Suma                 - 4 + 1     :", 4 + 2);
console.log("Resta                - 4 - 1     :", 4 - 2);
console.log("Multiplicación       - 4 * 2     :", 4 * 2);
console.log("División             - 4 / 2     :", 4 / 2);
console.log("Resto                - 4 % 2     :", 4 % 2);
console.log("Potencia             - 4 ** 2    :", 4 ** 2);
console.log("Incremento pre       - ++x       :", ++x);
console.log("Decremento pre       - --x       :", --x);
console.log("Incremento post      - x++       :", x++);
console.log("Decremento post      - x--       :", x--);
console.log("");

// Operadores lógicos
console.log("--+ OPERADORES - Lógicos +--\n")
console.log("AND lógico          - 1 && 1     :", 1 && 1);
console.log("AND lógico          - 1 && 0     :", 1 && 0);
console.log("OR lógico           - 1 || 1     :", 1 || 1);
console.log("OR lógico           - 1 || 0     :", 1 || 0);
console.log("OR lógico           - 0 || 0     :", 1 || 0);
console.log("NOT lógico          - !true      :", !true);
console.log("NOT lógico          - !false     :", !false);
console.log("");

// Operadores lógicos
console.log("--+ OPERADORES - Concatenación +--\n")
let cadena = "!Hola, " + "mundo!";
console.log("Cadena     - '!Hola, ' + 'mundo!':", cadena);
console.log("");

// Operadores ternario
console.log("--+ OPERADORES - Ternario +--\n");
let condicion = 1 < 0 ? true : false;
console.log("Condición - 1 < 0 ? true : false :", condicion);
console.log("");

// Operadores unarios
console.log("--+ OPERADORES - Unarios +--\n");
let variableA = 0;
let variableB = "";
let variableC = null;
let variableD;
console.log("Typeof number       - x = 0      :", typeof variableA);
console.log("Typeof string       - x = ''     :", typeof variableB);
console.log("Typeof object       - x = null   :", typeof variableC);
console.log("Typeof undefined    - undefined  :", typeof variableD);
console.log("");

// [ 2 ] - Utilizando las operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de estructuras de control que existan en tu lenguaje: Condicionales, iterativas, excepciones...
// [ 3 ] - Debes hacer print por consola del resultado de todos los ejemplos.

let respuesta;
let variable;

// Sentencia If Else
console.log("--+ ESTRUCTURAS DE CONTROL +--\n");
variable = 5;
if(variable < 5) {
    respuesta = "Variable menor a 5";
} else if(variable == 5) {
    respuesta = "Variable igual a 5";
} else {
    respuesta = "Variable mayor a 5";
}
console.log("If Else        - ", respuesta);

// Sentencia Switch Case
variable = "A";
switch(variable) {
    case "A":
        respuesta = "Variable es A";
        break;
    case "B":
        respuesta = "Variable es B";
        break;
    case "C":
        respuesta = "Variable es C";
        break;
    default:
        respuesta = "Variable no encontrada";
        break;
}
console.log("Switch Case    - ", respuesta);

// Sentencia Try Catch 
try {
    let suma = 1 + 1;
    respuesta = "Operación realizada con éxito";
} catch (error) {
    respuesta = "Error al realizar la suma";
}
console.log("Try Catch      - ", respuesta);

// Bucle While
variable = 2;
while(variable) {
    --variable;
}
respuesta = "Variable es igual a " + variable;
console.log("While          - ", respuesta);

// Bucle Do While
variable = 2;
do {
    --variable;
} while(variable);
respuesta = "Variable es igual a " + variable;
console.log("Do While       - ", respuesta);

// Bucle For
variable = 0;
for(let i = 0; i < 5; i++) {
    variable += 1;
}
respuesta = "Variable es igual a " + variable;
console.log("For            - ", respuesta);

// For Of
variable = [1, 2, 3, 4];
for(let numero of variable) {
    respuesta = "Último valor de variable leído: " + numero;
}
console.log("For Of         - ", respuesta);

// For In
variable = {
    nombre: "Esteban",
    edad: 24
};
for(let propiedad in variable) {
    respuesta = "Última propiedad de variable leída: " + propiedad;
}
console.log("For In         - ", respuesta);
console.log("");

// [ 4 ] - Crea un programa que imprima por consola todos los números comprendidos entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
console.log("--+ DIFICULTAD EXTRA +--\n");
console.log("Números comprendidos entre 10 y 55 (incluidos), pares y multiplos de 3, menos el 16.")
for(let i = 10; i <= 55; i++) {  
    if(i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log("Número - " + i);
    }
}
console.log("");