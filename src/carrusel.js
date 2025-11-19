// Carrusel functionality
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    // Obtener todos los proyectos del grid original
    const projectCards = document.querySelectorAll('.project-card');

    if (projectCards.length === 0) {
        console.log('No se encontraron proyectos para el carrusel');
        return;
    }

    let currentSlide = 0;
    let isMobile = window.innerWidth <= 768;

    // Limpiar contenedores
    track.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Crear slides para el carrusel
    projectCards.forEach((card, index) => {
        // Crear slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = card.innerHTML;
        track.appendChild(slide);

        // Crear indicador
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Ir al proyecto ${index + 1}`);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // Funciones del carrusel
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Actualizar indicadores
        document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % projectCards.length;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + projectCards.length) % projectCards.length;
        goToSlide(currentSlide);
    }

    // Event listeners SOLO para desktop
    if (!isMobile) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Swipe para móvil - MEJORADO
    let startX = 0;
    let endX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        if (!isDragging) return;
        handleSwipe();
        isDragging = false;
    });

    // Click en indicadores funciona en todos los dispositivos
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe izquierda
            } else {
                prevSlide(); // Swipe derecha
            }
        }
    }

    // Auto-avance para móvil (opcional)
    if (isMobile) {
        let mobileAutoPlay = setInterval(nextSlide, 4000);

        // Pausar al tocar
        track.addEventListener('touchstart', () => {
            clearInterval(mobileAutoPlay);
        });

        track.addEventListener('touchend', () => {
            mobileAutoPlay = setInterval(nextSlide, 4000);
        });
    }

    console.log('Carrusel inicializado:', projectCards.length, 'proyectos -', isMobile ? 'Móvil' : 'Desktop');
}

// Re-inicializar al cambiar tamaño de ventana
// window.addEventListener('resize', function () {
//     const track = document.getElementById('carouselTrack');
//     if (track && track.children.length > 0) {
//         initCarousel();
//     }
// });

// Inicializar carrusel
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initCarousel, 100);
});