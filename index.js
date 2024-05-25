//Inventario de bodega

let usuario;
let disponibilidad = 100;
let option;

usuario = function (nombre, apellido) {
    alert("Bienvenido " + nombre + " " + apellido + " al inventario Almohadas BL");
    return nombre + " " + apellido;
}


let nombreUsuario = usuario(prompt("Ingrese su primer nombre"), prompt("Ingrese su primer apellido"))


while (option != 0) {
    option = parseInt(prompt("Usuario :" + nombreUsuario + " \n\n Menú de inventario \n\n Ingrese una opción \n 1.-Disponibilidad de almohadas \n 2.-Venta de almohadas \n 3.- Ingreso de almohadas \n 0.- Salir"
    )) 
    if (option == 1) {
        alert("Hay " + disponibilidad + " almohadas disponibles en bodega.-");
    } else if (option == 2) {
        let retiro = parseInt(prompt("Ingrese la cantidad de almohadas vendidas o retirads.-"));
        if (isNaN(retiro) || retiro < 0) {
            alert("Por favor ingrese una cantidad válida.-");
        } else if (retiro > disponibilidad) {
            alert("No hay sificientes almohadas en existencia.-");
        } else {
            disponibilidad = disponibilidad - retiro;
            alert("Ha retirado " + retiro + " almohadas de la bodega.-");
            alert("Quedan " + disponibilidad + " almohadas en bodega.-");
        }
    } else if (option == 3) {
        let ingreso = parseInt(prompt("Indique la cantidad de almohadas que ingresan a bodega.-"));
        if (isNaN(ingreso)) {
            alert("Ingrese una cantidad válida.-")
        } else {
            disponibilidad = disponibilidad + ingreso;
            alert("Ha ingresado " + ingreso + " almohadas a la bodega.-");
            alert("Hay " + disponibilidad + " almohadas en bodega.-");
        }
    } else if (option == 0) {
        alert("Saliendo")
    } else {
        alert("Ingrese una opcion válida.-")
    }
}