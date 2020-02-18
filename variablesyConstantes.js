"use strict";
(function () {
    /** 'let': Las variables de tipo 'let' solo existen en un determinado scope y a la vez permite validar que la variable
     * no sea declarada en el mismo scope
     * 'const': aquella variable que nunca cambia de valor y por convencion debe estar en mayusculas
     */
    var mensaje = 'hola';
    var MSG = 'mensaje';
    if (true) {
        var mensaje_1 = 'mundo';
    }
    var cadena = '1234';
    var numero = 1234;
    var booleano = true;
    var hoy = new Date();
    var cualquierTipo;
    cualquierTipo = 'fnekfn';
    cualquierTipo = 1212;
    var spiderman = {
        nombre: 'peter',
        edad: 37
    };
    spiderman = {
        nombre: 'mle',
        edad: 43
    };
    console.log(mensaje);
})();
