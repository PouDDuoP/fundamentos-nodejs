function anotherFn() {
  breaks();
}

function breaks() {
  return 3 + h;
}


function breaksAsync(callback) {
  setTimeout(function() {
    try {
      return 3 + h;
    } catch(err) {
      console.log('Error en la funcion Async');
      callback(err)
    }
    
  });
}

try {
  // breaks();
  // anotherFn();
  breaksAsync(function() {
    console.log('Por Aqui Exploto')
  });
} catch(err) {
  console.error('Algo ha generado un problema');
  console.error(err.message);
  console.error(err);
  console.log('Error capturado');
}

