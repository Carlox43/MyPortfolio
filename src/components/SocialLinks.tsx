import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed top-1/3 left-0 flex flex-col items-center space-y-4 z-10">
      {" "}
      {/* Ventana flotante vertical */}
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-2 flex flex-col items-center space-y-4">
        {" "}
        {/* Caja contenedora */}
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/carlos-jos%C3%A9-salazar-%C3%A1vila-509a692b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHybg5rRSSPSHgN9fcbqpdQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Carlox43"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl shadow-md hover:from-teal-400 hover:to-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
