# Elektroshields – Test 3  
Modern hemsida med Vite + React + JavaScript

Detta repo är ett test- och övningsprojekt för att bygga en modern, välstrukturerad företagshemsida
inspirerad av elektroshields.se.  
Fokus ligger på korrekt arkitektur, bra UI/UX, tydlig kodstruktur och realistiskt innehåll.

Projektet används för att bli bättre på React, Vite, GitHub-workflow och professionellt frontend-arbete.

---

### Tjänsteområden

Elektroshields utför arbeten inom bland annat:

- Elinstallation
- Eldesign / Ljusdesign
- Projektering
- Styrsystem
- Belysning
- Energioptimering
- Energieffektivisering

Listan är inte heltäckande utan beskriver huvudområden.

## Bakgrund – Elektroshields (innehåll & affär)

Hemsidans innehåll och tonalitet är baserad på elektroshields.se.

### Företagsprofil
- Svenskt elinstallationsföretag
- Arbetar med elinstallationer och elservice
- Fokus på kvalitet, säkerhet och professionellt utförande
- Trygg, seriös och tydlig kommunikation
- Riktar sig till både privatpersoner och företag

### Tonalitet
- Svenska texter överallt
- Saklig och professionell ton
- Ingen överdriven marknadsföring eller buzzwords
- Fokus på förtroende, kvalitet och service
- Hellre tydlighet än “säljcopy”

### Viktigt
Detta är **inte** en kopia av elektroshields.se utan:
- samma affärsinriktning
- liknande innehållstyper
- modernare design och struktur
- fritt testprojekt för utveckling

---

## Tech stack
- Vite
- React
- JavaScript
- CSS (vanlig CSS till att börja med)
- (Valfritt senare: React Router, Tailwind, animationsbibliotek)

---

## Övergripande mål

### Design & UX
- Modern, stilren och professionell känsla
- Bra spacing, typografi och kontrast
- Fullscreen hero på startsidan
- Header integrerad i hero (transparent ovanpå bild)
- Vid scroll blir header vit, enkel och tydlig
- Mobil först – allt ska fungera bra på små skärmar

### Struktur
Hemsidan **kan vara flersidig**, exempelvis:
- Startsida
- Projekt / Referenser
- Kontakt

Single-page eller routing avgörs senare beroende på behov.

---

## Sidor & innehåll (plan)

### Startsida
- Hero med tydligt budskap om verksamheten
- Kort introduktion av Elektroshields
- Snabb väg till Projekt och Kontakt

### Projekt / Referenser
- Grid med projektkort
- Bild + kort beskrivning
- Fokus på utfört arbete och kvalitet

### Kontakt
- Tydlig kontaktinformation
- Telefonnummer och e-post
- Enkelt kontaktformulär
- Ingen aggressiv CTA – bara tydlig kontaktväg

---

## Kodprinciper

- En komponent = ett tydligt ansvar
- Små, läsbara komponenter
- Undvik “mega-komponenter”
- Semantisk HTML (header, nav, main, section, footer)
- Återanvändbara UI-komponenter där det är rimligt
- Kommentera kort i början av större filer

---

## Mappstruktur

```txt
src/
  components/   Återanvändbara UI-komponenter (Header, Button, Card)
  sections/     Större innehållsblock (Hero, ProjectsSection, ContactSection)
  pages/        Sidor (Home, Projects, Contact) – om routing används
  styles/       Globala styles / variabler
  assets/       Bilder, ikoner, media
