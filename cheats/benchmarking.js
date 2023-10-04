// console.time('texto'); y console.timeEnd('texto'); los utilizamos para ver cuanto tarda el proceso en llegar a su conclusion 

let suma = 0 

console.time('todo');

console.time('bucle');
for (let i = 0; i < 1000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let sumaTwo = 0 

console.time('bucle two');
for (let j = 0; j < 100000000; j++) {
  sumaTwo += 1;
}
console.timeEnd('bucle two');

console.time('async')
console.log('init del proceso asincrono')
asynchronous()
  .then(() => {
    console.timeEnd('async')
  })

console.timeEnd('todo');

function asynchronous() {
  return new Promise((resolve) =>{
    setTimeout(function() {
      console.log('Fin del proceso asincrono');
      resolve();
    })
  })
}