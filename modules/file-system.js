// FS = file system utilizado para cosas como hacer grabados en disco, base de datos, etc
const fs = require('fs');

// leemos algun archivo con fs.readFile
function read(route, callback) {
  fs.readFile(route, (err, data) => {
    // console.log(data);
    console.log(data.toString());
  });
}

// Creamos un archivo con fs.writeFile
function write(route, content, callback) {
  fs.writeFile(route, content, (err) => {
    if (err) {
      console.log('No se pudo escribir nada ', err);
    } else {
      console.log('Se ha escrito algo ');
    }
  })
}

// Borramos un archivo con fs.unlink
function remove(route, callback) {
  fs.unlink(route, callback);
}

write(__dirname + '/archivo1.txt',  'Soy Un archivo nuevo', console.log)
read(__dirname + '/archivo.txt', console.log)
remove(__dirname + '/archivo1.txt', console.log)
