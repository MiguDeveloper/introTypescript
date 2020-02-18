"use strict";
// Para probar la transpilacion hacemos uso de un funcion autoinvocada
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre);
    }
    var wolverine = {
        nombre: 'logan'
    };
    saludar(wolverine.nombre);
})();
