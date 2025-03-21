function mostrarOcultar(elementId) {
    const element = document.getElementById(elementId);

    element.classList.toggle('mostrar');
}

document.getElementById('cambiarContenidoBtn').addEventListener('click', function() {
    mostrarOcultar('detallesServicios1');

});

document.getElementById('cambiarContenidoBtn2').addEventListener('click', function() {
    mostrarOcultar('detallesServicios2');

});