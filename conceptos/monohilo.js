//  node conceptos/monohilo.js proceso: interpretar todo el archivo, transformarlo a codigo maquina y preparar todo lo necesario para ejecutar
console.log('Hola mundo');

let i = 0 
setInterval(function() {
  console.log(i)
  i++
  if ( i == 5 ) {
    // por ser monohilo mata el proceso
    var a = 3 + z
  }
}, 1000);

// se ejecuta todo y la funcion setInterval por ser async se ejecuta hasta la n 
console.log('Segundo Elemento')