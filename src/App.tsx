import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DisappearOnScroll from "./components/DisappearOnscroll";
import Skill from "./components/Skill";

const App = () => (
  <>
    <div className="min-h-screen">
      <DisappearOnScroll>
        <Navbar />
        <HeroSection />
        <About />
        <Skill />
        <Projects />
        <ContactForm />
        <Footer />
      </DisappearOnScroll>
    </div>
  </>
);

export default App;
