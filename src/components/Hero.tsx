import { content, type Language } from "../content";

function Hero({ language }: { language: Language }) {
  const copy = content[language].hero;
  return (
    <section className="hero container" id="home">
      <div className="hero__content">
        <span className="eyebrow">
          {copy.eyebrow}
        </span>

        <h1 className="hero__title">
          {copy.headline[0]}
          <br />
          {copy.headline[1]}
        </h1>

        <p className="hero__description">
          {copy.description}
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {copy.projects}
          </a>

          <a
            className="button button--link"
            href="https://github.com/Pedrorocha13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-label="Data pipeline">
        <div className="hero__visual-inner">
          <span className="pipeline__label">
            {language === "en" ? "DATA FLOW / 001" : "FLUXO DE DADOS / 001"}
          </span>

          <div className="pipeline">
            <div className="pipeline__node pipeline__node--1">
              <span>01</span>
              API
            </div>

            <div className="pipeline__line pipeline__line--1" />

            <div className="pipeline__node pipeline__node--2">
              <span>02</span>
              {language === "en" ? "Ingestion" : "Ingestão"}
            </div>

            <div className="pipeline__line pipeline__line--2" />

            <div className="pipeline__node pipeline__node--3 pipeline__node--accent">
              <span>03</span>
              Data Lake
            </div>

            <div className="pipeline__line pipeline__line--3" />

            <div className="pipeline__node pipeline__node--4">
              <span>04</span>
              {language === "en" ? "Processing" : "Processamento"}
            </div>

            <div className="pipeline__line pipeline__line--4" />

            <div className="pipeline__node pipeline__node--5">
              <span>05</span>
              {language === "en" ? "Analytics" : "Análise"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
