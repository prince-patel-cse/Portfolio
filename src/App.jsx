import { useFadeIn } from './hooks/useFadeIn';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useFadeIn();

  return (
    <>
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <ProblemSolving />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer>
        <p>Designed and Built by Prince Patel</p>
      </footer>
    </>
  );
}

export default App;
