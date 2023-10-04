const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Peticion HTTP');
  console.log(req.url);


  switch (req.url) {
    case '/hola':
      let greet = hello();
      res.write(greet);
      res.end();
      break;
    default:
      res.write('Error 404: No se encontro esa ruta');
      res.end();
  }
  res.writeHead(201, { 'Content-Type': 'text/plain' });
  
  // respuesta a peticion http desde browser
  // res.write('Hola HTTP de NodeJS');

  res.end();
}

function hello() {
  return 'Hola, que tal';
}

console.log('Escuchando HTTP en puerto 3000');