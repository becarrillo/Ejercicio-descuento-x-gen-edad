console.log("Ejercicio de generar descuento debido a parámetros de género o edad");
var Person = /** @class */ (function () {
    function Person(esMujer, edad) {
        this.esMujer = esMujer,
            this.edad = edad;
    }
    ;
    return Person;
}());
// Me arroja en la consola mensaje descriptivo de lo que hay que hacer dependiendo condición
function validaDescuento(esMujer, edad) {
    if (esMujer || edad >= 60) {
        console.log("Aplica descuento");
    }
    else {
        console.log("No aplica descuento");
    }
}
;
// Tres objetos representan tres personas en el ejercicio que se le validan o no descuento
var first = new Person(true, 15);
var second = new Person(false, 30);
var third = new Person(false, 71);
validaDescuento(first.esMujer, first.edad);
validaDescuento(second.esMujer, second.edad);
validaDescuento(third.esMujer, third.edad);
