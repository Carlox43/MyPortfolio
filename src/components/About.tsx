import { useEffect, useState } from "react";

const About = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("about-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setIsContentVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-72 bg-gray-900 text-white">
      <div
        id="about-content"
        className={`max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center transition-opacity duration-1000 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Imagen más grande con sombreado */}
        <div className="relative mb-6 md:mb-0 md:mr-6 w-80 h-80 overflow-hidden rounded-lg transform shadow-2xl shadow-blue-500/40">
          <img
            src="https://scontent.fepa9-2.fna.fbcdn.net/v/t39.30808-6/391730821_6715774791843857_5017100425600156676_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHPC49PyveaVpkm5hmg5xMRen-tixmWZWt6f62LGZZlayGFC4RmvhBAN64dldwYd-xTuPbBsqWyKvaciDI4mXXe&_nc_ohc=qDLQKv52V_sQ7kNvgGMKRw5&_nc_zt=23&_nc_ht=scontent.fepa9-2.fna&_nc_gid=A5EtsIFF92cJbTkBv8FNUgh&oh=00_AYBmA3fN-mWme0dk4IoWd2cqF3A-ovdV4DsZelLaQBN4-A&oe=6756E3CB"
            alt="Your Name"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-4xl font-bold mb-5 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto font-serif tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            dolor, beatae hic vitae distinctio corporis eius facilis velit
            accusamus pariatur reprehenderit harum qui reiciendis saepe in. In
            mollitia illum dolore?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
