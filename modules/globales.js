// modulos que se pueden utilizar desde cualquier lugar, por ejemplo, console.log, console.error, setInterval, setInterval, etc..
// console.log(global);
// console.log(setInterval);

// let i = 0;
// let interval = setInterval(function() {
//   console.log('Hola');
//   if (i == 3) {
//     clearInterval(interval); // Detiene el setInterval al cumplirse la condicion
//   }
//   i++
// }, 1000)

// setImmediate(function() {
//   console.log('Hola X2..')
// });

// require(); para acceder a los modules, y export para exportar los mismos.
// require();

// porcess muestra la informacion del proceso 
// console.log(process)

// __dirname muestra el directorio donde esta ubicado nuestro script
// console.log(__dirname)

// __filename muestra el directorio donde esta ubicado nuestro script y cual es el nombre del mismo
// console.log(__filename)

// En caso de requeir una variable global, utilizaria global.miVariable = 'Valor...'
global.miVariable = 'Valor...'
console.log(miVariable)