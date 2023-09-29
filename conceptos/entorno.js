// Variable de entorno en nodejs se utiliza process.env.VARIABLE_ENTORNO
let nombre = process.env.NOMBRE || 'Sin variable de entorno';
let web = process.env.TEMP || 'Sin WEB';

console.log('Hola ' + nombre)
console.log('Mi web es ' + nombre)