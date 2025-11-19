// form.js
import { EMAILJS_CONFIG } from './email-config.js';

// Inicializar EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

// Validaciones
const validations = {
    name: (value) => {
        if (!value.trim()) return 'El nombre es requerido';
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return 'El nombre solo puede contener letras';
        return null;
    },

    email: (value) => {
        if (!value.trim()) return 'El email es requerido';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Ingresa un email válido';
        return null;
    },

    subject: (value) => {
        if (!value.trim()) return 'El asunto es requerido';
        if (value.length < 5) return 'El asunto debe tener al menos 5 caracteres';
        return null;
    },

    message: (value) => {
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (value.length > 1000) return 'El mensaje no puede exceder 1000 caracteres';
        return null;
    }
};

// Funciones de utilidad
function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    const inputElement = document.getElementById(field);

    errorElement.textContent = message;
    inputElement.classList.add('error');
    inputElement.classList.remove('success');
}

function clearError(field) {
    const errorElement = document.getElementById(`${field}Error`);
    const inputElement = document.getElementById(field);

    errorElement.textContent = '';
    inputElement.classList.remove('error');
    inputElement.classList.add('success');
}

function showGlobalMessage(message, type = 'success') {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (type === 'success') {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    setTimeout(() => {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }, 5000);
}

function setLoadingState(loading) {
    if (loading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.setAttribute('data-original-text', submitBtn.textContent);
        submitBtn.textContent = '';
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = submitBtn.getAttribute('data-original-text') || 'Enviar Mensaje';
    }
}

// Validación en tiempo real
Object.keys(validations).forEach(field => {
    const input = document.getElementById(field);
    if (input) {
        input.addEventListener('blur', () => validateField(field));
        input.addEventListener('input', () => {
            // Limpiar error mientras escribe
            const errorElement = document.getElementById(`${field}Error`);
            if (errorElement.textContent) {
                clearError(field);
            }
        });
    }
});

function validateField(field) {
    const value = document.getElementById(field).value;
    const error = validations[field](value);

    if (error) {
        showError(field, error);
        return false;
    } else {
        clearError(field);
        return true;
    }
}

function validateForm() {
    let isValid = true;

    Object.keys(validations).forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

// Manejo del envío del formulario
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            showGlobalMessage('Por favor, corrige los errores del formulario.', 'error');
            return;
        }

        setLoadingState(true);

        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: 'carlossalazara43@gmail.com' // Tu email de destino
            };

            // Enviar con EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formData
            );

            if (response.status === 200) {
                showGlobalMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                contactForm.reset();

                // Limpiar estados de validación
                Object.keys(validations).forEach(field => {
                    clearError(field);
                    document.getElementById(field).classList.remove('success');
                });

                // Limpiar localStorage
                ['name', 'email', 'subject', 'message'].forEach(field => {
                    localStorage.removeItem(`contact_${field}`);
                });
            }

        } catch (error) {
            console.error('Error enviando el formulario:', error);
            showGlobalMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
        } finally {
            setLoadingState(false);
        }
    });

    // Guardar datos en localStorage mientras se escribe
    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
        // Cargar datos guardados
        const savedValue = localStorage.getItem(`contact_${input.id}`);
        if (savedValue) input.value = savedValue;

        // Guardar mientras escribe
        input.addEventListener("input", () => {
            localStorage.setItem(`contact_${input.id}`, input.value);
        });
    });
}

// Traducciones para mensajes de error
const errorMessages = {
    es: {
        required: 'Este campo es requerido',
        email: 'Ingresa un email válido',
        minLength: 'Debe tener al menos {min} caracteres',
        maxLength: 'No puede exceder {max} caracteres',
        lettersOnly: 'Solo se permiten letras'
    },
    en: {
        required: 'This field is required',
        email: 'Please enter a valid email',
        minLength: 'Must be at least {min} characters',
        maxLength: 'Cannot exceed {max} characters',
        lettersOnly: 'Only letters are allowed'
    }
};

// Actualizar mensajes de error al cambiar idioma
function updateErrorMessages(lang) {
    const currentLang = errorMessages[lang] || errorMessages.es;

    // Actualizar placeholders de mensajes de error si es necesario
    console.log('Idioma de errores actualizado a:', lang);
}

export { validateForm, updateErrorMessages };