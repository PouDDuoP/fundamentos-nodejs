const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Peticion HTTP');
  console.log(req.url);


  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal');
      res.end();
      break;
    default:
      res.write('Error 404: No se encontro esa ruta');
      res.end();
  }
  res.writeHead(201, { 'Content-Type': 'text/plain' });
  
  // respuesta a peticion http desde browser
  res.write('Hola HTTP de NodeJS')

  res.end();
}

console.log('Escuchando HTTP en puerto 3000');