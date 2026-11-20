import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { useEffect, useState } from "react";
import type { Language } from "./content";

import "./styles/globals.css";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />

      <main>
        <Hero language={language} />

        <Reveal>
          <About language={language} />
        </Reveal>

        <Reveal>
          <Projects language={language} />
        </Reveal>

        <Reveal>
          <Experience language={language} />
        </Reveal>

        <Reveal>
          <TechStack language={language} />
        </Reveal>

        <Contact language={language} />
      </main>

      <Footer language={language} />
    </>
  );
}

export default App;
