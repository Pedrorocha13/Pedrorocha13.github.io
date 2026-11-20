import { content, type Language } from "../content";

function TechStack({ language }: { language: Language }) {
  const copy = content[language].stack;
  return (
    <section className="section container" id="stack">
      <div className="section__header">
        <span className="section__number">04</span>
        <span className="section__label">{copy.label}</span>
      </div>

      <div className="stack">
        {copy.groups.map((group, index) => (
          <article className="stack__group" key={group.category}>
            <div className="stack__heading">
              <span className="stack__number">
                0{index + 1}
              </span>

              <h3>{group.category}</h3>
            </div>

            <p className="stack__description">
              {group.description}
            </p>

            <ul className="stack__technologies">
              {group.technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="stack__learning">{copy.learning}</p>
    </section>
  );
}

export default TechStack;
