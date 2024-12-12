// Crear publicación
document.getElementById("boton-crear-publicacion").addEventListener("click", function() {
  var titulo = document.getElementById("titulo-publicacion").value;
  var contenido = document.getElementById("contenido-publicacion").value;
  // Crear publicación en la base de datos
  fetch("/api/publicaciones", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      contenido: contenido
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Actualizar la lista de publicaciones en la página
    var publicaciones = document.getElementById("publicaciones");
    var nuevaPublicacion = document.createElement("div");
    nuevaPublicacion.innerHTML = `
      <h2>${titulo}</h2>
      <p>${contenido}</p>
      <button class="boton-comentar">Comentar</button>
      <div class="comentarios"></div>
    `;
    publicaciones.appendChild(nuevaPublicacion);
  });
});

// Comentar
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("boton-comentar")) {
    var publicacion = event.target.parentNode;
    var comentario = document.getElementById("comentario").value;
    // Crear comentario en la base de datos
    fetch("/api/comentarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        publicacion: publicacion.id,
        comentario: comentario
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Actualizar la lista de comentarios en la publicación
      var comentarios = publicacion.querySelector(".comentarios");
      var nuevoComentario = document.createElement("div");
      nuevoComentario.innerHTML = `
        <p>${comentario}</p>
        <button class="boton-responder">Responder</button>
      `;
      comentarios.appendChild(nuevoComentario);
    });
  }
});

// Responder
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("boton-responder")) {
    var comentario = event.target.parentNode;
    var respuesta = document.getElementById("respuesta").value;
    // Crear respuesta en la base de datos
    fetch("/api/respuestas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comentario: comentario.id,
        respuesta: respuesta
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Actualizar la lista de respuestas en el comentario
      var respuestas = comentario.querySelector(".respuestas");
      var nuevaRespuesta = document.createElement("div");
      nuevaRespuesta.innerHTML = `
        <p>${respuesta}</p>
      `;
      respuestas.appendChild(nuevaRespuesta);
    });
  }
});