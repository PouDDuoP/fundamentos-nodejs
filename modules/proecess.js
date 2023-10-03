// const process = require('process'); // trabaja en global por default

// beforeExit para escuhcar cuando el proceso va a terminar 
process.on('beforeExit', () => {
  console.log('El proeceso va a terminar!');
});

// exit para escuhcar cuando finaliza el proceso
process.on('exit', () => {
  console.log('El proeceso se acabo!');
  setTimeout(() => {
    console.log('nunca se ve!')
  }, 0);
});

setTimeout(() => {
  console.log('si se ve!')
}, 0);

// Utilizado para testing intensivo desde simplemente capturar hasta realizar un envio de alerta por el error
// para execpciones que no se han capturado
process.on('uncaughtException', (err, origen) => {
  // console.error('Error que no capturamos');
  setTimeout(() => {
    console.log('Esto esta en las exceptions')
  }, 0);
  // console.error(err);
});

// para promesas rechazadas sin catch
// process.on('uncaughtRejection');

functionQueNoExiste();
// console.log('Si el error no se captura, no sale!!')
