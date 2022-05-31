console.log("Ejercicio de generar descuento debido a parámetros de género o edad");

class Person {
    esMujer: boolean;
    edad: number;
    constructor(esMujer: boolean, edad: number) {
        this.esMujer = esMujer,
        this.edad = edad
    };
}

// Me arroja en la consola mensaje descriptivo de lo que hay que hacer dependiendo condición
function validaDescuento(esMujer: boolean, edad: number) {
    if (esMujer || edad >= 60) {
        console.log("Aplica descuento")
    } else {
        console.log("No aplica descuento")
    }
};
// Tres objetos representan tres personas en el ejercicio que se le validan o no descuento
let first: Person = new Person(true, 15);
let second: Person = new Person(false, 30);
let third: Person = new Person(false, 71);

validaDescuento(first.esMujer, first.edad);
validaDescuento(second.esMujer, second.edad);
validaDescuento(third.esMujer, third.edad);