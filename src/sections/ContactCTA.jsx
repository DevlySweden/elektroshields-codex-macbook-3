export default function ContactCTA() {
    return (
      <section id="kontakt" style={{ padding: "80px 0" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 32 }}>Kontakt</h2>
          <p style={{ marginTop: 10, color: "#475569", maxWidth: 700 }}>
            Hör av dig för frågor, offert eller planering. Vi återkommer så snart vi kan.
          </p>
  
          <div
            style={{
              marginTop: 24,
              borderRadius: 18,
              border: "1px solid #e2e8f0",
              padding: 18,
              background: "white",
              boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
            }}
          >
            <div style={{ display: "grid", gap: 8 }}>
              <div><strong>E-post:</strong> info@elektroshields.se</div>
              <div><strong>Telefon:</strong> (lägg in nummer)</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  