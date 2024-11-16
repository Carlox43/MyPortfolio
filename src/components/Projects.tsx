import React from "react";
import { useScrollToggle } from "../hooks/useScrollToggle";

const Projects: React.FC = () => {
  // Para animar los elementos
  const headingAnimation = useScrollToggle(); // Para animar el <h2> de "Proyectos"
  const project1Animation = useScrollToggle(); // Para animar el Proyecto 1
  const project2Animation = useScrollToggle(); // Para animar el Proyecto 2
  const project3Animation = useScrollToggle(); // Para animar el Proyecto 3 (puedes añadir más según lo necesites)

  return (
    <section id="projects" className="min-h-screen p-6 bg-gray-100">
      {/* Animación de la etiqueta <h2> */}
      <h2
        ref={headingAnimation.ref as React.RefObject<HTMLHeadingElement>} // Tipamos el ref como HTMLHeadingElement
        className={`text-3xl font-bold text-center mb-8 transition-opacity duration-700 ${
          headingAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proyecto 1 */}
        <div
          ref={project1Animation.ref as React.RefObject<HTMLDivElement>} // Tipamos el ref como HTMLDivElement
          className={`bg-white p-4 shadow-lg rounded-lg transition-opacity duration-700 transform ${
            project1Animation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-semibold">Proyecto 1</h3>
          <p className="mt-2">Descripción breve del proyecto.</p>
        </div>

        {/* Proyecto 2 */}
        <div
          ref={project2Animation.ref as React.RefObject<HTMLDivElement>} // Tipamos el ref como HTMLDivElement
          className={`bg-white p-4 shadow-lg rounded-lg transition-opacity duration-700 transform ${
            project2Animation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-semibold">Proyecto 2</h3>
          <p className="mt-2">Otra descripción breve del proyecto.</p>
        </div>

        {/* Proyecto 3 */}
        <div
          ref={project3Animation.ref as React.RefObject<HTMLDivElement>} // Tipamos el ref como HTMLDivElement
          className={`bg-white p-4 shadow-lg rounded-lg transition-opacity duration-700 transform ${
            project3Animation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-semibold">Proyecto 3</h3>
          <p className="mt-2">Descripción breve del proyecto.</p>
        </div>

        {/* Puedes agregar más proyectos de manera similar */}
      </div>
    </section>
  );
};

export default Projects;
