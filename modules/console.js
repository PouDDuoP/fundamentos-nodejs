// console.log nos muestra algo, sea un string, objeto, array, numero, lo que va hacer es mostrar
console.log('.log');

// console.info realiza lo mismo que console.log, pero con personalizacion de log es buena practica
console.info('.info');

// console.error arroja lo que le indiquemos como parametro, como un error
console.error('.error');

// console.warn lo utilizamos para aquello que pueda reprensentar un error 
console.warn('.warn');

// Arroja los datos que le enviemos en forma de tabla 
var tabla = [
  { a: 1, b: 'H' },
  { a: 2, b: 'Hola' }
];
console.table(tabla);

// console.group y console.groupEnd nos permiten agrupar multiples logs en un solo log
console.log('Charla');
console.group('platica');
console.log('Hola');
console.group('charlando');
console.log('Charlando........');
console.log('Charlando........');
console.log('Charlando........');
console.log('Charlando........');
console.groupEnd('charlando');
console.log('Chao');
console.groupEnd('platica');

// Debug utilizando console.group
function oneFn() {
  console.group('oneFn');
  console.log('Estoy en oneFn');
  console.log('Estoy en oneFn');
  console.log('Estoy en oneFn');
  twoFn();
  console.log('Regrese a oneFn');
  console.groupEnd('oneFn');
}

function twoFn() {
  console.group('twoFn');
  console.log('Estoy en twoFn');
  console.log('Estoy en twoFn');
  console.log('Estoy en twoFn');
  console.groupEnd('twoFn');
}

console.log('Iniciamos las funciones');
oneFn();

// console.count para crear contadores y console.countReset reinicia el contador 
console.count('Count cantidad');
console.count('Count cantidad');
console.count('Count cantidad');
console.count('Count cantidad');
console.countReset('Count cantidad');
console.count('Count cantidad');