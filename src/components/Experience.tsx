import { content, type Language } from "../content";

function Experience({ language }: { language: Language }) {
  const copy = content[language].experience;
  return (
    <section className="section container" id="experience">
      <div className="section__header">
        <span className="section__number">03</span>
        <span className="section__label">{copy.label}</span>
      </div>

      <p className="section__intro">{copy.heading}</p>

      <div className="experience">
        {copy.items.map((experience) => (
          <article
            className="experience__item"
            key={`${experience.role}-${experience.period}`}
          >
            <div className="experience__period">
              {experience.period}
            </div>

            <div className="experience__content">
              <div className="experience__heading">
                <h3>{experience.role}</h3>

                <span>{experience.company}</span>
              </div>

              <p>{experience.description}</p>

              <div className="experience__technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
