/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #14 - Fechas
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
    - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
    - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
    [ 2 ] - Calcula cuántos años han transcurrido entre ambas fechas.
*/

function calcularEdad(fechaActual, fechaNacimiento) {
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if(fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad -= 1;
    }

    return edad;
}

const fechaActual = new Date();
const fechaNacimiento = new Date("2000/07/18");

console.log(fechaActual.toLocaleDateString());      // 22-06-2024
console.log(fechaNacimiento.toLocaleDateString());  // 18-07-2000

const edad = calcularEdad(fechaActual, fechaNacimiento);
console.log(edad); // 23

/* 
    [ 3 ] - Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de 10 maneras diferentes. Por ejemplo:
    - Día, mes y año.
    - Hora, minuto y segundo.
    - Día de año.
    - Día de la semana.
    - Nombre del mes.
    (lo que se te ocurra...)
*/

console.log("Dia:", fechaActual.getDay());
console.log("Dia numero:", fechaActual.getDate());
console.log("Mes:", fechaActual.getMonth());
console.log("Año:", fechaActual.getFullYear());
console.log("Horas:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());
console.log("Milisegundos:", fechaActual.getMilliseconds());

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log("Dia semana:", dias[fechaActual.getDay() - 1]);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes año:", meses[fechaActual.getMonth()]);