"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    var Heroe = /** @class */ (function () {
        function Heroe() {
        }
        return Heroe;
    }());
    // con la desestructuracion ya no necesito tener el objeto y sacar uno por uno usando 'avenger'
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    // simplemente hacemos que sacamos los tres propiedades en una sola linea
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    // podemos aplicar la desestructuracion como argumento de la funcion
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    // Desestructuracion de arreglos
    var avengers = ['Thor', 'Iroman', 'Spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    var primero = avengers[0], segundo = avengers[1], tercero = avengers[2];
    console.log(primero);
    console.log(segundo);
    console.log(tercero);
    var extraerArreglo = function (_a) {
        var uno = _a[0], dos = _a[1], tres = _a[2];
        console.log(uno);
        console.log(dos);
        console.log(tres);
    };
    console.log('parametro arreglo');
    extraerArreglo(avengers);
    /*
    let lstAvengers: Heroe[] = [new Heroe('unoNombre', 'unoClave', 'unoPoder'),
        new Heroe('dosNombre', 'dosClave', 'dosPoder'),
        new Heroe('tresnombre', 'tresClave', 'tresPoder')];

     */
    var lstAvengers2 = [{ nombre: 'unoNombre', clave: 'unoClave', poder: 'unoPoder' },
        { nombre: 'dosNombre', clave: 'dosClave', poder: 'dosPoder' },
        { nombre: 'tresnombre', clave: 'tresClave', poder: 'tresPoder' }];
    console.log('Arrays de objetos:');
    var getObjectOfListHeroes = function (_a) {
        var priObj = _a[0], segObj = _a[1], tercObj = _a[2];
        console.log(priObj.nombre);
        console.log(segObj.nombre);
        console.log(tercObj.nombre);
    };
    getObjectOfListHeroes(lstAvengers2);
})();
