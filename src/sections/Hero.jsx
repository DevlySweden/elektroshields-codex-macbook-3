export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <p className="hero__eyebrow">Elinstallation • Service • Projektering • Ljusdesign</p>
        <h1 className="hero__title">Trygga elinstallationer med fokus på kvalitet.</h1>
        <p className="hero__text">
          Elektroshields arbetar med elinstallation, styrsystem, belysning och energieffektivisering.
        </p>
        <div className="hero__actions">
          <a href="#kontakt" className="button">
            Kontakta oss
          </a>
          <a href="#projekt" className="button button--ghost">
            Se projekt
          </a>
        </div>
      </div>
    </section>
  );
}
