//Menu con opciones
//declarar variables
var opcion, num1, num2; 
    opcion = prompt("Seleccione que desea hacer: \n"+
            "1.- Calcular cual número es mayor\n"+
            "2.- Sumar\n"+
            "3.- Restar\n"+
            "4.- Multiplicar\n"+
            "5.- Dividir\n"+
            "6.- Mostar los números ingresados\n"+
            "7.- Salir");
    
    //Si el usuario ingresa cualquier opción entre 1 y 6 le solicitará que agregue dos números:
    if(opcion != 7 && opcion >= 1 && opcion <8){
        num1 = parseInt(prompt("Ingrese el primer número"))
        num2 = parseInt(prompt("Ingrese el segundo número"))
    }
    
    // evaluar opcion para definir que hacer o a flujo ir
    // switch case key es lo que se evalua, value es el valor contra el que evaluamos
    switch (opcion) {
        case "1": //Calcular cual número es mayor
            mayor(num1,num2); // mayor(parametros, parametros)
            break;
        case "2":
            suma(num1,num2)
            break;
        case "3":
            resta(num1,num2)
            break;
        case "4":
            multiplicar(num1,num2)
            break;
        case "5":
            dividir(num1,num2)
            break; 
        case "6":
            ingresados(num1,num2)
            break;
        case "7":
            alert ("Gracias por participar")
            break;
        default:
            alert ("Eleccion incorrecta. Adiós")
            break;
    }
//funciones log("parametros"), parseInt("1"), alert("parametros")
// function nombre(parametros) {
    
// }

// funcion para evaluar cual numero es mayor
function mayor(numero1,numero2) {
    if(numero1 > numero2){ //si la condicion se cumple, numero1 es mayor a numero2
        alert(numero1 + " es mayor que " + numero2)
    }else if(numero1 === numero2){// si no, es estrictamente igual?, con ===
        alert("Los números son iguales")
    }else{ //no sucede lo anterior?, se ejecuta las reglas del else
        alert(numero2 + " es mayor que " + numero1)
    }
}
function suma(numero1,numero2) {
    var suma = numero1 + numero2;
    alert ("La suma de los números es: " + suma);
}
function resta(numero1,numero2) {
    var resta = numero1 - numero2;
    alert ("La resta de los números es: " + resta);
}
function multiplicar(numero1,numero2) {
    var multiplicar = numero1 * numero2;
    alert ("La multiplicacion de los números es: " + multiplicar);
}
function dividir(numero1,numero2) {
    var dividir = numero1 / numero2;
    alert ("La division de los números es: " + dividir);
}
function ingresados(numero1,numero2) {
    alert ("los numeros ingresados fueron: " + numero1 + " y " +numero2);
}