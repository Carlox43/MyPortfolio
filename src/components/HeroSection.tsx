import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextEffectProps } from "../types/TextEffect"; // Importar el tipo
import FotoHeroselector from "../assets/fotoHeroselector.webp";

// Componente de animación de texto por caracteres
const TextEffect: React.FC<TextEffectProps> = ({
  children,
  delay = 0,
  variants,
  className,
}) => {
  const textArray = children.split(""); // Convertir el texto en un array de caracteres

  return (
    <motion.div
      className={className}
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          variants={variants.item}
          style={{
            transitionDelay: `${index * delay}s`, // Retraso entre caracteres
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const [isInViewport, setIsInViewport] = useState<boolean>(true);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  const handleScroll = () => {
    const element = document.getElementById("heroText");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    // Determina si el texto está en el viewport
    setIsInViewport(rect.top >= 0 && rect.bottom <= window.innerHeight);
  };

  useEffect(() => {
    // Escucha el scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    // Marca la página como cargada para iniciar la animación
    setTimeout(() => setIsPageLoaded(true), 100); // Retraso leve para animación

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 relative z-0" /* z-0 aquí asegura que HeroSection no interfiera con el Navbar */
      style={{
        backgroundImage: `url(${FotoHeroselector})`, // Cambié aquí para usar la imagen local
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa opaca de fondo */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Esta capa está debajo del texto */}
      {/* Contenedor de texto */}
      <div
        id="heroText"
        className={`flex items-center justify-center text-center gap-10 max-w-5xl transition-opacity duration-1000 relative z-10 ${
          isPageLoaded
            ? isInViewport
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
            : "opacity-0 translate-y-4"
        }`}
      >
        {/* Contenido textual */}
        <div>
          {/* Aplicar animación de texto en h1 */}
          <TextEffect
            delay={0.1} // Ajustamos el delay entre letras
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05, // Retraso entre las letras
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                visible: {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: {
                    duration: 0.3,
                  },
                },
              },
            }}
            className="py-2 text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400"
          >
            ¡Hola!, Soy CarloxDev.
          </TextEffect>

          {/* Aplicar animación en p después de que el h1 termine */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6, // Retraso para que empiece después de que el h1 termine
                duration: 0.5,
              },
            }}
          >
            Soy un apasionado{" "}
            <span className="text-teal-400 font-semibold">
              desarrollador web
            </span>
            . ¡Bienvenido a mi{" "}
            <span className="text-indigo-400 font-semibold">Portafolio</span> ,
            elaborado con mucho cariño!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
