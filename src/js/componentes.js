import '../css/componentes.css';

//por defecto los modulos son privados, si quiero que sean publicos debo ponerle la palabra export

export const saludar = ( nombre ) => {
console.log('Creando etiqueta');

const h1 = document.createElement('h1');
h1.innerText = `Hola hijo de la verga, ${ nombre }`;
document.body.append( h1 );
}