// los arreglos sirven para contener varias variables
// sintaxis se declara como una variable let o const 

const auto = [];// array o arreglo vacio 
let  Auto = ['Deportivo', 'rojo', 'automatico', 250000000];

// mostrar los datos del Auto
console.log(auto);
console.log({Auto});

// ejemplo 2

const movies=['flash','Indiana Jhones','Elementos','Mision imposible'];
//mostrar todas las pelis
console.log(movies);
//mostrar una posicion del array
console.log(movies[1]);

//combinar arrays
let libros = [
    'Sistemas',
    'Contabilidad',
    25000,
    37000,
    25000/2,
    ['Wilson','Pedro','Juanito',true, '14/07/23']

]

//mostrar la información de los libros
console.log(libros);
//mostrar la fecha 
console.log(libros[5][3]);

//muestra el último valor del arreglo

let ultimoValor = libros[libros.length - 1];
console.log('El ultimo valor es: ', ultimoValor);

// cuantós valores tiene el array de libros
console.log('Los valores:',libros.leght);

//agregar un nuevo elemento al array de libros
let nuevoLibro = libros.push('El Principito');
console.log({nuevoLibro, libros});

//agregar nuevo elemento al inicio del array de libros
let inicioLibro = libros.unshift('Crimen  y castigo');
console.log({inicioLibro, libros});

//Eliminar un elemento del array de libros
let borrarPosicion = libros.splice(5);
console.log({borrarPosicion, libros});
