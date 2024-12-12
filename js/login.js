document.getElementById("btnLogin").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;

    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "index.html"; // Redirigir a la página principal o a otra página
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
});


// Maneja el evento del botón "Registrar"
document.getElementById("btnRegistrar").addEventListener("click", function() {
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;

    if (username && password) {
        // Aquí puedes guardar el usuario en localStorage o en una base de datos
        localStorage.setItem(username, password);
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});