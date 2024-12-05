import { Variants } from "framer-motion";

// Definir los tipos para las props de TextEffect
export interface TextEffectProps {
  children: string;
  delay?: number;
  variants: {
    container: Variants;
    item: Variants;
  };
  className?: string;
}
