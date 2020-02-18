"use strict";
/**
 * Funciones con parametros opcionales
 */
(function () {
    function activar(quien, momento, objeto = 'batiseñal') {
        if (momento) {
            console.log(`${quien} activo la ${objeto} en la ${momento}.`);
        }
        else {
            console.log(`${quien} activo la ${objeto}.`);
        }
    }
    activar('Gordon', 'tarde');
})();
