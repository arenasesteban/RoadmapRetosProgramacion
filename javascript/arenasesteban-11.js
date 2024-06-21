/* 
    RETOS DE PROGRAMACIÓN - MoureDev
    RETO #11 - Manejo de ficheros
    https://retosdeprogramacion.com/roadmap/
    LENGUAJE - JavaScript
*/

/* 
    [ 1 ] - Desarrolla un programa capaz de crear un archivo que se llame como tu usuario de GitHub y tenga la extensión .txt. Añade varias líneas en ese fichero:
    - Tu nombre.
    - Edad.
    - Lenguaje de programación favorito.
    - Imprime el contenido.
    - Borra el fichero.
*/

const { rl , fs } = require('./arenasesteban-modules.js');

function lectura(archivo) {
    try {
        const data = fs.readFileSync(archivo, 'utf-8');
        data !== ""
            ? console.log(`Contenido del archivo:\n${data}\n`)
            : console.log(`Archivo vacío.\n`);
        
    } catch (error) {
        console.log(`Error al leer el archivo ${archivo}.\n`);
    }
}

function escritura(archivo, contenido) {
    try {
        fs.appendFileSync(archivo, contenido);
        console.log(`Archivo escrito correctamente.\n`);
    } catch (error) {
        console.log(`Error al escribir en el archivo ${archivo}.\n`);
    }
}

function sobreescritura(archivo, contenido) {
    try {
        fs.writeFileSync(archivo, contenido);
        console.log(`Archivo sobreescrito correctamente.\n`);
    } catch (error) {
        console.log(`Error al escribir en el archivo ${archivo}.\n`);
    }
}

function eliminar(archivo) {
    try {
        fs.unlinkSync(archivo);
        console.log(`Archivo borrado correctamente.\n`);
    } catch (error) {
        console.log(`Error al borrar el archivo ${archivo}.\n`);
    }
}

const archivo = "arenasesteban.txt";
const contenido = `Nombre: Esteban Arenas
Edad: 23 años
Lenguaje: Java`;

escritura(archivo, contenido); // Archivo escrito correctamente.
lectura(archivo);
/* 
    Contenido del archivo: Nombre: Esteban Arenas
    Edad: 23 años
    Lenguaje: Java
*/

sobreescritura(archivo, "");    // Archivo sobreescrito correctamente.
lectura(archivo);               // Archivo vacío.

eliminar(archivo); // Archivo borrado correctamente.

/* 
    [ 2 ] -  Desarrolla un programa de gestión de ventas que almacena sus datos en un archivo .txt.
    - Cada producto se guarda en una línea del archivo de la siguiente manera: [nombre_producto], [cantidad_vendida], [precio].
    - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar, actualizar, eliminar productos y salir.
    - También debe poseer opciones para calcular la venta total y por producto.
    - La opción salir borra el .txt.
*/

function añadirProducto() {
    rl.question("Ingresar nombre del producto: ", (nombre) => {
        rl.question("Ingresar precio del producto: ", (precio) => {
            rl.question("Ingresar cantidad de ventas: ", (cantidad) => {
                let contenido = `${nombre} | ${precio} | ${cantidad}\n`;

                try {
                    console.log("\n----+ Guardando producto +----");
                    console.log(contenido);
                    fs.appendFileSync("ventas-db.txt", contenido);
                    console.log(`Producto guardado correctamente.`);
                } catch (error) {
                    console.log(`\nError al guardar el producto ${nombre}.`);
                } finally {
                    main();
                }
            });
        });
    });
}

