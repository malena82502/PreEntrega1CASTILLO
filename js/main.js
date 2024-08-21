let precio = 0;
let unidades = 0;
let cuota = 0;
let nombre = "";
let miProducto, cantidadProducto, cantidadCuotas;

function saludo() {
    while (nombre === "") {
        nombre = prompt("Bienvenido(a)!! Ingresa tu nombre completo").trim().toUpperCase();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
        }else{
            alert("Hola " + nombre + "  :)");
        }
    }
}

function producto(){
    let productoValido = false;

    while(!productoValido){
        miProducto = prompt("Escoge el producto que deseas comprar: pikachu, stormtrooper, harry potter").toLowerCase();
        switch(miProducto){
            case "pikachu":
                alert("Tu elección es pikachu y su precio es $ 1000");
                precio += 1000;
                productoValido = true
                break;
            case "stormtrooper":
                alert("Tu elección es stormtrooper y su precio es $ 2000");
                precio += 2000;
                productoValido = true
                break;
            case "harry potter":
                alert("Tu elección es harry potter y su precio es $ 3000");
                precio += 3000;
                productoValido = true
                break;
            default:
                alert("No contamos con este producto por el momento");
                break;
        }
    }
}

function cantidad(){
    let cantidadValida = false;

    while(!cantidadValida){
        cantidadProducto = prompt("Ingresa la cantidad de unidades que quieres comprar: del 1 al 3");
        switch(cantidadProducto){
            case "1":
                alert("Elegiste 1 " + miProducto);
                unidades += 1;
                cantidadValida = true;
                break;
            case "2":
                alert("Elegiste 2 " + miProducto);
                unidades += 2;
                cantidadValida = true;
                break;
            case "3":
                alert("Elegiste 3 " + miProducto);
                unidades += 3;
                cantidadValida = true;
                break;
            default:
                alert("No contamos con stock");
                break;
        }
    }
}

function cuotas(){
    let cuotaValida = false;

    while(!cuotaValida){
        cantidadCuotas = prompt("Puedes pagar hasta en 3 cuotas sin interés!!!. Ingresa la cantidad de cuotas: del 1 al 3");
        switch(cantidadCuotas){
            case "1":
                alert("Pagarás tu compra en 1 cuota");
                cuota += 1;
                cuotaValida = true;
                break;
            case "2":
                alert("Pagarás tu compra en 2 cuotas");
                cuota += 2;
                cuotaValida = true;
                break;
            case "3":
                alert("Pagarás tu compra en 3 cuotas");
                cuota += 3;
                cuotaValida = true;
                break;
            default:
                alert("Número de cuotas incorrecto");
                break;
        }
    }
}

function resultado(){
    alert(nombre + " el monto a pagar de tu cuota es " + "$ " + ((precio * unidades) / cuota))
}

function ejecutarSimulador(){
    saludo();
    producto();
    cantidad();
    cuotas();
    resultado();
}

ejecutarSimulador();

