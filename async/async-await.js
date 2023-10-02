async function helloFn(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Hola ' + name);
      resolve(name);
    }, 2000);
  });
    
}
  
async function byeFn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Chao ' + name);
      resolve(name);
    }, 1000);
  })
  
}

async function speakFn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Estoy hablando...');
      resolve(name);
      // reject('Hay Un error');
    }, 1000);
  });
}

// Todo lo que este colocado dentro de nuestra funcion async se va a ejecutar de manera asincrona 

async function main() {
  let name = await helloFn('Kevin');
  await speakFn(name);
  await speakFn(name);
  await speakFn(name);
  await byeFn(name);
  console.log('Finalizando proceso...')
}


console.log('Iniciando proceso...')
main();
console.log('Verifico async funntion...')
