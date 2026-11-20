import { content, type Language } from "../content";

function Navbar({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const labels = content[language].nav;
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a className="navbar__brand" href="#home">
          PR<span>.</span>
        </a>

        <nav className="navbar__links" aria-label={language === "en" ? "Main navigation" : "Navegação principal"}>
          <a href="#about">{labels[0]}</a>
          <a href="#projects">{labels[1]}</a>
          <a href="#experience">{labels[2]}</a>
          <a href="#stack">{labels[3]}</a>
          <a href="#contact">{labels[4]}</a>
        </nav>
        <div className="language-toggle" role="group" aria-label="Choose language / Escolher idioma">
          <button type="button" onClick={() => onLanguageChange("en")} aria-pressed={language === "en"}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" onClick={() => onLanguageChange("pt")} aria-pressed={language === "pt"}>PT</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
