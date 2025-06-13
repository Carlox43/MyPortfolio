// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Toggle Menu Móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Cerrar menú móvil al hacer clic en un enlace
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const loadingState = document.getElementById('loading');
const successState = document.getElementById('success');
const errorState = document.getElementById('error');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validación del formulario
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

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

  // Validación básica de email
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

  // Mostrar estado de carga
  formStatus.classList.remove('hidden');
  loadingState.classList.remove('hidden');
  successState.classList.add('hidden');
  errorState.classList.add('hidden');

  // Simular envío (en una versión real, aquí iría la llamada a la API)
  setTimeout(() => {
    loadingState.classList.add('hidden');

    // Simulamos éxito (en una implementación real, esto dependería de la respuesta de la API)
    const success = true;

    if (success) {
      successState.classList.remove('hidden');
      contactForm.reset();
    } else {
      errorState.classList.remove('hidden');
    }

    // Ocultar mensaje después de un tiempo
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 5000);
  }, 1500);
});

// Animación suave de scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para el navbar fijo
        behavior: 'smooth'
      });
    }
  });
});