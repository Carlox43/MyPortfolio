import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        {/* Información de contacto */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <MdEmail className="text-teal-400" size={20} />
            <p className="text-sm">carlossalazara43@gmail.com</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/carlos-jos%C3%A9-salazar-%C3%A1vila-509a692b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHybg5rRSSPSHgN9fcbqpdQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/Carlox43"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Carlos Salazar. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
