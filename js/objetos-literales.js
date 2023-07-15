//sintaxis de un objeto
//con llaves es un objeto
let libros = {
    libro1: 'La fundacion',
    libro2: 'El principito',
    libro3: 'habitos atómicos',
    precio1: 60000,
    precio2: 45000,
    precio3: 220000,
    stock: true,

    
};

//muestra todas las propiedades del objeto libros
console.table(libros);

//mostrar la primera propiedad del objeto libros
console.log('El libro es: ', libros.libro1);

//consultar el elemento precio1 del objeto
const p1 = 'precio1';
console.log('El precio 1 es: ', libros[p1]);

//agregar una nueva propiedad al objeto libros
libros.libro4 = 'Una mujer de 4 en conducta';
console.table(libros);

// Eliminar una propiedad del objeto libros
delete libros.libro2; 
console.table(libros);

//combinar un objeto con arreglos
let autos = {
    marca1: 'Ferrari',
    marca2: 'Toyota',
    marca3: 'Mercedez',
    paisMarca:['Italia', 'Japón', 'Alemania'],


}

//mostrar los paises

console.table(autos['paisMarca']);
