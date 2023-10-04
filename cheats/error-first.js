// Realizar las funciones con un callback predefinido para errores, trabajar pensando que todo puede fallar en cualquier momento.

function asynchronous(callback) {
  setTimeout(function() {
    try {
      let a = 3 + h;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

asynchronous(function(err, dato){
  if (err) {
    console.error('Se ha generado un error');
    console.error(err);
    return false;
    // throw err; // throw este patron funciona bien para las fonciones sincronas pero no para las asincronas
  }

  console.log('Todo Ok ', dato)
});

