import { useEffect, useState } from "react";

const Skill = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("skills-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    setIsContentVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div
        id="skills-content"
        className={`max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-10 transition-transform transition-opacity duration-1000 ease-out ${
          isContentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Título general */}
        <div className="w-full text-center mb-12">
          <h2 className="py-2 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 leading-tight">
            Habilidades y tecnologías que uso
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Explora las habilidades y tecnologías que forman parte de mi stack
            de desarrollo.
          </p>
        </div>

        {/* Habilidades */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/349419/javascript.svg"
                alt="JavaScript"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">JavaScript</p>
            </div>

            {/* CSS */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/452185/css-3.svg"
                alt="CSS"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">CSS3</p>
            </div>

            {/* HTML */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">HTML5</p>
            </div>

            {/* Git */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/452210/git.svg"
                alt="Git"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Git</p>
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

            {/* Bootstrap */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg"
                alt="Bootstrap"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Bootstrap</p>
            </div>

            {/* Tailwind */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                alt="Tailwind"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Tailwind</p>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
                alt="Node.js"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Node.js</p>
            </div>

            {/* Next.js */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/342062/next-js.svg"
                alt="Next.js"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Next.js</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/374144/typescript.svg"
                alt="TypeScript"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">TypeScript</p>
            </div>

            {/* Npm */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/452077/npm.svg"
                alt="Npm"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Npm</p>
            </div>
            {/* Vite */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/374167/vite.svg"
                alt="Vite"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Vite</p>
            </div>
          </div>
        </div>

        {/* Aprender */}
        <div className="w-full text-center mt-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Aprender</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Angular */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/452156/angular.svg"
                alt="Angular"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Angular</p>
            </div>

            {/* Vue */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/493625/vue-vuejs-javascript-js-framework.svg"
                alt="Vue"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">Vue.js</p>
            </div>

            {/* WordPress */}
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/475696/wordpress-color.svg"
                alt="WordPress"
                className="w-20 h-20 mb-3 transform hover:scale-110 transition duration-300"
              />
              <p className="text-lg text-gray-300">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
