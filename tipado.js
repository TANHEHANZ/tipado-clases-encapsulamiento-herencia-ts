"use strict";
let nombre;
let edad;
const calcular_edad = (edad) => {
    if (edad === 18) {
        console.log("edad es " + edad);
    }
    else {
        console.log(edad);
    }
};
calcular_edad(70);
let data = {
    nombre: "homeOfice",
    descripcion: "trabajo solo en casa",
    encargados: ["hanz", "tapia"]
};
const trabajador = (datostrabajador) => {
    console.log("el encargado del dia es " + datostrabajador.encargados[0]);
};
trabajador(data);
let visible = true;
let dataLibro = {
    nonbre: "la odicea",
    autor: "la cucaracha",
    fecha: new Date()
};
const ver_libro = (tipoLibro) => {
    if (visible) {
        console.log("el libro se llama" + tipoLibro.autor);
    }
};
ver_libro(dataLibro);
