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