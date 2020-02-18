"use strict";
(function () {
    const miFuncion = function (a) {
        return a.toUpperCase();
    };
    const miFuncionF = (a) => a.toUpperCase();
    console.log(miFuncion('normal'));
    console.log(miFuncionF('flecha'));
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    console.log(sumarN(3, 2));
    console.log(sumarF(3, 2));
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
