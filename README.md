Arquitectura basada en eventos con sonido
Este proyecto es un ejemplo de cómo implementar una arquitectura basada en eventos en una página web utilizando JavaScript. La arquitectura basada en eventos es un patrón de diseño comúnmente utilizado en el desarrollo de software para facilitar la comunicación entre distintos componentes de una aplicación de manera desacoplada.

Funcionamiento
JavaScript: El archivo app.js contiene la lógica principal del proyecto. Aquí se define una clase EventEmitter que permite la emisión y escucha de eventos personalizados. Se crea una instancia de esta clase, eventEmitter, para gestionar los eventos en la página.

HTML: El archivo index.html contiene la estructura de la página web. Hay un botón con el id emitButton que se utilizará para emitir un evento cuando se haga clic en él. También se incluye un elemento <audio> para reproducir un sonido cuando se emita el evento.

Reproducción de sonido: Cuando se hace clic en el botón "Emitir evento", se emite un evento de "saludo" utilizando eventEmitter.emit('saludo', nombre). Esto activa un oyente registrado en el archivo app.js que muestra un mensaje de alerta y reproduce un sonido de notificación.

Uso
Clona este repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/tu_usuario/arquitectura-eventos-con-sonido.git
Abre el archivo index.html en tu navegador web.

Haz clic en el botón "Emitir evento" y observa cómo se muestra un mensaje de alerta y se reproduce un sonido de notificación.

Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia de mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

Licencia
Este proyecto está bajo la Licencia MIT.
