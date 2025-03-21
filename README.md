###Descripción:
<p>
Es un sitio web diseñado para un restaurante especializado en gastronomía japonesa. En la página principal, se puede encontrar información general sobre los restaurantes. Además, cuenta con una sección de carta, donde se presentan los platos disponibles, una pequeña descripción de la comida y los precios.
También incluye un apartado de servicios adicionales que se ofrece, como reuniones privadas entre otras. Por ultimo dispone de un apartado de reservas bastante sencillo de utilizar.
</p>

###Herramientas utilizadas:
<ul>
	<li><strong>HTML:</strong> Estructura básica de la página web.</li>
	<li><strong>CSS:</strong> Estilo y diseño visual.</li>
	<li><strong>JavaScript:</strong> Funcionalidad y validación de formulario.-</li>
	<li><strong>PHP:</strong> Procesamiento de las reservas.</li>
</ul>

###Archivos HTML:

- <strong>index.html: </strong>Archivo principal del sitio web. Contiene un menú de navegación con enlaces a cuatro secciones: Inicio, Carta, Servicios y Reserva. En la sección principal, se presenta una descripción conceptual del restaurante, organizada en párrafos. Además, se incluye un horario utilizando una lista de definición (<code>&lt;dl&gt;</code>), que muestra los días de la semana y las horas de atención.

- <strong>carta.html: </strong>En este archivo se presenta la carta. Está organizada en secciones claras: Entrantes, Sushi y Sashimi, Platos Principales, Postres y Bebidas. Cada plato está acompañado de una breve descripción y dándole énfasis al precio mediante (<code>&lt;strong&gt;</code>).

- <strong>servicios.html: </strong>Este archivo detalla los servicios que ofrece el restaurante. Hay dos opciones disponibles. La **Cocina abierta en la barra**, una experiencia culinaria interactiva donde los comensales pueden ver al chef preparar los platillos en tiempo real. También se encuentra el **Servicio de Reuniones**, para grupos de hasta 20 personas (eventos privados o reuniones. Contiene unos botones interactivos para ver más detalles sobre los servicios.

- <strong>reserva.html: </strong>El archivo permite realizar una reserva en el restaurante. El formulario incluye campos para ingresar el nombre, correo electrónico, número de teléfono, fecha, hora y el número de personas para la reserva. Además, se han implementado validaciones para asegurar que todos los campos necesarios sean completados antes de enviar el formulario.

###Archivos CSS:

- <strong>style.css: </strong>Contiene los estilos generales que se aplican a todas las páginas del sitio. Define el estilo de la cabecera añadiendole al título un diseño así como al menú de navegación, fondo y el pie de página.

- <strong>index.css: </strong>Se centra en modificar el estilo predeterminado de los párrafos y su estructura. La imagen cambia de tamaño y posición.

- <strong>carta.css: </strong>Se le da una alineación centrada al texto, y un espaciado entre los elementos de la lista.

- <strong>servicios.css: </strong>Las imagenes se ajustan y se centran, los botones se modifican para tener un aspecto acorde a la página y se añade la clase 'mostrar' para ocultar y mostrar elementos en la página.

- <strong>reserva.css: </strong>Se añade una caja para el formulario con un color de fondo, el formulario se organiza en columna y se cambia el diseño del botón.

###Archivos JavaScript:
- <strong>servicios.js: </strong>Se utiliza la función *mostrarOcultar* para cambiar la visibilidad de un elemento. Se asocia la función a dos botones mediante *addEventListener*. Al hacer clic en el primer botón, se ejecuta la función mostrarOcultar para mostrar o ocultar el contenido con el ID *detallesServicios1*. Y lo mismo con el segundo botón.

- <strong>reserva.js: </strong>Se utiliza un *addEventListener* en el formulario para el evento submit. Al enviarse el formulario, la función evita el envío por defecto con *event.preventDefault()*. Luego, recoge los valores de los campos del formulario y valida el número de teléfono usando una expresión regular.  Si todo está correcto, muestra una alerta de éxito y limpia los campos del formulario con *reset()*.

###Archivo PHP:
- <strong>reserva.php: </strong>Este código PHP se ejecuta cuando se envía el formulario mediante el método POST.  Los datos del formulario (nombre, correo, teléfono, fecha, hora y número de personas) se recogen utilizando *$_POST*.
Una vez los datos son recibidos y procesados, se muestran en la página utilizando *echo*.
