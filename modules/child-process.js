// Importamos child_process
const { exec, spawn } = require('child_process');

// con exec puedo ejecutar comandos de terminal, por ejemeplo ejecutar algun archivo py en un proyecto
// exec('node modules/console.js', (err, stdout, sterr) => {
//     if (err) {
//       console.error(err);
//       return false
//     }
//     console.log(stdout);
// });

let process = spawn('dir');
console.log(process.id)
console.log(process.connected)

// // Nota no logre hacer funcionar el comando en Windows 
process.stdout.on('data', function(dato) {
  console.log('process live?');
  console.log(process.kill);
  //   console.log(dato)
  console.log(dato.toString());
})

process.on('exit', function() {
  console.log('El proceso finalizo');
  console.log(process.kill);
});