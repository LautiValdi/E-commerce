document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Construye el enlace mailto
    const mailtoLink = `mailto:contacto@tuempresa.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent('Nombre: ' + nombre + '\nCorreo: ' + email + '\n\n' + mensaje)}`;

    // Abre el enlace mailto
    window.location.href = mailtoLink;

    // Resetea el formulario
    document.getElementById('contact-form').reset();
});
