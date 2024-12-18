import { useEffect, useState } from "react";
import controlGastos from "../assets/controlGastos.png";
import calculadoraConsumo from "../assets/calculadoraConsumo.png";
import GuitarLa from "../assets/GuitarLa.png";
import caloriesTraker from "../assets/Contador de calorias.png";

const Projects = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);

  const handleScroll = () => {
    const sectionElement = document.getElementById("projects-content");
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setIsContentVisible(isVisible);
    }

    const projectElements = document.querySelectorAll(".project-item");
    projectElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setVisibleProjects((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = isVisible;
        return updatedState;
      });
    });
  };

  useEffect(() => {
    setVisibleProjects(new Array(4).fill(false)); // Inicializar con tantos proyectos como haya
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "GuitarLA TypeScript",
      description:
        "Primer proyecto: Al entrar al mundo de React y typeScript elabore una pagina web de guitarra como si fuera una tienda en linea",
      image: GuitarLa,
      link: "https://guitar-la-type-script-alpha.vercel.app/",
    },
    {
      title: "Control de Gastos",
      description:
        "Segundo Proyecto: Aplicación para administrar y controlar tus gastos de manera eficiente.",
      image: controlGastos,
      link: "https://control-de-gastos-bice.vercel.app/",
    },
    {
      title: "Calculadora de Propina",
      description:
        "Tercer Proyecto: Herramienta simple y efectiva para calcular propinas.",
      image: calculadoraConsumo,
      link: "https://calculadora-propina-lake.vercel.app/",
    },
    {
      title: "Contador de Calorias",
      description:
        "Cuarto Proyecto: Contador efectivo para un control de salud y calorias",
      image: caloriesTraker,
      link: "https://contador-calorias-gamma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div
        id="projects-content"
        className={`max-w-5xl mx-auto px-4 text-center transition-opacity duration-1000 ease-out ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="py-1 text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-item bg-gray-700 rounded-lg overflow-hidden shadow-md mx-auto shadow-indigo-400 flex flex-col transition-transform duration-1000 ease-out ${
                visibleProjects[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ minHeight: "380px" }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400"
                >
                  {project.title}
                </a>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Texto adicional */}
        <div className="mt-12">
          <p className="text-gray-400 text-sm italic max-w-3xl mx-auto">
            "Cabe recalcar que estos proyectos aún están en proceso de mejoras
            y, dentro de poco, colocaré muchos más."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
