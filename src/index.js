"use strict";
console.log('Hola desde Typescript');
// Primitivos
// Number
const cantidadAlumnos = 10;
let notaNumerica;
notaNumerica = 5;
// String
const titulo = 'Hola esto es un titulo';
// Boolean
const estaCargando = true;
// Array
const alumnos = [];
const profesores = [1, 2, 3];
alumnos.push(1);
// Tuplas
const myTupla = [1, 'Hola Mundo'];
Promise.all([
    new Promise((resolve) => resolve(1)),
    new Promise((resolve) => resolve('Hola mundo')),
]).then((res) => console.log(res));
// Enum
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medium"] = 50] = "medium";
    Volumen[Volumen["max"] = 100] = "max";
})(Volumen || (Volumen = {}));
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["Costumer"] = "costumer";
})(Roles || (Roles = {}));
const volumenActual = Volumen.max;
const clienteLoggeado = 'costumer';
if (clienteLoggeado === Roles.Costumer) {
    console.log(`Es un ${Roles.Costumer}`);
}
// Any
let cualquierCosa;
cualquierCosa = 10;
cualquierCosa = '';
// Void
function saludar() {
    console.log('Hola mundo');
    return 12;
}
// Null
const notaActual = null;
// Undefined
const valor = undefined;
// Never
function retornaNever() {
    throw new Error('ERROR');
}
// Object
const alumno = {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
};
