import "App.css";
import { Navbar } from "components/Navbar";
import { Timeline } from "components/Timeline";
import { Skills } from "components/Skills";
import { Projects } from "components/Projects";
import { Typewriter } from "components/Typewriter";
import { Education } from "components/Education";
import { Contact } from "components/Contact";

const App = () => {
  return (
    <main className="h-screen overflow-x-hidden bg-gradient-to-t from-third to-primary text-white">
      <Navbar />
      <Typewriter />
      <Timeline />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default App;
