import { useEffect, useState } from "react";
import Coding from "../assets/coding.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (isMobileMenuOpen) return; // Evita ocultar el navbar si el menú está abierto

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Ocultar navbar al desplazarse hacia abajo
    } else {
      setIsVisible(true); // Mostrar navbar al desplazarse hacia arriba
    }

    // Actualizar progreso del scroll
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (currentScrollY / totalHeight) * 100;
    setScrollProgress(progress);

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Iniciar la animación del contenido al cargar la página
    setTimeout(() => setIsContentLoaded(true), 100); // Retraso leve para animación

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const handleMenuItemClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barra de progreso */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <nav
        className={`fixed w-full bg-gray-900 text-white px-6 py-4 shadow-md z-10 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } z-20`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-opacity duration-1000 ${
            isContentLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* Nombre o Logo con espacio para el icono */}
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-500 flex items-center">
            {/* Imagen PNG como ícono */}
            <img src={Coding} alt="icon-Coding" className="h-8 w-8 mr-2" />
            CarloxDev
          </h1>

          {/* Links Centrados */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick}
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Botón para móvil */}
          <button
            className="md:hidden text-2xl p-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menú para móvil */}
        {isMobileMenuOpen && (
          <ul
            className="md:hidden mt-4 flex flex-col space-y-4 text-lg"
            style={{ zIndex: 100 }} // Aseguramos que el menú tenga un z-index más alto
          >
            <li>
              <a
                href="#about"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick}
              >
                Contact Me
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
