/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #09 - Herencia y polimorfismo
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
    implemente una superclase Animal y un par de subclases Perro y Gato,
    junto con una función que sirva para imprimir el sonido que emite cada Animal.
*/

class Animal {
    nombre;

    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        console.log(`Animal - Sonido: ${this.sonido}`);
    }
}

class Perro extends Animal { // Herencia
    raza;

    constructor(nombre, sonido, raza) {
        super(nombre, sonido);
        this.raza = raza;
    }

    hacerSonido() { // Polimorfismo
        console.log(`Perro - Sonido: ${this.sonido}`);
    }
}


class Gato extends Animal { // Herencia
    color;

    constructor(nombre, sonido, color) {
        super(nombre,sonido);
        this.color = color;
    }

    hacerSonido() { // Polimorfismo
        console.log(`Gato - Sonido: ${this.sonido}`);
    }
}

const animal = new Animal("animal", "");
console.log(animal); // Animal { nombre: 'animal' }

const perro = new Perro("perro", "Guaugau", "pitbull");
console.log(perro); // Perro { nombre: 'perro', raza: 'pitbull' }

const gato = new Gato("gato", "Miau", "naranjo");
console.log(gato); // Gato { nombre: 'gato', color: 'naranjo' }

animal.hacerSonido();   // Animal - Sonido: 
perro.hacerSonido();    // Perro - Sonido: Guaugau
gato.hacerSonido();     // Gato - Sonido: Miau

/* 
    [ 2 ] - Implementa la jerarquía de una empresa de desarrollo formada por Empleados que pueden ser Gerentes, Gerentes de Proyectos o Programadores.
    - Cada empleado tiene un identificador y un nombre. 
    - Dependiendo de su labor, tienen propiedades y funciones exclusivas de su actividad, y almacenan los empleados a su cargo.
*/

class Empleado {
    empleados = [];

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    añadir(empelado) {
        this.empleados.push(empelado);
    }

    mostrar() {
        if(this.empleados.length > 0) {
            for(let empleado of this.empleados) {
                console.log(`Empleado ${empleado.nombre}`);
            }
        } else {
            console.log("No hay empleado registrados\n");
        }
        
    }
}

class Manager extends Empleado {
    coordinarProyectos() {
        console.log(`${this.nombre} está coordinando todos los proyectos de la empresa`);
    }
}

class ManagerProyecto extends Empleado {
    proyecto;

    constructor(id, nombre, proyecto) {
        super(id, nombre);
        this.proyecto = proyecto;
    }

    coordinarProyectos() {
        console.log(`${this.nombre} está coordinando su proyecto`);
    }
}

class Programador extends Empleado {
    lenguaje;

    constructor(id, nombre, lenguaje) {
        super(id, nombre);
        this.lenguaje = lenguaje;
    }

    codigo() {
        console.log(`${this.nombre} está programando en ${this.lenguaje}`);
    }

    añadir(empleado) {
        console.log(`Un programador no tiene empleados a su cargo. ${empleado.nombre} no se añadirá`);
    }
}

const manager = new Manager(1, "Esteban");
const managerProyectoA = new ManagerProyecto(2, "Esteban", "Proyecto A");
const managerProyectoB = new ManagerProyecto(3, "Martin", "Proyecto B");
const programadorA = new Programador(4, "Nicolas", "Java");
const programadorB = new Programador(5, "Sebastian", "Swift");
const programadorC = new Programador(6, "Bastian", "C#");
const programadorD = new Programador(7, "Pedro", "Prolog");

manager.añadir(managerProyectoA);
manager.añadir(managerProyectoB);

managerProyectoA.añadir(programadorA);
managerProyectoA.añadir(programadorB);
managerProyectoB.añadir(programadorC);
managerProyectoB.añadir(programadorD);

programadorA.añadir(programadorB); // Un programador no tiene empleados a su cargo. Sebastian no se añadirá

manager.coordinarProyectos();           // Esteban está coordinando todos los proyectos de la empresa
managerProyectoA.coordinarProyectos();  // Esteban está coordinando su proyecto
managerProyectoB.coordinarProyectos();  // Martin está coordinando su proyecto

manager.mostrar();          // Empleado Esteban Empleado Martin
managerProyectoA.mostrar(); // Empleado Nicolas Empleado Sebastian
managerProyectoB.mostrar(); // Empleado Bastian Empleado Pedro
programadorA.mostrar();     // No hay empleado registrados
programadorB.mostrar();     // No hay empleado registrados
programadorC.mostrar();     // No hay empleado registrados
programadorD.mostrar();     // No hay empleado registrados

programadorA.codigo();  // Nicolas está programando en Java
programadorB.codigo();  // Sebastian está programando en Swift
programadorC.codigo();  // Bastian está programando en C#
programadorD.codigo();  // Pedro está programando en Prolog