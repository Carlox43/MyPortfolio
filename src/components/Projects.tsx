import { useEffect, useState } from "react";
import controlGastos from "../assets/controlGastos.png";
import calculadoraConsumo from "../assets/calculadoraConsumo.png";
import GuitarLa from "../assets/GuitarLa.png";
import caloriesTraker from "../assets/Contador de calorias.png";

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
    <section id="projects" className="py-60 bg-gray-900 text-white">
      <div
        id="projects-content"
        className={`max-w-5xl mx-auto px-4 text-center transition-opacity duration-1000 ${
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
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md mx-auto shadow-indigo-400 flex flex-col"
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
