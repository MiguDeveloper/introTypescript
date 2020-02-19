"use strict";
(() => {
    class Avenger {
        // Constructor
        constructor(nombre, equipo) {
            this.nombre = nombre;
            this.equipo = equipo;
        }
    }
    class Avenger2 {
        /*
        nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanadas: number;
         */
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger2('antman', 'Cap');
    console.log(antman);
})();
