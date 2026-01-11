import { useState } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section">
      <div className="container-wide">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-lead">Hör av dig för frågor, offert eller planering.</p>
      </div>

      <div className="container-wide">
        <div className="contact-layout">
          <article className="contact-info">
            <h3 className="contact-info__title">Kontaktuppgifter</h3>
            <p className="contact-info__lead">Tydlig kontaktväg för snabb återkoppling.</p>
            <div className="contact-info__list">
              <div>
                <span className="contact-info__label">E-post</span>
                <span className="contact-info__value">info@elektroshields.se</span>
              </div>
              <div>
                <span className="contact-info__label">Telefon</span>
                <span className="contact-info__value">08-123 45 67</span>
              </div>
              <div>
                <span className="contact-info__label">Ort</span>
                <span className="contact-info__value">Stockholm</span>
              </div>
              <div>
                <span className="contact-info__label">Öppettider</span>
                <span className="contact-info__value">Mån–Fre 07:00–16:00</span>
              </div>
            </div>
          </article>

          <article className="contact-form">
            <h3 className="contact-form__title">Skicka en förfrågan</h3>
            <p className="contact-form__lead">Beskriv kort vad du behöver hjälp med.</p>
            {submitted ? (
              <div className="contact-form__success">Tack, vi återkommer så snart vi kan.</div>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <label className="form__field">
                  <span>Namn</span>
                  <input type="text" name="name" required placeholder="Ditt namn" />
                </label>
                <label className="form__field">
                  <span>E-post</span>
                  <input type="email" name="email" required placeholder="namn@exempel.se" />
                </label>
                <label className="form__field form__field--full">
                  <span>Meddelande</span>
                  <textarea name="message" required rows="4" placeholder="Kort beskrivning av ärendet." />
                </label>
                <button className="button form__button" type="submit">
                  Skicka
                </button>
              </form>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
