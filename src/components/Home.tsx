import React from "react";
import { useScrollToggle } from "../hooks/useScrollToggle";

const Home: React.FC = () => {
  // Usamos el hook useScrollToggle para cada parte de la sección
  const imageAnimation = useScrollToggle();
  const textAnimation = useScrollToggle();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-slate-600 text-white p-6"
    >
      {/* Imagen */}
      <div
        ref={imageAnimation.ref as React.RefObject<HTMLDivElement>} // Especificamos el tipo de ref para el <div>
        className={`flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 transition-transform transition-opacity duration-700 ${
          imageAnimation.isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src="https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/default.jpg?crop=1300,731,x0,y0&width=1280&height=720&optimize=low"
          alt="Foto de perfil"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Texto */}
      <div
        ref={textAnimation.ref as React.RefObject<HTMLDivElement>} // Especificamos el tipo de ref para el <div>
        className={`text-center lg:text-left max-w-lg transition-transform transition-opacity duration-700 ${
          textAnimation.isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-4">¡Hola! Soy [Carlos Salazar]</h2>
        <p className="text-lg">
          Soy desarrollador front-end con experiencia en React y TypeScript. Me
          encanta crear aplicaciones web modernas y responsivas.
        </p>
      </div>
    </section>
  );
};

export default Home;
