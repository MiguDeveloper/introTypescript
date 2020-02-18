(function () {
    /** 'let': Las variables de tipo 'let' solo existen en un determinado scope y a la vez permite validar que la variable
     * no sea declarada en el mismo scope
     * 'const': aquella variable que nunca cambia de valor y por convencion debe estar en mayusculas
     */
    let mensaje = 'hola';
    const MSG = 'mensaje';

    if (true){
        let mensaje = 'mundo';
    }


    let cadena: string = '1234';
    let numero: number = 1234;
    let booleano: boolean= true;
    let hoy: Date = new Date();

    let cualquierTipo;
    cualquierTipo = 'fnekfn';
    cualquierTipo = 1212;

    let spiderman = {
        nombre: 'peter',
        edad: 37
    };

    spiderman = {
        nombre: 'mle',
        edad: 43
    }


    console.log(mensaje);
})()
