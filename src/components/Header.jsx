import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        height: 72,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        transition: "all 200ms ease",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        boxShadow: scrolled ? "0 10px 30px rgba(2,6,23,0.10)" : "none",
      }}
    >
      <div
        style={{
          width: "min(1100px, calc(100% - 48px))",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ fontWeight: 800, letterSpacing: 0.2 }}>
          Elektroshields
        </a>

        <nav aria-label="Huvudnavigation" style={{ display: "flex", gap: 18, fontWeight: 600 }}>
          <a href="#projekt">Projekt</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
