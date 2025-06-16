// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});

// Toggle menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Cerrar menú móvil al hacer clic en un enlace
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Elementos del formulario y estados
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const loadingState = document.getElementById('loading');
const successState = document.getElementById('success');
const errorState = document.getElementById('error');

// Validaciones al enviar formulario (solo validación, envío queda en script externo)
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = contactForm.querySelector('#name');
  const emailInput = contactForm.querySelector('#email');
  const messageInput = contactForm.querySelector('#message');

  if (!nameInput.value.trim()) {
    alert('Por favor, ingresa tu nombre.');
    nameInput.focus();
    return;
  }

  if (!emailInput.value.trim()) {
    alert('Por favor, ingresa tu email.');
    emailInput.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert('Por favor, ingresa un email válido.');
    emailInput.focus();
    return;
  }

  if (!messageInput.value.trim()) {
    alert('Por favor, ingresa tu mensaje.');
    messageInput.focus();
    return;
  }

  // Aquí solo mostramos el estado, el envío lo controla el script externo
  formStatus.classList.remove('hidden');
  loadingState.classList.remove('hidden');
  successState.classList.add('hidden');
  errorState.classList.add('hidden');
});

// Animación suave para scroll a secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  });
});
