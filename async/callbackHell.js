function helloFn(name, myCallback) {
// function asyncFn(name, myCallback) {
  // console.log('Hola Soy una funcion asincrona');
  setTimeout(function() {
    // console.log('Ahora si soy una funcion asincrona');
    console.log('Hola ' + name);
    myCallback(name);
  }, 2000);
}

function byeFn(name, myCallback) {
  setTimeout(function () {
    console.log('Chao ' + name);
    myCallback(name);
  }, 1000);
}

function speakFn(myCallbackSpeak) {
  setTimeout(function() {
    console.log('Estoy hablando...');
    myCallbackSpeak();
  }, 1000);
}

// Solucion al problema de los callback, creado una funcion con 3 parametros y realizando el proceso n cantidad e veces me indiquen.
function conversationFn(name, n, callback){
  if (n > 0) {
    speakFn(function() {
      conversationFn(name, --n, callback);
    });
  } else {
    byeFn(name, callback);
  }
}

console.log('Iniciando proceso...');
helloFn('Kevin', function(name) {
  conversationFn('Kevin', 3, function() {
    console.log('Proceso Finalizado...');
  });
});

// Ejemplo de Callback Hell 
// asyncFn();
// asyncFn(function () {
// helloFn('Kevin', function() {
//   speakFn(function(){
//     speakFn(function(){
//       speakFn(function(){
//         byeFn('Kevin',function(name) {
//           console.log('Finalizando proceso...');
//         });
//       });
//     });
//   });
  
// });
