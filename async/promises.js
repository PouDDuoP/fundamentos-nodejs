function helloFn(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Hola ' + name);
      resolve(name);
    }, 2000);
  });
    
}
  
function byeFn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Chao ' + name);
      resolve(name);
    }, 1000);
  })
  
}

function speakFn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Estoy hablando...');
      // resolve(name);
      reject('Hay Un error');
    }, 1000);
  });
}

// --- 

// Promise es una clase global
// Diferencias entre promesas y callback, las promesas se pueden ir anidando

console.log('Iniciando proceso...');
helloFn('Kevin') 
  .then(speakFn)
  .then(speakFn)
  .then(speakFn)
  .then(byeFn) // no se necesita declarar la sintaxis funcion() ya que utiliza el mismo paramtro, tampoco se debe enviar el parametro al llamado de la function.
  .then((name) => {
    console.log('Finalizando proceso...')
  })
  .catch((err) => {
    console.error('Se ha roto el codigo');
    console.error(err)
  })