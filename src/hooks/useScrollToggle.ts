import { useState, useEffect, useRef } from "react";

// Hook para manejar la visibilidad de los elementos al hacer scroll
export const useScrollToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Ref específico para cada tipo de elemento
  const ref = useRef<HTMLElement | null>(null); // Se puede mantener como HTMLElement si es un elemento genérico

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar visibilidad al cargar la página

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    ref,
    isVisible,
  };
};
