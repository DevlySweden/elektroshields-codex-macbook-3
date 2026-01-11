import { useEffect, useState } from "react";
import logo from "../assets/elektroshields-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-wide site-header__inner">
        <a href="/" className="brand">
          <img className="brand__logo" src={logo} alt="Elektroshields" />
        </a>

        <nav aria-label="Huvudnavigation" className="site-nav">
          <a href="#projekt">Projekt</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