function consultarProducto() {
    rl.question("Ingresar nombre del producto: ", (nombreProducto) => {
        try {
            const data = fs.readFileSync("ventas-db.txt", 'utf-8');
            
            if(data !== "") {
                const productos = data.split("\n");
                let producto = null;

                for(let linea of productos) {
                    if (linea.trim() !== "") {
                        let [nombre, precio, cantidad] = linea.split(" | ");
                        if(nombreProducto === nombre) {
                            producto = `${nombre} | ${precio} | ${cantidad}`;
                            break;
                        }
                    }
                }

                if(producto) {
                    console.log("\n----+ Detalle producto +----");
                    console.log(producto);
                } else {
                    console.log(`\nProducto ${nombreProducto} no encontrado.`);
                }
            } else {
                console.log(`\nNo se han registrado ventas aún.`);
            }
        } catch (error) {
            console.log(`\nError al acceder a las ventas.`);
        } finally {
            main();
        }
    });
}

function actualizarProducto() {
    rl.question("Ingresar nombre del producto: ", (nombreProducto) => {
        rl.question("Ingresar precio del producto: ", (precioProducto) => {
            rl.question("Ingresar cantidad de ventas: ", (cantidadProducto) => {
                try {
                    const data = fs.readFileSync("ventas-db.txt", 'utf-8');
                    
                    if(data !== "") {
                        const productos = data.split("\n");
                        
                        let contenido = "";
                        let producto = null;
        
                        for(let linea of productos) {
                            if (linea.trim() !== "") {
                                let [nombre, precio, cantidad] = linea.split(" | ");
                                if (nombreProducto === nombre) {
                                    producto = `${nombreProducto} | ${precioProducto} | ${cantidadProducto}`;
                                    contenido += producto + "\n";
                                } else {
                                    contenido += `${nombre} | ${precio} | ${cantidad}\n`;
                                }
                            }
                        }
        
                        if (producto) {
                            console.log("\n----+ Actualizando producto +----");
                            console.log(producto);
                            
                            fs.writeFileSync("ventas-db.txt", contenido);
                            console.log("\nProducto actualizado correctamente.");
                        } else {
                            console.log(`\nProducto ${nombreProducto} no encontrado.`);
                        }
                    } else {
                        console.log(`\nNo se han registrado ventas aún.`);
                    }
                } catch (error) {
                    console.log(`\nError al acceder a las ventas.`);
                } finally {
                    main();
                }
            });
        });
    });
}

function eliminarProducto() {
    rl.question("Ingresar nombre del producto: ", (nombreProducto) => {
        try {
            const data = fs.readFileSync("ventas-db.txt", 'utf-8');
            
            if(data !== "") {
                const productos = data.split("\n");
                
                let contenido = "";
                let producto = null;

                for(let linea of productos) {
                    if (linea.trim() !== "") {
                        let [nombre, precio, cantidad] = linea.split(" | ");
                        if (nombreProducto === nombre) {
                            producto = `${nombre} | ${precio} | ${cantidad}`;
                        } else {
                            contenido += `${nombre} | ${precio} | ${cantidad}\n`;
                        }
                    }
                }

                if (producto) {
                    console.log("\n----+ Eliminando producto +----");
                    console.log(producto);
                    
                    fs.writeFileSync("ventas-db.txt", contenido);
                    console.log("\nProducto eliminado correctamente.");
                } else {
                    console.log(`\nProducto ${nombreProducto} no encontrado.`);
                }
            } else {
                console.log(`\nNo se han registrado ventas aún.`);
            }
        } catch (error) {
            console.log(`\nError al acceder a las ventas.`);
        } finally {
            main();
        }
    });
}

function consultarVentas() {
    try {
        const data = fs.readFileSync("ventas-db.txt", 'utf-8');
        
        if(data !== "") {
            const productos = data.split("\n");

            console.log("----+ Consultando productos +----");
            for(let linea of productos) {
                if (linea.trim() !== "") {
                    console.log(linea);
                }
            }
        } else {
            console.log(`\nNo se han registrado ventas aún.`);
        }
    } catch (error) {
        console.log(`\nError al acceder a las ventas.`);
    } finally {
        main();
    }
}

