/**
 * Elektroshields – Test 3
 * Innehåll & tonalitet inspirerad av elektroshields.se (svenska, saklig, professionell).
 * Struktur: förberett för flersidigt upplägg via pages/, börjar med Home.
 * Design: fullscreen hero, transparent header i hero, vit header vid scroll.
 */
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <footer style={{ padding: "28px 0", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto", color: "#64748b" }}>
          © {new Date().getFullYear()} Elektroshields
        </div>
      </footer>
    </>
  );
}
