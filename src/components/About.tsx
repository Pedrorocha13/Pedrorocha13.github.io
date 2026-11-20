import { content, type Language } from "../content";

function About({ language }: { language: Language }) {
  const copy = content[language].about;
  return (
    <section className="section container" id="about">
      <div className="section__header">
        <span className="section__number">01</span>
        <span className="section__label">{copy.label}</span>
      </div>

      <div className="about">
        <div className="about__headline">
          <h2 className="section__title">
            {copy.headline[0]}
            <br />
            {copy.headline[1]}
          </h2>
        </div>

        <div className="about__content">
          <p className="about__lead">
            {copy.lead}
          </p>

          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <div className="about__focus">
            {copy.focuses.map((focus) => <span key={focus}>{focus}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
