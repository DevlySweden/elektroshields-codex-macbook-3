/**
 * Elektroshields – Test 3
 * Innehåll & tonalitet inspirerad av elektroshields.se (svenska, saklig, professionell).
 * Struktur: förberett för flersidigt upplägg via pages/, börjar med Home.
 * Design: fullscreen hero, transparent header i hero, vit header vid scroll.
 */
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Home />
      </main>
      <footer className="site-footer">
        <div className="container-wide site-footer__inner">© 2026 Elektro J. Shields AB</div>
      </footer>
    </>
  );
}
