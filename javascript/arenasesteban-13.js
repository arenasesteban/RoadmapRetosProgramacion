/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #13 - Pruebas unitarias
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Crea una función que se encargue de sumar dos números y retornar su resultado.
    [ 2 ] - Crea un test, utilizando las herramientas de tu lenguaje, que sea capaz de determinar si esa función se ejecuta correctamente.
*/

const suma = (a, b) => a + b;

function testSuma() {
    const resultadoObtenido = suma(2, 4);
    const resultadoEsperado = 6;

    resultadoEsperado === resultadoObtenido
        ? console.log("Prueba unitaria correcta: 2 + 4 =", resultadoObtenido)
        : console.log("Prueba unitaria incorrecta: 2 + 4 =", resultadoObtenido);
}

testSuma();

/* 
    [ 3 ] - Crea un diccionario con las siguientes claves y valores:
    "name": "Tu nombre"
    "age": "Tu edad"
    "birth_date": "Tu fecha de nacimiento"
    "programming_languages": ["Listado de lenguajes de programación"]
    [ 4 ] - Crea dos test:
    - Un primero que determine que existen todos los campos.
    - Un segundo que determine que los datos introducidos son correctos.
*/

function testDiccionacio(objeto) {
    const propiedades  = ["nombre", "edad", "fechaNacimiento", "lenguajes"];

    const nombre = "Esteban";
    const edad = 23;
    const fechaNacimiento = "2000-07-18";
    const lenguajes = ["Java", "Python", "C"];

    let campos = true;

    for(let propiedad of propiedades) {
        if(!(propiedad in objeto)) {
            console.log(`[TEST UNITARIO - INCORRECTO] Propiedad ${propiedad} esperada: No encontrada`);
            campos = false;
        } else {
            if(propiedad === "nombre" && objeto[propiedad] !== nombre) {
                console.log(`[TEST UNITARIO - INCORRECTO] Valores propiedad ${propiedad} esperada: Incorrectos`);
                campos = false;
            } else if(propiedad === "edad" && objeto[propiedad] !== edad) {
                console.log(`[TEST UNITARIO - INCORRECTO] Valores propiedad ${propiedad} esperada: Incorrectos`);
                campos = false;
            } else if(propiedad === "fechaNacimiento" && objeto[propiedad] !== fechaNacimiento) {
                console.log(`[TEST UNITARIO - INCORRECTO] Valores propiedad ${propiedad} esperada: Incorrectos`);
                campos = false;
            } else if(propiedad === "lenguajes" && objeto[propiedad].toString() !== lenguajes.toString()) {
                console.log(`[TEST UNITARIO - INCORRECTO] Valores propiedad ${propiedad} esperada: Incorrectos`);
                campos = false;
            }
        }
    }

    if(campos) console.log(`[TEST UNITARIO - CORRECTO] Valores y propiedades esperadas correctas`);
}

const persona = {
    nombre: "Esteban", 
    edad: 23,
    fechaNacimiento: "2000-07-18",
    lenguajes: ["Java", "Python", "C"]
};

testDiccionacio(persona);