import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Ocultar navbar al desplazarse hacia abajo
    } else {
      setIsVisible(true); // Mostrar navbar al desplazarse hacia arriba
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Iniciar la animación del contenido al cargar la página
    setTimeout(() => setIsContentLoaded(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, lastScrollY]);

  return (
    <nav
      className={`fixed w-full bg-gray-900 text-white px-6 py-4 shadow-md z-10 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center transition-opacity duration-1000 ${
          isContentLoaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {/* Nombre o Logo */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-500">
          Carlos Salazar
        </h1>

        {/* Links Centrados */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Redes Sociales */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Botón para móvil */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
