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



// Controlador de videos
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const videoSearch = document.getElementById('videoSearch');
    
    // Datos de los videos (simulados)
    const videoData = {
        'dQw4w9WgXcQ': {
            title: 'Rutina diaria de cuidado podológico',
            description: 'Aprende los pasos básicos para mantener tus pies saludables todos los días. Recomendado por podólogos certificados.'
        },
        '9bZkp7q19f0': {
            title: 'Cómo cortar uñas correctamente',
            description: 'Técnica profesional para cortar uñas de los pies y evitar problemas como uñas encarnadas.'
        },
        'JGwWNGJdvx8': {
            title: 'Tratamiento para hongos en las uñas',
            description: 'Métodos efectivos para eliminar hongos y prevenir su reaparición. Productos recomendados.'
        },
        'kJQP7kiw5Fk': {
            title: 'Alivio para juanetes y dedos en martillo',
            description: 'Ejercicios y consejos para reducir el dolor y mejorar la movilidad.'
        }
    };
    
    // Cambiar video al hacer clic
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            
            // Actualizar clase activa
            videoItems.forEach(v => v.classList.remove('active'));
            this.classList.add('active');
            
            // Cambiar video
            youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
            
            // Actualizar información
            if (videoData[videoId]) {
                videoTitle.textContent = videoData[videoId].title;
                videoDescription.textContent = videoData[videoId].description;
            }
        });
    });
    
    // Búsqueda de videos (simulada)
    videoSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        videoItems.forEach(item => {
            const title = item.querySelector('h5').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});