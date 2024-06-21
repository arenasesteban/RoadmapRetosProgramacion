/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #10 - Excepciones
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Explora el concepto de manejo de excepciones según tu lenguaje.
    - Fuerza un error en tu código, captura el error, imprime dicho error y evita que el programa se detenga de manera inesperada.
    - Prueba a dividir "10/0" o acceder a un índice no existente de un listado para intentar provocar un error.
*/

function division(x, y) {
    if(y !== 0) {
        return x / y;
    } else {
        throw "División por cero";
    }
}

function excepciones(x, y) {
    let error = null;

    try {
        console.log(`RESULTADO: ${division(x, y)}`);
    } catch(e) {
        error = e;
        console.log(`[ERROR] ${e}`);
    } finally {
        if (error) {
            console.log("[REPORTE] Divisor deber ser distinto de cero");
        } else {
            console.log("[ÉXITO] La división se realizó con éxito.");
        }
    }
}

excepciones(4, 2);
excepciones(10, 0);

/* 
    [ 2 ] - Crea una función que sea capaz de procesar parámetros, pero que también pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que corresponderse con un tipo de excepción creada por nosotros de manera personalizada, y debe ser lanzada de manera manual) en caso de error.
    - Captura todas las excepciones desde el lugar donde llamas a la función.
    - Imprime el tipo de error.
    - Imprime si no se ha producido ningún error.
    - Imprime que la ejecución ha finalizado.
*/

function control(persona) {
    if(persona.edad < 18) {
        throw new Error("Usuario menor de edad");
    } else if(!persona.nombre) {
        throw new Error("Nombre de usuario no indicado");
    } else if(!persona.edad) {
        throw new Error("Edad de usuario no indicada");
    } else {
        console.log(`Éxito: A ${persona.nombre} se le ha permitido el acceso`);
    }
}

function parametro(persona) {
    try {
        control(persona);
    } catch(error) {
        console.log(`${error}`);
    } finally {
        console.log("Ha terminado su ejecución\n");
    }
}

let persona = { nombre: "Esteban", edad: 23 };
parametro(persona); // Éxito: A Esteban se le ha permitido el acceso

persona = { nombre: "Martin", edad: 13 };
parametro(persona); // Error: Usuario menor de edad

persona = { nombre: "Javiera" };
parametro(persona); // Error: Edad de usuario no indicada

persona = {};
parametro(persona); // Error: Nombre de usuario no indicado