import { useEffect, useState } from "react";

const Projects = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("projects-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
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

  const projects = [
    {
      title: "Control de Gastos",
      description:
        "Aplicación para administrar y controlar tus gastos de manera eficiente.",
      image: "https://via.placeholder.com/300x200",
      link: "https://control-de-gastos-bice.vercel.app/",
    },
    {
      title: "Calculadora de Propina",
      description: "Herramienta simple y efectiva para calcular propinas.",
      image: "https://via.placeholder.com/300x200",
      link: "https://calculadora-propina-lake.vercel.app/",
    },
    {
      title: "GuitarLA TypeScript",
      description:
        "E-commerce especializado en guitarras, construido con TypeScript.",
      image: "https://via.placeholder.com/300x200",
      link: "https://guitar-la-type-script-alpha.vercel.app/",
    },
    {
      title: "Contador de Calorias",
      description: "Para tener un control para la salud",
      image: "https://via.placeholder.com/300x200",
      link: "https://contador-calorias-gamma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-64 bg-gray-900 text-white">
      <div
        id="projects-content"
        className={`max-w-5xl mx-auto px-4 text-center transition-opacity duration-1000 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg mx-auto"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover" // Tamaño fijo para las imágenes
                />
              </a>
              <div className="p-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold mb-2 text-teal-400 hover:underline"
                >
                  {project.title}
                </a>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
