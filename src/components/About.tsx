import { useEffect, useState } from "react";
import FotoAbout from "../assets/fotoweb.webp";

const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("about-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    // Verifica si el elemento es al menos parcialmente visible
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    setIsContentVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900 text-white scroll-mt-20">
      <div
        id="about-content"
        className={`max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center transition-transform transition-opacity duration-1000 ease-out ${
          isContentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Imagen más grande con sombreado */}
        <div className="relative mb-6 md:mb-0 md:mr-8 w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-lg transform shadow-2xl shadow-blue-500/40">
          <img
            src={FotoAbout}
            alt="Your Name"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-start text-left">
          <h2 className="py-2 text-4xl md:text-5xl font-bold mb-5 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 relative group">
            ¡Este soy yo!
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl font-serif tracking-wide">
            Mi nombre es Carlos Salazar, soy un chico de 20 años de edad,
            venezolano, al que le gusta cocinar, desarrollar aplicaciones web y
            leer de vez en cuando. Soy alguien comprometido, con metas fijas a
            futuro, sociable y con ganas de conocer a muchas personas en el
            camino.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
