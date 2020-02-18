(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    class Heroe {
        nombre: string;
        clave: string;
        poder: string;
    }

    // con la desestructuracion ya no necesito tener el objeto y sacar uno por uno usando 'avenger'
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    // simplemente hacemos que sacamos los tres propiedades en una sola linea
    const {nombre, clave, poder} = avenger;
    console.log(nombre);
    console.log(clave);
    console.log(poder);

    // podemos aplicar la desestructuracion como argumento de la funcion
    const extraer = ({nombre, poder}: any) => {
        console.log(nombre);
        console.log(poder);
    }

    extraer(avenger);

    // Desestructuracion de arreglos
    const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const [primero, segundo, tercero] = avengers;

    console.log(primero);
    console.log(segundo);
    console.log(tercero);

    const extraerArreglo = ([uno, dos, tres]: string[]) => {
        console.log(uno);
        console.log(dos);
        console.log(tres);
    }

    console.log('parametro arreglo')
    extraerArreglo(avengers);

    /*
    let lstAvengers: Heroe[] = [new Heroe('unoNombre', 'unoClave', 'unoPoder'),
        new Heroe('dosNombre', 'dosClave', 'dosPoder'),
        new Heroe('tresnombre', 'tresClave', 'tresPoder')];

     */
    let lstAvengers2: Heroe[] = [{nombre: 'unoNombre', clave: 'unoClave', poder: 'unoPoder'},
        {nombre: 'dosNombre', clave: 'dosClave', poder: 'dosPoder'},
        {nombre: 'tresnombre', clave: 'tresClave', poder: 'tresPoder'}];

    console.log('Arrays de objetos:')
    let getObjectOfListHeroes = ([priObj, segObj, tercObj]: Heroe[]) => {
        console.log(priObj.nombre);
        console.log(segObj.nombre);
        console.log(tercObj.nombre);
    }

    getObjectOfListHeroes(lstAvengers2);

})()
