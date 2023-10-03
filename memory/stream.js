// streams de lecturas: el origen recoje datos, de escritura: el destino los recoje, de doble sentido: es bidireccional 
const fs = require('fs');
const stream = require('stream');
const util = require('util')

let data = '';

// de Lectura
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
  // console.log(chunk);
  // console.log(chunk.toString());
  data += chunk;
});

readableStream.on('end', function() {
  console.log(data);
});

// de escritura
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');

// Bidireccional
const Transform = stream.Transform

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);
Mayus.prototype._transform = function(chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
} 

let mayus = new Mayus();

readableStream
  .pipe(mayus)
  .pipe(process.stdout);