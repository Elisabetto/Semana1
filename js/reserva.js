document.getElementById('formulario-reserva').addEventListener('submit',function(event) {
    event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const personas = document.getElementById('personas').value;

    //Validar número de telefono
    const telefonoValido = /^\d{9}$/.test(telefono) && /^[6-79]/.test(telefono);
    if (!telefonoValido) {
        return alert ('El número de teléfono no es valido')
    }

    alert('Formulario enviado correctamente!');

    //Clean formulario
    document.getElementById('formulario-reserva').reset(); 

});