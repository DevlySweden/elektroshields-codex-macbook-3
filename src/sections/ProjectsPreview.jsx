export default function ProjectsPreview() {
    return (
      <section id="projekt" style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 32 }}>Projekt</h2>
          <p style={{ marginTop: 10, color: "#475569", maxWidth: 700 }}>
            Ett urval av arbeten och referenser. (Här bygger vi en grid med bilder.)
          </p>
  
          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  background: "white",
                  boxShadow: "0 10px 30px rgba(2,6,23,0.05)",
                }}
              >
                <div style={{ height: 160, background: "#e2e8f0" }} />
                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700 }}>Projekt {i + 1}</div>
                  <div style={{ marginTop: 6, color: "#64748b", fontSize: 14 }}>
                    Kort beskrivning kommer.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  