// para interfaces de bajo nivel se utilizaria os
const os = require('os');

console.log(os.arch()); // nos indica la arquitectura
console.log(os.platform()); // nos indica el sistema operativo
console.log(os.cpus()); // informacion de las cpu
console.log(os.cpus().length); // cantidad de cores
console.log(os.constants); // muestra errores y propiedades del sistema
console.log(os.freemem()); // cantidad de memoria libre

const SIZE = 1024
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// espacios en memoria con os.freemem() y 4 funciones puedo verificar hastas gb
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// totalmem() totalidad en momoria que poseo
console.log(gb(os.totalmem()));

// os.homedir() para obtener el Directoria raiz del usuario 
console.log(os.homedir());

// para obtener el directorio de temporales
console.log(os.tmpdir());

// os.hostname() para ver el nombre del host de na maquina 
console.log(os.hostname());

// os.networkInterfaces() para ver las interfaces de red de la maquina
console.log(os.networkInterfaces());