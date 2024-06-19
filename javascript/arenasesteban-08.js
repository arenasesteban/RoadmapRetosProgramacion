/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #08 - Clases
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Explora el concepto de clase y crea un ejemplo que implemente un inicializador, atributos y una función que los imprima (teniendo en cuenta las posibilidades de tu lenguaje).
    Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos utilizando su función.
*/

class Vehiculo {
    patente;
    marca;
    modelo;
    kilometraje;

    constructor(patente, marca, modelo, kilometraje) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
    }

    mostrarVehiculo() {
        console.log(`\nVEHICULO ${this.patente}`);
        console.log(`Marca - ${this.marca}`);
        console.log(`Modelo ${this.mode}`);
        console.log(`Kilometraje - ${this.kilometraje} km\n`);
    }

    get conducir() {
        console.log(`Haz conducido ${this.kilometraje} km\n`);
    }

    set conducir(kilometraje) {
        this.kilometraje = kilometraje;
        console.log(`Haz conducido ${this.kilometraje} km\n`);
    }
}

const vehiculo = new Vehiculo("GWRT15", "Hyundai", "Accent", 42000);

vehiculo.mostrarVehiculo();
/* 
    VEHICULO GWRT15
    Marca - Hyundai
    Modelo undefined
    Kilometraje - 42000 km
*/

vehiculo.kilometraje = 43000; 
console.log(`Kilometraje modificado: ${vehiculo.kilometraje}\n`); // Kilometraje modificado: 43000

vehiculo.conducir;         // Haz conducido 43000 km
vehiculo.conducir = 44000; // Haz conducido 44000 km 

/* 
    [ 2 ] - Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas en el ejercicio número 7 de la ruta de estudio).
    - Deben poder inicializarse y disponer de operaciones para añadir, eliminar, retornar el número de elementos e imprimir todo su contenido.
*/

class Pila {
    pila = [];

    añadir(elemento) {
        this.pila.unshift(elemento);
        console.log(`Se ha añadido un elemento correctamente\n`);
        this.mostrar();
    }

    eliminar() {
        if(this.pila.length - 1 >= 0) {
            this.pila.shift();
            console.log(`Se ha eliminado un elemento correctamente\n`);
        } else {
            console.log(`Pila vacia, no se pueden eliminar mas elementos\n`);
        }
        this.mostrar();
    }

    mostrar() {
        console.log(`PILA - [${this.pila}]\n`);
    }
}

const pila = new Pila;

pila.mostrar(); // PILA - []

pila.añadir(1); // PILA - [1]
pila.añadir(2); // PILA - [2,1]
pila.añadir(3); // PILA - [3,2,1]

pila.eliminar(); // PILA - [2,1]
pila.eliminar(); // PILA - [1]

class Cola {
    cola = [];

    añadir(elemento) {
        this.cola.push(elemento);
        console.log(`Se ha añadido un elemento correctamente\n`);
        this.mostrar();
    }

    eliminar() {
        if(this.cola.length - 1 >= 0) {
            this.cola.shift();
            console.log(`Se ha eliminado un elemento correctamente\n`);
        } else {
            console.log(`Cola vacia, no se pueden eliminar mas elementos\n`);
        }
        this.mostrar();
    }

    mostrar() {
        console.log(`COLA - [${this.cola}]\n`);
    }
}

const cola = new Cola;

cola.mostrar(); // COLA - []

cola.añadir(1); // COLA - [1]
cola.añadir(2); // COLA - [1,2]
cola.añadir(3); // COLA - [1,2,3]

cola.eliminar(); // COLA - [2,3]
cola.eliminar(); // COLA - [3]