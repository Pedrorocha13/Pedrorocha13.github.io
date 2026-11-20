import { content, type Language } from "../content";

function Projects({ language }: { language: Language }) {
  const copy = content[language].projects;
  return (
    <section className="section container" id="projects">
      <div className="section__header">
        <span className="section__number">02</span>
        <span className="section__label">{copy.label}</span>
      </div>

      <p className="section__intro">{copy.heading}</p>

      <div className="projects">
        {copy.items.map((project) => (
          <article className="project" key={project.title}>
            <div className="project__number">
              {project.number}
            </div>

            <div className="project__content">
              <div className="project__heading">
                <div className="project__title">
                  <h3>{project.title}</h3>
                  {project.inProgress && <span className="project__status">{copy.statusInProgress}</span>}
                </div>

                <a
                  className="project__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.code}: ${project.title}`}
                  title={`${copy.code}: ${project.title}`}
                >
                  ↗
                </a>
              </div>

              <p className="project__description">
                {project.description}
              </p>

              <div className="project__architecture">
                {project.architecture.map((step, index) => (
                  <span key={step}>
                    {step}

                    {index < project.architecture.length - 1 && (
                      <span className="project__arrow">→</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="project__technologies">
                {project.technologies.map((technology) => (
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

export default Projects;
