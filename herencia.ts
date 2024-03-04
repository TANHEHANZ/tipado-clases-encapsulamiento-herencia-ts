console.log("herencia")
class Persona {
    protected nombre?: string;
    protected edad?: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    ///metodo que como esta dentro de la clase podemos acceder a este mediante this

    imprimir = () => {
        console.log('nombre de la persona es :' + this.nombre + 'su edad es :' + this.edad)
    }

}

class Empleado extends Persona {
    private pago: number;

    constructor(nombre: string, edad: number) {
        super(nombre, edad);
        this.pago = this.pagar();
    }
    private pagar(): number {
        if (this.edad && this.edad > 10) {
            return 400
        } else {
            return 300
        }
    };

    imprimir = () => console.log('el sueldo a pagar es' + this.pago);

}

const empleado = new Empleado("hanz", 8);
empleado.imprimir();