
// Manejar el envío del formulario de contacto
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    // Recuperar datos guardados en LocalStorage si existen
    const savedName = localStorage.getItem("contact_name");
    const savedEmail = localStorage.getItem("contact_email");
    const savedSubject = localStorage.getItem("contact_subject");
    const savedMessage = localStorage.getItem("contact_message");

    if (savedName) document.getElementById("name").value = savedName;
    if (savedEmail) document.getElementById("email").value = savedEmail;
    if (savedSubject)
        document.getElementById("subject").value = savedSubject;
    if (savedMessage)
        document.getElementById("message").value = savedMessage;

    // Guardar datos en LocalStorage mientras se escribe
    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
        input.addEventListener("input", () => {
            localStorage.setItem(`contact_${input.id}`, input.value);
        });
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validación del formulario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        // Mostrar mensaje de éxito (en una aplicación real, esto enviaría datos a un API)
        alert("¡Mensaje enviado con éxito! Gracias por contactarme.");

        // Limpiar formulario y LocalStorage
        contactForm.reset();
        localStorage.removeItem("contact_name");
        localStorage.removeItem("contact_email");
        localStorage.removeItem("contact_subject");
        localStorage.removeItem("contact_message");
    });
}

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
            });
        }
    });
});