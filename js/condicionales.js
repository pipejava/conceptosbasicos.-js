//if y else, determina la condición
//ejemplo1: mostrar el nombre del profe de frontend


let nombreMateria = 'front end';

if (nombreMateria==='front end'){
    //mostrar nombre del profe
    console.table(`Nombre del profe: Jorge - ${nombreMateria}`);

}else{
    console.table('No es el nombre del profe')
}

//ejemplo 2: determinar el ingreso a un bar, solo pueden ingresar mayores de edad.

console.warn('Ejemplo2')

let edadPersona = 17;
if (edadPersona >= 18) {
    console.table(`Tu edad es: ${edadPersona} - Puedes ingresar`);
    
}else{
    console.table(`Tu edad es: ${edadPersona} - No puedes ingresar`);

} 

//Determinar los profes de ingles y frontend

console.warn('ejemplo3');

const materia1 = 'frontend';
const materia2 = 'ingles';
let diaMateria = 'miercoles';

if (materia1 ==='frontend' && materia2 === 'ingles' && diaMateria === 'jueves') {

    console.log('Los profes son: Jorge' + ' - ' + ' Fabiola');
    
}else{
    console.log('No son los profes')
}

//condicional switch, se basa por una condición y se pueden utilizar varios casos 
//ejemplo4: mostrar las actividades que se realizan en el día

console.warn('ejemplo4');

const diaActividad = 'Domingo';

switch (diaActividad) {
    case 'lunes':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Juego');
        console.log('sacar el perro');
        
        break;
    case 'Martes':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Juego');
        console.log('Leo la biblia');
        console.log('sacar el perro');
        break;
    case 'Miercoles':
        
        console.log('Trabajo');
        console.log('sacar el perro');
        
        break;
    case 'Jueves':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Juego');
        console.log('sacar el perro');
        break;
    case 'viernes':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('politas');
        console.log('sacar el perro');
        break;
    case 'Sábado':
        console.log('Estudio');
        console.log('Trabajo');
        console.log('Juego');
        console.log('sacar el perro');
        break;
    case 'Domingo':
        console.log('Ciclovia');
        console.log('descanso');
        console.log('caminar');
        console.log('sacar el perro');
        break;

    default:
        console.log('Error')
        break;
}
