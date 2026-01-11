const services = [
  {
    title: "Elinstallation",
    description: "Nyinstallation, utbyggnad och ombyggnad med tydlig dokumentation.",
  },
  {
    title: "Eldesign / Ljusdesign",
    description: "Planering av ljusmiljöer för funktion, trivsel och drift.",
  },
  {
    title: "Projektering",
    description: "Teknisk planering, ritningar och samordning för entreprenad.",
  },
  {
    title: "Styrsystem",
    description: "Smarta styrningar för fastighet, belysning och energi.",
  },
  {
    title: "Belysning",
    description: "Installation och justering av belysning i olika miljöer.",
  },
  {
    title: "Energioptimering",
    description: "Genomlysning av anläggning för lägre förbrukning.",
  },
  {
    title: "Energieffektivisering",
    description: "Åtgärder som ger stabil drift och bättre energieffekt.",
  },
];

export default function Services() {
  return (
    <section className="section section--compact">
      <div className="container">
        <h2 className="section-title section-title--tight">Tjänster</h2>
        <p className="section-lead section-lead--tight">
          Vi utför arbeten inom nedanstående områden. Tydligt avgränsat och kvalitetssäkrat.
        </p>

        <div className="services-grid services-grid--compact">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-card__marker" aria-hidden="true" />
              <div>
                <div className="service-card__title">{service.title}</div>
                <div className="service-card__text">{service.description}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
