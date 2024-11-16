import React from "react";
import { useScrollToggle } from "../hooks/useScrollToggle";

const Contact: React.FC = () => {
  // Usamos el hook useScrollToggle para cada elemento
  const headingAnimation = useScrollToggle();
  const paragraphAnimation = useScrollToggle();
  const buttonAnimation = useScrollToggle();

  return (
    <section
      id="contact"
      className="min-h-screen p-6 bg-gray-600 text-white flex flex-col items-center"
    >
      {/* Título "Contacto" */}
      <h2
        ref={headingAnimation.ref as React.RefObject<HTMLHeadingElement>} // Aquí especificamos el tipo correcto
        className={`text-3xl font-bold mb-4 transition-opacity duration-700 ${
          headingAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Contacto
      </h2>

      {/* Párrafo */}
      <p
        ref={paragraphAnimation.ref as React.RefObject<HTMLParagraphElement>} // Tipo específico para <p>
        className={`text-center mb-8 transition-opacity duration-700 ${
          paragraphAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        ¿Tienes alguna pregunta o quieres trabajar juntos? ¡Contáctame!
      </p>

      {/* Botón */}
      <a
        href="mailto:tuemail@example.com"
        ref={buttonAnimation.ref as React.RefObject<HTMLAnchorElement>} // Tipo específico para <a>
        className={`px-6 py-2 bg-gray-800 rounded text-white font-semibold transition-opacity duration-700 ${
          buttonAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Enviar un mensaje
      </a>
    </section>
  );
};

export default Contact;
