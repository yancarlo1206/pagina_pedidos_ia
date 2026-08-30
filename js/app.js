// Variable para acumular el pedido (arreglo de objetos)
const pedido = [];

// Seleccionamos todos los botones con la clase .btn-agregar
const botonesAgregar = document.querySelectorAll('.btn-agregar');

// Recorremos la lista de botones y agregamos el listener de clic a cada uno
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function() {
        // Leemos el nombre y el precio desde los atributos data-* del botón
        const nombre = this.dataset.nombre;
        const precio = Number(this.dataset.valor);

        // Verificamos si el producto ya existe en nuestro arreglo de pedido
        const productoExistente = pedido.find(item => item.nombre === nombre);

        if (productoExistente) {
            // Si ya existe, aumentamos su cantidad en 1
            productoExistente.cantidad += 1;
        } else {
            // Si no existe, creamos el objeto con nombre, precio y cantidad (1 por defecto)
            const nuevoProducto = {
                nombre: nombre,
                precio: precio,
                cantidad: 1
            };
            pedido.push(nuevoProducto);
        }

        // Mostramos el arreglo de objetos acumulado en consola
        console.log("🛒 Estado actual del pedido:", pedido);
    });
});
