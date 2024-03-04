class Pelicula {
    nombre?: string;
    pelicula?: string[];

    proyectarCine() {
        console.log("la pelicula a proyectar es " + this.nombre)
    }

    constructor(nombre: string, pelicula: string[]) {
        this.nombre = nombre,
            this.pelicula = pelicula
    }

}

const pelicula = new Pelicula("harry", ["harry poter"])

pelicula.proyectarCine()