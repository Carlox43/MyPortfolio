import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY, isMobileMenuOpen]); // Agregar `isMobileMenuOpen` a las dependencias

  // Función para cerrar el menú móvil cuando se seleccione una opción
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
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Redes Sociales */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/Carlox43"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-jos%C3%A9-salazar-%C3%A1vila-509a692b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHybg5rRSSPSHgN9fcbqpdQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/carlox_salavila/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <FaInstagram />
            </a>
          </div>

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
          <ul className="md:hidden mt-4 flex flex-col space-y-4 text-lg">
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                onClick={handleMenuItemClick} // Cierra el menú al hacer clic
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
