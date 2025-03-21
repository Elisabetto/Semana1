<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $fecha = htmlspecialchars($_POST["fecha"]);
    $hora = htmlspecialchars($_POST["hora"]);
    $personas = htmlspecialchars($_POST["personas"]);


    //Mostrar datos en pantalla
    echo "<h3>Detalles de la Reserva</h3>";
    echo "<p>Nombre: $nombre</p>";
    echo "<p>Correo Electrónico: $correo</p>";
    echo "<p>Teléfono: $telefono</p>";
    echo "<p>Fecha de la Reserva: $fecha</p>";
    echo "<p>Hora de la Reserva: $hora</p>";
    echo "<p>Número de personas: $personas</p>";


    echo "<p>¡Gracias por realizar tu reserva!</p>";


}

?>