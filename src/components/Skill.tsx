import { useEffect, useState } from "react";

const Skill = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("skills-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setIsContentVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="py-32 bg-gray-900 text-white">
      <div
        id="skills-content"
        className={`max-w-7xl mx-auto px-4 transition-opacity duration-1000 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="py-1 text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
          Tecnologías que uso
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/349419/javascript.svg"
              alt="JavaScript"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">JavaScript</p>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/452228/html-5.svg"
              alt="HTML5"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">HTML5</p>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/452185/css-3.svg"
              alt="CSS3"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">CSS3</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
              alt="Tailwind CSS"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">Tailwind CSS</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/354118/nodejs.svg"
              alt="Node.js"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">Node.js</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
              alt="React"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">React</p>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/349540/typescript.svg"
              alt="TypeScript"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">TypeScript</p>
          </div>

          {/* Figma */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/452202/figma.svg"
              alt="Figma"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">Figma</p>
          </div>

          {/* Slack */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/452102/slack.svg"
              alt="Slack"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">Slack</p>
          </div>

          {/* npm */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.svgrepo.com/show/452077/npm.svg"
              alt="npm"
              className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
            />
            <p className="text-lg text-gray-300">npm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
