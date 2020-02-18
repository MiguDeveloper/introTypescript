// Para probar la transpilacion hacemos uso de un funcion autoinvocada
(function () {
    function saludar(nombre: String) {
        console.table('Hola ' + nombre);
    }

    const wolverine = {
        nombre: 'logan'
    }

    saludar(wolverine.nombre);
})();
