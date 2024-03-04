let nombre: string;
let edad: number;


const calcular_edad = (edad: number): void => {
    if (edad === 18) {
        console.log("edad es " + edad)
    } else {
        console.log(edad)
    }

}

calcular_edad(70);


////////////////usando interfaces'
///----------------la interface puede ser asiganada a las propiedades
//--- como tambien a los metodos de cada funcion
interface trabajo {
    nombre: string,
    descripcion: string,
    encargados: string[],
}

let data: trabajo = {
    nombre: "homeOfice",
    descripcion: "trabajo solo en casa",
    encargados: ["hanz", "tapia"]
}

const trabajador = (datostrabajador: trabajo) => {
    console.log("el encargado del dia es " + datostrabajador.encargados[0])
}

trabajador(data);


/////  con type /// ambos cumplen la funcion de declarar el tipo de dato pero uno llega a ser mas especifico que el otro 

type libro = {
    nonbre: string,
    autor: string,
    fecha: Date,
}

let visible: Boolean = true;

let dataLibro: libro = {
    nonbre: "la odicea",
    autor: "la cucaracha",
    fecha: new Date()
}
const ver_libro = (tipoLibro: libro): void => {
    if (visible) {
        console.log("el libro se llama" + tipoLibro.autor)
    }
}
ver_libro(dataLibro);