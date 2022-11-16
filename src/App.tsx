import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Typewriter from "./components/Typewriter";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-t from-third to-primary text-white">
      <Navbar />
      <Typewriter />
      <Skills />
      <Projects />
      <Education />
      <Contact/>
    </div>
  );
}

export default App;
