// Agregar evento de clic al botón del menú
document.querySelector('.boton-menu').addEventListener('click', function() {
    // Mostrar u ocultar el menú desplegable
    document.querySelector('.opciones-menu').classList.toggle('mostrar');
  });
  
  // Agregar evento de clic a cada opción del menú
  document.querySelectorAll('.opcion-menu').forEach(function(opcion) {
    opcion.addEventListener('click', function() {
      // Realizar la acción correspondiente a la opción seleccionada
      switch (opcion.textContent) {
        case 'Poner modo anónimo':
          // Activar el modo anónimo
          console.log('Modo anónimo activado');
          break;
        case 'Cerrar sesión':
          // Cerrar la sesión
          console.log('Sesión cerrada');
          break;
        default:
          console.log('Opción no reconocida');
      }
    });
  });