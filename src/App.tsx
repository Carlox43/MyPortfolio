import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
