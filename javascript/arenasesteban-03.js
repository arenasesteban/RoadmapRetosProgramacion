/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #03 - Estructuras de datos
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

// [ 1 ] - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
// [ 2 ] - Utiliza operaciones de inserción, borrado, actualización y ordenación.

// Estrucutara de datos - Array

// Creación de un array
let array = []; // Array vacío
let meses = ["Febrero", "Marzo", "Abril"];

// Acceder a un elemento del array mediante su índice
let mes = meses[0];
console.log(mes); // Febrero

// Inserción
meses.push("Junio");    // Añade elemento al final del array
meses.unshift("Enero"); // Añade elemento al inicio del array
console.log(meses);     // ["Enero", "Febrero", "Marzo", "Abril", "Junio"]

// Eliminación
meses.pop();        // Elimina el último elemento de un array
meses.shift()       // Elimina el primer elemento de un array
console.log(meses); // ["Febrero", "Marzo", "Abril"]

// Actualización
meses[3] = "Junio";
console.log(meses); // ["Febrero", "Marzo", "Abril", "Junio"]

meses.splice(2, 2);
console.log(meses); // ["Febrero", "Marzo"]

// Ordenación
let numeros = [40, 1, 5, 200];

numeros.reverse();      // Invierte el orden del array
console.log(numeros);   // [200, 5, 1, 40]

numeros.sort();         // Ordena los elementos como cadenas de texto
console.log(numeros);   // [1, 200, 40, 5]

numeros.sort((a, b) => a - b);  // Ordena los elementos de forma ascendente
console.log(numeros);           // [1, 5, 40, 200]

numeros.sort((a, b) => b - a);  // Ordena los elementos de forma descendente
console.log(numeros);           // [200, 40, 5, 1]

// Estrucutara de datos - Object

// Creación de un object
const objectA = new Object();   // Sintaxis no usada
const objectB = {};             // Objeto vacío

const persona = {
    nombre: "Esteban",
    genero: "Masculino",
    edad: 23
}

// Acceso a propiedades
console.log(persona.nombre);    // Esteban
console.log(persona["edad"]);   // 23

// Inserción
persona.estatura = 165;
persona["apellidos"] = { paterno: "Arenas", materno: "Álvarez"};
console.log(persona);
/* 
    {
        nombre: 'Esteban',
        genero: 'Masculino',
        edad: 23,
        estatura: 165,
        apellidos: { paterno: 'Arenas', materno: 'Álvarez' }
    }
*/

// Eliminación
delete persona.estatura;
console.log(persona);
/* 
    {
        nombre: 'Esteban',
        genero: 'Masculino',
        edad: 23,
        apellidos: { paterno: 'Arenas', materno: 'Álvarez' }
    }
*/

// Actualización
persona.edad = 10;
console.log(persona);
/* 
    {
        nombre: 'Esteban',
        genero: 'Masculino',
        edad: 10,
        apellidos: { paterno: 'Arenas', materno: 'Álvarez' }
    }
*/

persona["edad"] = 23;
console.log(persona);
/* 
    {
        nombre: 'Esteban',
        genero: 'Masculino',
        edad: 23,
        apellidos: { paterno: 'Arenas', materno: 'Álvarez' }
    }
*/

// Estrucutara de datos - Set
// Estrucutara de datos - Map

/* 
   [ 3 ] - Crea una agenda de contactos por terminal.
   * Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
   * Cada contacto debe tener un nombre y un número de teléfono.
   * El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación los datos necesarios para llevarla a cabo.
   * El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos (o el número de dígitos que quieras).
   * También se debe proponer una operación de finalización del programa.
*/

const rl = require('./arenasesteban-modules');

let contactos = [];

function mostrarMenu() {
    console.log("\n----+ MENU PRINCIPAL +----");
    console.log("[ 1 ] - Crear contacto");
    console.log("[ 2 ] - Listar contactos");
    console.log("[ 3 ] - Buscar contacto");
    console.log("[ 4 ] - Actualizar contacto");
    console.log("[ 5 ] - Eliminar contacto");
    console.log("[ 6 ] - Salir");
}

