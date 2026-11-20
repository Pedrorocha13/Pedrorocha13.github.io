import { type Language } from "../content";

function Footer({ language }: { language: Language }) {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__identity">
          <strong>Pedro Rocha</strong>
          <span>{language === "en" ? "Data Engineer" : "Engenheiro de Dados"}</span>
        </div>

        <div className="footer__meta">
          <span>{language === "en" ? "Rio de Janeiro, Brazil" : "Rio de Janeiro, Brasil"}</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
