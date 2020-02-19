(() => {
    class Avenger {
        nombre: string;
        equipo: string;
        nombreReal: string;

        puedePelear: boolean;
        peleasGanadas: number;

        // Constructor

        constructor(nombre: string, equipo: string) {
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

        constructor(public nombre: string,
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear?: boolean,
                    public peleasGanadas: number = 0) {
        }
    }

    const antman = new Avenger2('antman', 'Cap');

    console.log(antman);


})()