function calcularVentasTotal() {
    try {
        const data = fs.readFileSync("ventas-db.txt", 'utf-8');
        
        if(data !== "") {
            const productos = data.split("\n");
            let [ventas, monto] = [0, 0];

            console.log("----+ Calculando ventas totales +----");
            for(let linea of productos) {
                let [nombre, precio, cantidad] = linea.split(" | ");
                if (linea.trim() !== "") {
                    ventas += parseInt(cantidad, 10);
                    monto += parseInt(cantidad) * parseInt(precio);
                }
            }

            console.log(`Cantidad: ${ventas}`);
            console.log(`Ventas: ${monto}`);
        } else {
            console.log(`\nNo se han registrado ventas aún.`);
        }
    } catch (error) {
        console.log(`\nError al acceder a las ventas.`);
    } finally {
        main();
    }
}

function calcularVentasProducto() {
    rl.question("Ingresar nombre del producto: ", (nombreProducto) => {
        try {
            const data = fs.readFileSync("ventas-db.txt", 'utf-8');
            
            if(data !== "") {
                const productos = data.split("\n");
                let producto = null;

                for(let linea of productos) {
                    if (linea.trim() !== "") {
                        let [nombre, precio, cantidad] = linea.split(" | ");
                        if(nombreProducto === nombre) {
                            let monto = parseInt(cantidad) * parseInt(precio);
                            producto = `${nombre} | ${precio} | ${cantidad} - Monto: ${monto}`;
                            break;
                        }
                    }
                }

                if(producto) {
                    console.log("\n----+ Calculando ventas por producto +----");
                    console.log(producto);
                } else {
                    console.log(`\nProducto ${nombreProducto} no encontrado.`);
                }
            } else {
                console.log(`\nNo se han registrado ventas aún.`);
            }
        } catch (error) {
            console.log(`\nError al acceder a las ventas.`);
        } finally {
            main();
        }
    });
}

function cerrarPrograma() {
    try {
        fs.unlinkSync("ventas-db.txt");
        console.log("Base de datos cerrada correctamente.");
    } catch (error) {
        console.log("\nError al cerrar la base de datos.");
    }
}

function main() {
    console.log("\n----+ MENU PRINCIPAL +----");
    console.log("[ 1 ] - Añadir producto");
    console.log("[ 2 ] - Consultar producto");
    console.log("[ 3 ] - Actualizar producto");
    console.log("[ 4 ] - Eliminar producto");
    console.log("[ 5 ] - Consultar ventas");
    console.log("[ 6 ] - Calcular total ventas");
    console.log("[ 7 ] - Calcular ventas por producto");
    console.log("[ 8 ] - Salir");

    rl.question("Introduce una opción: ", (opcion) => {
        switch(opcion) {
            case "1":
                console.log("\n[ OPCIÓN ESCOGIDA: Añadir producto ]\n");
                añadirProducto();
                break;
            case "2":
                console.log("\n[ OPCIÓN ESCOGIDA: Consultar producto ]\n");
                consultarProducto();
                break;
            case "3":
                console.log("\n[ OPCIÓN ESCOGIDA: Actualizar producto ]\n");
                actualizarProducto();
                break;
            case "4":
                console.log("\n[ OPCIÓN ESCOGIDA: Eliminar producto ]\n");
                eliminarProducto();
                break;
            case "5":
                console.log("\n[ OPCIÓN ESCOGIDA: Consultar ventas ]\n");
                consultarVentas();
                break;
            case "6":
                console.log("\n[ OPCIÓN ESCOGIDA: Calcular total ventas ]\n");
                calcularVentasTotal();
                break;
            case "7":
                console.log("\n[ OPCIÓN ESCOGIDA: Calcular ventas por producto ]\n");
                calcularVentasProducto();
                break;
            case "8":
                console.log("\n[ OPCIÓN ESCOGIDA: Salir ]\n");
                cerrarPrograma();
                console.log("Cerrando...");
                rl.close();
                break;
            default:
                console.log("\n[ ERROR ] Por favor, ingresar una opción valida");
                main()
                break;
        }
    });
}


fs.writeFileSync("ventas-db.txt", "");
main();