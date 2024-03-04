"use strict";
class Pelicula {
    proyectarCine() {
        console.log("la pelicula a proyectar es " + this.nombre);
    }
    constructor(nombre, pelicula) {
        this.nombre = nombre,
            this.pelicula = pelicula;
    }
}
const pelicula = new Pelicula("harry", ["harry poter"]);
pelicula.proyectarCine();
