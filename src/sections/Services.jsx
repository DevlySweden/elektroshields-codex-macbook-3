const services = [
    "Elinstallation",
    "Eldesign / Ljusdesign",
    "Projektering",
    "Styrsystem",
    "Belysning",
    "Energioptimering",
    "Energieffektivisering",
  ];
  
  export default function Services() {
    return (
      <section style={{ padding: "80px 0" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 32 }}>Tjänster</h2>
          <p style={{ marginTop: 10, color: "#475569", maxWidth: 700 }}>
            Vi utför arbeten inom bland annat följande områden.
          </p>
  
          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {services.map((s) => (
              <div
                key={s}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: 16,
                  background: "white",
                  boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
                }}
              >
                <div style={{ fontWeight: 700 }}>{s}</div>
                <div style={{ marginTop: 6, color: "#64748b", fontSize: 14 }}>
                  Kort beskrivning kommer.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  