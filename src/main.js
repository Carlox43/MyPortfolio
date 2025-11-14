// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader-container").classList.add("fade-out");
    }, 1000);
});

// Inicializar AOS (Animate on scroll)
AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
});

// Partículas en el hero
document.addEventListener("DOMContentLoaded", function () {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#1abc9c" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#9b59b6",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 },
                },
            },
        });
    }
});

// Navegación fija al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const backToTop = document.querySelector(".back-to-top");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        backToTop.classList.add("active");
    } else {
        navbar.classList.remove("scrolled");
        backToTop.classList.remove("active");
    }
});

// Animación de las barras de progreso de habilidades
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = `${width}%`;
    });
};

// Observador de intersección para activar las barras de progreso cuando sean visibles
const skillsSection = document.querySelector("#skills");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

observer.observe(skillsSection);


// Manejar menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Cambiar icono de hamburguesa
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


// Cambio de idioma
const languageToggle = document.querySelector('.language-toggle');
const languageText = document.querySelector('.language-text');
let currentLanguage = 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    const texts = translations[lang];

    // Actualizar textos
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });

    // Actualizar botón de idioma
    languageText.textContent = lang === 'es' ? 'EN' : 'ES';

    // Guardar preferencia
    localStorage.setItem('preferredLanguage', lang);
}

// Toggle de idioma
languageToggle.addEventListener('click', () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
});

// Sistema de temas mejorado
const themeToggle = document.querySelector('.theme-toggle');
let currentTheme = 'dark';

// Función para cambiar tema
function changeTheme(theme) {
    currentTheme = theme;
    document.body.classList.toggle('light-theme', theme === 'light');

    // Actualizar icono
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-adjust' : 'fas fa-sun';

    // Guardar preferencia
    localStorage.setItem('preferredTheme', theme);
}

// Toggle de tema mejorado
themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme);
});

// Cargar preferencias guardadas al iniciar
document.addEventListener('DOMContentLoaded', function () {
    // Cargar tema
    const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
    changeTheme(savedTheme);

    // Cargar idioma
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
});