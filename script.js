// Puedes agregar funcionalidades adicionales aquí si es necesario
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Añadir clase active al hacer clic en un item del menú
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});