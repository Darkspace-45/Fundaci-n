// Manejo del cambio de secciones con desvanecimiento de imágenes
let currentSection = 0; // Variable para rastrear la sección actual
const sections = document.querySelectorAll('.hero');
const images = document.querySelectorAll('.hero .media'); // Imágenes en cada sección

// Función para cambiar de sección con desvanecimiento
function changeSection() {
    sections.forEach((section, index) => {
        // Cuando la sección es la actual, se muestra
        if (index === currentSection) {
            section.style.opacity = 1;
            images[index].style.opacity = 1; // Muestra la imagen de la sección actual
        } else {
            section.style.opacity = 0;
            images[index].style.opacity = 0; // Desvanece la imagen de la sección anterior
        }
    });
}

// Evento de desplazamiento para cambiar la sección
window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    // Cambiar la sección cuando el desplazamiento alcanza el final de la sección anterior
    if (offset > sections[1].offsetTop - window.innerHeight / 2) {
        currentSection = 1;
    } else {
        currentSection = 0;
    }

    changeSection();
});

// Inicialización: Desvanecer las secciones al cargar la página
document.addEventListener('DOMContentLoaded', changeSection);
