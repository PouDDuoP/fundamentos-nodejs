function helloFn(name, myCallback) {
// function asyncFn(name, myCallback) {
  // console.log('Hola Soy una funcion asincrona');
  setTimeout(function () {
    // console.log('Ahora si soy una funcion asincrona');
    console.log('Hola ' + name);
    myCallback();
  }, 2000);
}

function byeFn(name, myCallback) {
    setTimeout(function () {
      console.log('Chao ' + name);
      myCallback(name);
    }, 1000);
  }

console.log('Iniciando proceso...')
// asyncFn();
// asyncFn(function () {
helloFn('Kevin', function () {
  byeFn('Adrian',function (name) {
    console.log('Finalizando proceso...')
  })
});

helloFn('Kevin', function () {
  console.log('Verificando async hello..')
});

byeFn('Adrian',function () {
  console.log('Verificando async bye..')
})



// Nota: en javaScript las funciones son elementos de primer nivel,y como son de primer neval los puedo utilizar como paramentros 