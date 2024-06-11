//Inventario de bodega

//___________________________DEFINO VARIABLES 

let usuario;
let option;

usuario = function (nombre, apellido) {
    alert("Bienvenido " + nombre + " " + apellido + " al inventario Almohadas BL");
    return nombre + " " + apellido;
}


//_________________________ CREO UNA CLASE PARA HACER OBJETOS 

class Producto {
    constructor(codigo, nombre, marca, modelo, cantidad, descripcion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.cantidad = cantidad;
        this.descripcion = descripcion
    }
    mostrarPropiedades() {
        return `Código: ${this.codigo}\nNombre: ${this.nombre}\nMarca: ${this.marca}\nModelo: ${this.modelo}\nCantidad: ${this.cantidad}\nDescripción: ${this.descripcion}\n\n`;
    }
}


let almohadas = new Producto ("0001", "Almohada","Rozen", "standard", 35, "Almohada de plumas" )

let colchones = new Producto ("0002", "Colchon", "rozen", "BiPlz/Opdic", 35, "Colchon ortopedico de 2 plazas")

let productosArray = [almohadas, colchones];


//___________________________ AQUI CREO FUNCIONES PARA SUMAR Y RESTAR :)

let resta = (a, b) => a - b

let suma = (a, b) => a + b

//___________ESTA FUNCION LA TUVE QUE CREAR PARA MOSTRAR LAS PRPIEDADES DE LOS OBJETOS DE LOS ARRAYS

function mostrarProductos(productos) {

    let resultado = "";

    productos.forEach(producto => {
        resultado += producto.mostrarPropiedades();
    });

    alert(resultado);
}

//_____________________________AQUI COMIENZA EL BUCLE


let nombreUsuario = usuario(prompt("Ingrese su primer nombre"), prompt("Ingrese su primer apellido"))


while (option != 0) {
    option = parseInt(prompt("Usuario :" + nombreUsuario + " \n\n Menú de inventario \n\n Ingrese una opción \n 1.-Disponibilidad de producto \n 2.-Salida de productos \n 3.- Ingreso de productos\n 4.- Ver detalle de productos\n 5.- Ver productos simplificado\n 0.- Salir"
    ))

    if (isNaN(option)) {
        alert("Por favor, ingrese una opción válida.");
        continue; 
    }

//_____________________________ OPCION 1 PARA MOSTRAR CANTIDADES EN BODEGA

    if (option == 1) {

        alert(`Hay ${almohadas.cantidad} almohadas disponibles en bodega.\nHay ${colchones.cantidad} colchones disponibles en bodega.`);


//____________OPCION 2 PARA SACAR COSAS DE LA BODEGA... A SU VEZ TIENE 2 SUB-MENUS PARA ALMOHADAS Y COLCHONES


    } else if (option == 2) {

        let menuRetiro = parseInt(prompt(`Qué producto que desea retirar... Digite la opción correspondiente: \n
            1.- Almohadas
            2.- Colchones`));

        if (isNaN(menuRetiro) || menuRetiro < 0 || menuRetiro > 2) {
            alert("Por favor ingrese una cantidad válida.-");

        } else if (menuRetiro == 1) {
            let retiroAlmohadas = parseInt(prompt(`¿Cuantas Almohadas desea retirar de bodega?`));

            if (retiroAlmohadas > almohadas.cantidad) {
                alert("No hay suficientes almohadas en existencia.-");
                
            } else if (isNaN(retiroAlmohadas)) {
                alert(`Por favor ingrese una cantidad valida`)
            }
            
            else {

                almohadas.cantidad = resta (almohadas.cantidad, retiroAlmohadas);
                alert("Ha retirado " + retiroAlmohadas + " almohadas de la bodega.-");
                alert("Quedan " + almohadas.cantidad + " almohadas en bodega.-");

            }

        } else if (menuRetiro == 2){

            let retiroColchones = parseInt(prompt(`¿Cuantos colchones desea retirar?`))

            if (retiroColchones > colchones.cantidad) {

                alert(`No hay suficientes colchones en existencia`);

            } else if (isNaN(retiroColchones)) {

                alert(`Por favor ingrese una cantidad valida`)

            } else {

                colchones.cantidad = resta (colchones.cantidad, retiroColchones);
                alert("Ha retirado " + retiroColchones + " colchones de la bodega.-");
                alert("Quedan " + colchones.cantidad + " colchones en bodega.-");

            }
        }
    }   


//__________EL MENU 3 ES PARA INGRESAR COSAS A LA BODEGA... TAMBIEN LE PUSE 2 SUB-MENUS PARA DIFERENCIAR PRODUCTOS


        else if (option == 3) {
        let menuIngreso = parseInt(prompt(`Qué producto que desea ingresar... Digite la opción correspondiente: \n
            1.- Almohadas
            2.- Colchones`));

        if (isNaN(menuIngreso)|| menuIngreso < 1 || menuIngreso > 2) {
            alert("Ingrese una opció válida.-")

        } else if (menuIngreso == 1){

            let ingresoAlmohadas = parseInt(prompt(`Indique la cantidad de almohadas que ingresan a bodega`));

            if (isNaN(ingresoAlmohadas) || ingresoAlmohadas < 0) {

                alert(`Ingrese una cantidad válida`)

            } else {
                almohadas.cantidad = suma (almohadas.cantidad, ingresoAlmohadas)
                alert(`Ha ingresado ${ingresoAlmohadas} a bodega`)
                alert(`Ahora existen ${almohadas.cantidad} en bodega`)
            } 
        } else if (menuIngreso == 2) {

            let ingresoColchones = parseInt(prompt(`Indique la cantidad de colchones que ingresan a bodega`));

            if (isNaN(ingresoColchones) || ingresoColchones < 0) {

                alert(`Ingrese una cantidad válida`)

            } else {
                colchones.cantidad = suma (colchones.cantidad, ingresoColchones)
                alert(`Ha ingresado ${ingresoColchones} a bodega`)
                alert(`Ahora existen ${colchones.cantidad} en bodega`)
            } 
        }

//___________________LA OPCION 4 ES PARA MOSTRAR EL DETALLE DE LOS PRODUCTOS QUE EXISTEN


    } else if (option == 4) {

         mostrarProductos(productosArray);


//__________________ YA AQUI DEFINO EL METODO DE CIERRE DE LA APLICACION 

    } else if (option == 5) {

        let productosLista = productosArray.map(producto => `- ${producto.nombre}`).join('\n');
        alert(productosLista);

    } else if (option == 0) {

        alert("Saliendo")

    } else {

        alert("Ingrese una opcion válida.-")

    }
}



