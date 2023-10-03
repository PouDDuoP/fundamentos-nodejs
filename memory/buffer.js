// Buffer.alloc(n) guardamos n cantidad de espacios en memoria
// buffer no sirve para trabajar los datos

// let buffer = Buffer.alloc(5);
// console.log(buffer);

// Buffer.from([1, 2, 3]) reservamos y guardamos en cada espacio del buffer
// let buffer = Buffer.from([1, 2, 3]);
// console.log(buffer);

// para guardar textos en el Buffer.from('Hola')
let buffer = Buffer.from('Hola');
console.log(buffer);
console.log(buffer.toString());

// --

// Creamos el abcedario con el buffer asignando los valores en exadecimal
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc);
console.log(abc.toString());
