// Datos de los Servicios
const services = {
    faros: {
        title: "Restauración de Faros",
        description: "Proceso de pulida y nano cristalino para recobrar la vida de los faros de tu vehículo. ✨"
    },
    enderezada: {
        title: "Enderezada 3D Sin Masilla",
        description: "Técnica avanzada para devolver la forma original sin necesidad de usar masilla."
    },
    reparaciones: {
        title: "Reparaciones Express",
        description: "Soluciones rápidas y eficientes para pequeños daños en tu vehículo."
    },
    clasicos: {
        title: "Restauración de Autos Clásicos",
        description: "Proceso detallado para devolver el esplendor a autos clásicos."
    },
    pulida: {
        title: "Pulida Total de Carrocería",
        description: "Eliminación de daños menores en la capa superficial sin repintar."
    },
    extraccion: {
        title: "Extracción Sin Repintar",
        description: "Técnica 0 invasiva para conservar el estado original del auto."
    }
};

// Mostrar Descripción
function showDescription(serviceKey) {
    const modal = document.getElementById('service-modal');
    const title = document.getElementById('service-title');
    const description = document.getElementById('service-description');

    title.innerText = services[serviceKey].title;
    description.innerText = services[serviceKey].description;

    modal.style.display = 'block';
}

// Cerrar Modal
function closeDescription() {
    document.getElementById('service-modal').style.display = 'none';
}

// 🍔 Menú Hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

// 🎥 Modal para Galería de Videos
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close-btn');
    const fullscreenButtons = document.querySelectorAll('.btn-fullscreen');

    // 🌟 Abrir video en modal
    fullscreenButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const video = e.target.parentElement.querySelector('video source').src;
            modalVideo.src = video;
            modal.style.display = 'flex';
        });
    });

    // 🌟 Cerrar el modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.src = '';
    });

    // 🌟 Cerrar el modal al hacer clic fuera del contenido del video
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = '';
        }
    });
});

// 🌟 Transición suave entre páginas
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !link.target) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = href;
                }, 300); // Tiempo de la transición
            }
        });
    });
});
