"use strict";
console.log("herencia");
class Persona {
    constructor(nombre, edad) {
        ///metodo que como esta dentro de la clase podemos acceder a este mediante this
        this.imprimir = () => {
            console.log('nombre de la persona es :' + this.nombre + 'su edad es :' + this.edad);
        };
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.imprimir = () => console.log('el sueldo a pagar es' + this.pago);
        this.pago = this.pagar();
    }
    pagar() {
        if (this.edad && this.edad > 10) {
            return 400;
        }
        else {
            return 300;
        }
    }
    ;
}
const empleado = new Empleado("hanz", 8);
empleado.imprimir();
