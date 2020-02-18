(() => {
    console.log("inicio");

    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Se termino el timeout');
        }, 1000)
    });

    promesa1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));

    console.log("fin")

    const retirarDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficiente');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })
    };

    retirarDinero(500)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(err => console.warn(err));

})()
