export default function Hero() {
    return (
      <section
        style={{
          minHeight: "100vh",
          paddingTop: 72,
          display: "grid",
          placeItems: "center",
          color: "white",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.90), rgba(15,23,42,0.55)), url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d1?auto=format&fit=crop&w=2400&q=80') center/cover",
        }}
      >
        <div style={{ width: "min(1100px, calc(100% - 48px))" }}>
          <p style={{ margin: 0, opacity: 0.9, fontWeight: 600 }}>
            Elinstallation • Service • Projektering
          </p>
          <h1 style={{ fontSize: 52, lineHeight: 1.05, margin: "12px 0 0" }}>
            Trygga elinstallationer med fokus på kvalitet.
          </h1>
          <p style={{ maxWidth: 650, opacity: 0.9, fontSize: 18, marginTop: 12 }}>
            Elektroshields arbetar med elinstallation, styrsystem, belysning och energieffektivisering.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
            <a
              href="#kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 16px",
                borderRadius: 12,
                background: "white",
                color: "#0f172a",
                fontWeight: 700,
              }}
            >
              Kontakta oss
            </a>
            <a
              href="#projekt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 44,
                padding: "0 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontWeight: 700,
              }}
            >
              Se projekt
            </a>
          </div>
        </div>
      </section>
    );
  }
  