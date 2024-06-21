/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #12 - JSON y XML
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
    - Nombre
    - Edad
    - Fecha de nacimiento
    - Listado de lenguajes de programación
    Muestra el contenido de los archivos y borra los archivos.
*/

const { readFileSync } = require('fs');
const { rl , fs } = require('./arenasesteban-modules.js');
const { doesNotMatch } = require('assert');

const data = {
    nombre: "Esteban",
    edad: 23,
    fechaNacimiento: "2000-07-18",
    lenguajes: ["Java", "Python", "C"]
};

// JSON
function crearJSON(contenido) {
    try {
        fs.writeFileSync("./data.json", JSON.stringify(contenido, null, 2));
        console.log("Archivo JSON creado correctamente.");
        console.log("Contenido guardado en data.json.\n");
    } catch(error) {
        console.log("No se ha podido crear el archivo JSON.\n");
    }
}

function mostrarJSON() {
    try {
        const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));
        console.log("Contenido de data.json:", data);
        console.log("");
    } catch(error) {
        console.log("No se ha podido acceder al archivo JSON.\n");
    }
}

function borrarJSON() {
    try {
        fs.unlinkSync("./data.json", 'utf-8');
        console.log("Archivo JSON borrado correctamente.\n");
    } catch(error) {
        console.log("No se ha podido acceder al archivo JSON.\n");
    }
}

crearJSON(data);
mostrarJSON();
borrarJSON();

// XML
function crearXML(contenido) {
    const xmlContent = `
    <persona>
        <nombre>${contenido.nombre}</nombre>
        <edad>${contenido.edad}</edad>
        <fechaNacimiento>${contenido.fechaNacimiento}</fechaNacimiento>
        <lenguajes>
            ${contenido.lenguajes.map(lenguaje => `<lenguaje>${lenguaje}</lenguaje>`).join('\n        ')}
        </lenguajes>
    </persona>`;

    try {
        fs.writeFileSync("./data.xml", xmlContent.trim());
        console.log("Archivo XML creado correctamente.");
        console.log("Contenido guardado en data.xml.\n");
    } catch(error) {
        console.log("No se ha podido crear el archivo XML.\n");
    }
}

function mostrarXML() {
    try {
        const data = fs.readFileSync("./data.xml", 'utf-8');
        console.log("Contenido de data.xml:", data);
        console.log("");
    } catch(error) {
        console.log("No se ha podido acceder al archivo XML.\n");
    }
}

function borrarXML() {
    try {
        fs.unlinkSync("./data.xml", 'utf-8');
        console.log("Archivo XML borrado correctamente.\n");
    } catch(error) {
        console.log("No se ha podido acceder al archivo XML.\n");
    }
}

crearXML(data);
mostrarXML();
borrarXML();

/* 
    [ 2 ] - Utilizando la lógica de creación de los archivos anteriores, crea un programa capaz de leer y transformar en una misma clase custom de tu lenguaje los datos almacenados en el XML y el JSON. Borra los archivos.
*/

const { parseString } = require('xml2js');

class Persona {
    nombre;
    edad;
    fechaNacimiento;
    lenguajes = [];

    constructor(nombre, edad, fechaNacimiento, lenguajes) {
        this.nombre = nombre;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.lenguajes = lenguajes;
    }

    lecturaJSON() {
        try {
            const data = JSON.parse(fs.readFileSync("data.json", 'utf-8'));
            return new Persona(data.nombre, data.edad, data.fechaNacimiento, data.lenguajes);
        } catch (error) {
            console.log("Error al leer el archivo JSON:", error);
        }
    }

    lecturaXML() {
        try {
            const data = fs.readFileSync("data.xml", 'utf-8');
            let persona = null;
            parseString(data, (error, result) => {
                if (error) {
                    console.log("Error al parsear el archivo XML:", error);
                    return;
                }
                
                const p = result.persona;
                persona = new Persona(
                    p.nombre[0],
                    parseInt(p.edad[0]),
                    p.fechaNacimiento[0],
                    p.lenguajes[0].lenguaje
                );
            });
            return persona;
        } catch (error) {
            console.log("Error al leer el archivo XML:", error);
        }
    }
}

crearJSON(data);
crearXML(data);

// Crear una instancia de la clase Persona
const persona = new Persona();

// Llamada al método lecturaJSON
const personaJSON = persona.lecturaJSON();
console.log("JSON:", personaJSON);
/* 
    JSON: Persona {
        nombre: 'Esteban',
        edad: 23,
        fechaNacimiento: '2000-07-18',
        lenguajes: [ 'Java', 'Python', 'C' ]
    }
*/

// Llamada al método lecturaXML
const personaXML = persona.lecturaXML();
console.log("XML:", personaXML);
/* 
    XML: Persona {
        nombre: 'Esteban',
        edad: 23,
        fechaNacimiento: '2000-07-18',
        lenguajes: [ 'Java', 'Python', 'C' ]
    }
*/

borrarJSON();
borrarXML();

rl.close();