/**
 * Startsida (Home)
 * Ton: professionell, saklig och tydlig. Svenska texter.
 * Design: Fullscreen hero med header integrerad (transparent), header blir vit vid scroll.
 */
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import ProjectsPreview from "../sections/ProjectsPreview";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
