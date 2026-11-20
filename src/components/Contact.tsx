import { content, type Language } from "../content";

function Contact({ language }: { language: Language }) {
  const copy = content[language].contact;
  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <div className="section__header contact__header">
          <span className="section__number">05</span>
          <span className="section__label">{copy.label}</span>
        </div>

        <div className="contact__content">
          <div className="contact__headline">
            <h2>
              {copy.headline[0]}
              <br />
              {copy.headline[1]}
            </h2>

            <p>
              {copy.description}
            </p>
          </div>

          <div className="contact__links">
            <a
              href="https://github.com/Pedrorocha13"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://linkedin.com/in/pedro-rocha-de-jesus-286b481a1/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a href="mailto:pedrorochadejesus.70@gmail.com">
              <span>Email</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
