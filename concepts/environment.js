// Variable de entorno en nodejs se utiliza process.env.VARIABLE_ENTORNO
let name = process.env.NOMBRE || 'Sin variable de entorno';
let web = process.env.TEMP || 'Sin WEB';

console.log('Hola ' + name)
console.log('Mi web es ' + name)

// npm install -g nodemon para que se auto compile, nodemon .\conceptos\entorno.js para ejecutar el demons
console.log('Otra cosa...');

// npm install -g pm2 para entornos de produccion, se ejectura pm2 start .\conceptos\entorno.js
// pm2 start inicia el pm2, pm2 stop 'id de proceso' pausa el proceso, pm2 status muestra los pm activos.