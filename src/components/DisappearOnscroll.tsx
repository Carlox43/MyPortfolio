import React, { useEffect, useState } from "react";

interface DisappearOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

const DisappearOnScroll: React.FC<DisappearOnScrollProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("disappearComponent");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="disappearComponent"
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default DisappearOnScroll;