function crearContacto() {
    console.log("\n----+ CREAR CONTACTO +----");
    
    rl.question("[ INGRESAR ] Nombre contacto: ", (nombre) => {
        rl.question("[ INGRESAR ] Número contacto: ", (numero) => {
            let contacto = {
                nombre,
                numero
            };

            contactos.push(contacto);

            console.log("\nContacto guardo con éxito.");

            main();
        });
    });
}

function listarContactos() {
    console.log("\n----+ LISTAR CONTACTOS +----");

    if(contactos.length > 0) {
        for(let contacto of contactos) {
            console.log(`Nombre: ${contacto.nombre} - Número: ${contacto.numero}`);
        }
    } else {
        console.log("Aún no hay contactos registrados.");
    } 

    main();
}

function buscarContacto() {
    console.log("\n----+ BUSCAR CONTACTO +----");

    rl.question("[ INGRESAR ] Nombre contacto: ", (nombre) => {
        let contactosEncontrados = contactos.filter(contacto => contacto.nombre === nombre);

        if(contactosEncontrados.length > 0) {
            for(let contacto of contactosEncontrados) {
                console.log(`Nombre: ${contacto.nombre} - Número: ${contacto.numero}`);
            }
        } else {
            console.log("\nNo se encontraron usuarios por el nombre indicado.");
        }

        main();
    });
}

function actualizarContacto() {
    console.log("\n----+ ACTUALIZAR CONTACTO +----");

    rl.question("[ INGRESAR ] Nombre contacto: ", (nombre) => {
        rl.question("[ INGRESAR ] Número contacto: ", (numero) => {
            let indice = contactos.findIndex(contacto => contacto.nombre === nombre && contacto.numero === numero);

            if(indice !== -1) {
                rl.question("[ INGRESAR ] Nuevo nombre contacto: ", (nombreNuevo) => {
                    rl.question("[ INGRESAR ] Nuevo número contacto: ", (numeroNuevo) => {
                        contactos[indice].nombre = nombreNuevo;
                        contactos[indice].numero = numeroNuevo;

                        main();
                    });
                });   
            } else {
                console.log("\nContacto indicado no encontrado.");
                main();
            }
        });
    });
}

function eliminarContacto() {
    console.log("\n----+ ELIMINAR CONTACTO +----");

    rl.question("[ INGRESAR ] Nombre contacto: ", (nombre) => {
        rl.question("[ INGRESAR ] Número contacto: ", (numero) => {
            let indice = contactos.findIndex(contacto => contacto.nombre === nombre && contacto.numero === numero);

            if(indice !== -1) {
                contactos.splice(indice, 1);
                console.log("\nContacto eliminado con éxito.");
            } else {
                console.log("\nContacto indicado no encontrado.");
            }

            main();
        });
    });
}

function main() {
    mostrarMenu();

    rl.question("Ingrese una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                console.log("\n[ OPCIÓN ESCOGIDA: Crear contacto ]");
                crearContacto();
                break;
            case "2":
                console.log("\n[ OPCIÓN ESCOGIDA: Listar contactos ]");
                listarContactos();
                break;
            case "3":
                console.log("\n[ OPCIÓN ESCOGIDA: Buscar contacto ]");
                buscarContacto();
                break;
            case "4":
                console.log("\n[ OPCIÓN ESCOGIDA: Actualizar contacto ]");
                actualizarContacto();
                break;
            case "5":
                console.log("\n[ OPCIÓN ESCOGIDA: Eliminar contacto ]");
                eliminarContacto();
                break;
            case "6":
                console.log("\n[ OPCIÓN ESCOGIDA: Salir ]");
                console.log("\nCerrando...");
                rl.close();
                break;
            default:
                console.log("\n[ ERROR ] Por favor, ingresar una opción válida.");
                main();
                break;
        }
    });
}

main();