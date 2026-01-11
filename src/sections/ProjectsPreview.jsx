export default function ProjectsPreview() {
  return (
    <section id="projekt" className="section section--muted">
      <div className="container-wide">
        <h2 className="section-title">Projekt</h2>
        <p className="section-lead">Ett urval av arbeten och referenser. (Här bygger vi en grid med bilder.)</p>
      </div>
      <div className="container-wide">
        <div className="projects-grid projects-grid--wide">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="project-card">
              <div className="project-card__media" />
              <div className="project-card__body">
                <div className="project-card__title">Projekt {i + 1}</div>
                <div className="project-card__text">Kort beskrivning kommer.</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
