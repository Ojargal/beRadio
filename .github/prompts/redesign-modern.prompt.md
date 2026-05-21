---
description: "Komplettes visuelles Redesign der BERADIO-Website im modernen Webflow-Stil. Alle Texte und Sektionen bleiben erhalten, nur das Design wird erneuert."
---

# BERADIO Website – Komplettes Redesign (Webflow-Style)

Du bist ein Senior Web Designer und Frontend-Entwickler, spezialisiert auf moderne, animierte Landing Pages im Webflow-Award-Stil. Du hast ein tiefes Verständnis für visuelle Hierarchie, Dark-Mode-Design, Glassmorphism, und GSAP-Animationen.

## Deine Aufgabe

Erstelle ein **komplett neues visuelles Design** für die statische Website von **BERADIO** (beradio.at) — einem B2B SaaS-Produkt für digitales Firmenradio / Instore-Marketing-Musik in Österreich.

Schreibe **alle HTML-Komponenten** neu mit modernem Webflow-Style-Design. **Alle Texte und Sektionen bleiben 1:1 erhalten** — nur das visuelle Erscheinungsbild ändert sich komplett.

---

## Technische Rahmenbedingungen (NICHT ändern)

- **Rein statische Website** — kein Build-Tool, kein npm, kein Framework (React/Vue/etc.)
- **Tailwind CSS** via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- **Tailwind Config** liegt in `js/config.js` (Markenfarben definiert)
- **GSAP 3.12.2** + ScrollTrigger für Animationen (CDN)
- **Font Awesome 6.4** für Icons (CDN)
- **Google Fonts – Roboto** (100–900)
- **Komponenten-System**: Jede Sektion ist eine eigenständige HTML-Datei in `components/`
- **Dateinamen** ohne Leerzeichen oder Sonderzeichen (FTP-Deployment)
- **Keine externen CSS-Frameworks** außer Tailwind

---

## Marken-Regeln (STRIKT einhalten)

| Element | Regel |
|---|---|
| Logo-Bild | Unverändert: `assets/logos/logo small - ohne schriftzug v3 small-5c7c2735.png` |
| Brandname "be radio" | **Einzige Verwendung von `#ff2d57`** — bleibt rot |
| CTA-Buttons "Jetzt testen" / "Anfrage senden" | Darf `#ff2d57` verwenden |
| Alle anderen Farben | **KEIN Rot** — neue moderne Farbpalette (siehe unten) |

---

## Neue Design-Sprache (Webflow Award Style)

### Farb-System

```
Hintergrund (Base):     #080810  (tiefschwarz mit Blau-Stich)
Hintergrund (Surface):  #0f0f1a  (Karten, Sektionen)
Hintergrund (Elevated): #16162a  (hover states)

Primär-Gradient:        #7c3aed → #2563eb  (Purple → Blue)
Akzent Cyan:            #06b6d4
Akzent Emerald:         #10b981
Akzent Amber:           #f59e0b  (nur sparsam)

Text Primär:            #f8fafc  (fast weiß)
Text Sekundär:          #94a3b8  (slate-400)
Text Muted:             #475569  (slate-600)

Border:                 rgba(255,255,255,0.08)
Glow:                   rgba(124,58,237,0.4)  (purple glow)
```

### Typografie-System

```
Display XL:  font-size: clamp(3rem, 8vw, 7rem); font-weight: 900; letter-spacing: -0.03em
Display L:   font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800
Heading:     font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 700
Body:        font-size: 1.125rem; font-weight: 300; line-height: 1.8; color: #94a3b8
Caption:     font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase
```

Gradient-Text-Effekt (für Überschriften-Highlights):
```css
background: linear-gradient(135deg, #7c3aed, #06b6d4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### UI-Komponenten Stil

**Glassmorphism-Karte:**
```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.08);
backdrop-filter: blur(20px);
border-radius: 24px;
box-shadow: 0 0 40px rgba(124,58,237,0.15);
```

**Glow-Button:**
```css
background: linear-gradient(135deg, #7c3aed, #2563eb);
box-shadow: 0 0 30px rgba(124,58,237,0.5);
border-radius: 9999px;
padding: 1rem 2.5rem;
font-weight: 700;
transition: transform 0.3s, box-shadow 0.3s;
```
Hover: `transform: scale(1.05); box-shadow: 0 0 50px rgba(124,58,237,0.8);`

**Badge/Pill:**
```css
background: rgba(124,58,237,0.15);
border: 1px solid rgba(124,58,237,0.4);
border-radius: 9999px;
padding: 0.25rem 1rem;
font-size: 0.75rem;
font-weight: 600;
letter-spacing: 0.1em;
color: #a78bfa;
```

**Dekorative Blur-Blobs (Hintergrund):**
```html
<!-- Blobs als absolute positioned Divs hinter dem Content -->
<div style="position:absolute; width:600px; height:600px; background:radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%); border-radius:50%; top:-200px; left:-200px; pointer-events:none; z-index:0;"></div>
<div style="position:absolute; width:400px; height:400px; background:radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%); border-radius:50%; bottom:-100px; right:-100px; pointer-events:none; z-index:0;"></div>
```

---

## Sektionen — Vollständige Inhalte & Design-Anweisungen

### 1. NAVIGATION (`components/navigation.html`)

**Aktueller Stil:** Weißer Hintergrund, frosted glass
**Neuer Stil:** Dark Glassmorphism, scrollt mit blur-Effekt

Design:
- Hintergrund: `rgba(8,8,16,0.8)` + `backdrop-filter: blur(20px)` + dünner Border unten: `1px solid rgba(255,255,255,0.06)`
- Logo-Bild: unverändert
- Brand "be radio": **weiterhin `text-primary` (#ff2d57)**
- Nav-Links: `#94a3b8` → hover: `#f8fafc` mit `transition`
- Nav-Links Text (unverändert): **Start | Preise | Setup | Impressum**
- CTA "Login": Glow-Button (Purple-Blue Gradient)
- CTA "Kontakt": Outline-Button: `border: 1px solid rgba(255,255,255,0.15)`, text weiß, hover: weißer Hintergrund + schwarzer Text
- Mobile Menu: Dark Background `#0f0f1a`

---

### 2. HERO SECTION (`components/hero.html`)

**Aktueller Stil:** Helles Weiß, Video rechts, Text links
**Neuer Stil:** Vollbild-Dark mit Mesh-Gradient + Video rechts mit Neon-Glow-Rahmen

Behalte:
- Video: `assets/hero_video/herovideo.mp4` — Desktop rechts (2/3), Mobile 16:9 oben
- Alle Texte exakt:
  - Badge: `we are digital corporate radio!`
  - Headline Zeile 1: `YOUR BRAND`
  - Headline Zeile 2: `YOUR`
  - Headline Zeile 3: `SOUNDTRACK`
  - Subtext: `be radio! – die cloudbasierende Musiklösung für angenehme Atmosphäre & optimale Instore-Kommunikation.`
  - Button: `Jetzt testen` → `href="test.html"`

Neues Design:
- Hintergrund: `#080810` mit zwei großen Blur-Blobs (Purple links, Cyan rechts)
- Headline: Display XL, font-weight 900
  - "YOUR" in Weiß, "BRAND" mit Gradient-Text-Effekt (Purple→Blue)
  - "YOUR SOUNDTRACK" in Weiß mit Gradient-Underline oder Gradient-Text
- Badge: Pill-Style (Purple-Glas)
- Video: Abgerundete Ecken (border-radius: 20px), `box-shadow: 0 0 60px rgba(124,58,237,0.3)` als Glow-Rahmen
- CTA-Button: `#ff2d57` Background (Markenregel) + `box-shadow: 0 0 30px rgba(255,45,87,0.5)` Glow
- GSAP-Animationen: Beibehalten — alle Elemente starten `opacity:0`, sequenziell eingeblendet

---

### 3. INDUSTRIES SECTION (`components/industries.html`)

Behalte alle Texte und Branchen-Icons. 

Neues Design:
- Sektion-Hintergrund: `#0f0f1a`
- Section-Label Badge oben: Pill (Purple-Glas)
- Karten: Glassmorphism-Stil, hover: `box-shadow: 0 0 30px rgba(124,58,237,0.2)`, leicht nach oben bewegen
- Icons: Gradient-Farbe (Purple → Cyan)
- Titel und Text in der neuen Farb-Palette

---

### 4. CLIENTS SECTION (`components/clients.html`)

Behalte alle Logos aus `assets/firmen_logos_fremd/`.

Neues Design:
- Hintergrund: `#080810`
- Logos: `filter: brightness(0) invert(1)` (weiß) + `opacity: 0.4`, hover: `opacity: 1` mit Transition
- Infinite-Scroll Marquee Animation (CSS-only, kein JS):
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track { animation: marquee 30s linear infinite; display: flex; width: max-content; }
```

---

### 5. INFO SECTION (`components/info-section.html`)

Behalte alle Texte.

Neues Design:
- Dunkler Hintergrund mit dekorativer Weltkarte (oder Globus-SVG)
- Statistiken/Zahlen: Große Display-Fonts, Gradient-Text
- Bento-Grid-Layout (asymmetrisches Grid)

---

### 6. FEATURES SECTION (`components/features.html`)

Behalte ALLE Texte exakt:
- Feature 1: `small, ...but BIG PERFORMANCE` | Text über 24/7-Hardware, Smartcontrol via Smartphone, Offlineprogramm
  - Bullet: `24/7 Verfügbarkeit` | `Automatische Updates`
- Feature 2: `that´s SMARTCONTROL!` | Text über Smartphone-Login, Lautstärke, Songs überspringen
- Feature 3 (falls vorhanden): Texte ebenfalls beibehalten
- Bilder: `assets/images/setup_1Block.png`, `assets/images/smartcontrol_phone-1383748f.png` beibehalten

Neues Design (KEIN buntes Gelb/Blau mehr):
- Alternierende Feature-Blöcke auf Dark Background `#0f0f1a`
- Linke/rechte Seite mit Glassmorphism-Karte für den Text-Block
- Bild-Container: `border-radius: 20px`, `box-shadow: 0 0 50px rgba(124,58,237,0.25)`
- Feature-Labels: Gradient-Text
- Icon: Font Awesome Icons mit Gradient-Farbe
- Check-Icons: `#06b6d4` Cyan statt Red
- Animiert mit GSAP ScrollTrigger: Text von links einfahren, Bild von rechts

---

### 7. BENEFITS SECTION (`components/benefits.html`)

Behalte alle Texte.

Neues Design:
- Bento-Grid (3-spaltig Desktop, 1-spaltig Mobile)
- Glassmorphism-Karten mit subtiler Border und Glow
- Icons: große, gradient-farbige Icons oben
- Hover: Karte leuchtet auf mit lila Glow

---

### 8. PRICING SECTION (`components/pricing.html`)

Behalte ALLE Texte exakt:
- Section-Titel: `flexibel & ohne Bindung`
- Karte Basic: `€ 29,90 monatlich pro Outlet` | Features: 100% Musik | keine Bindung | Spots- & Moderationsverwaltung | Selbstinstallation | E-mail & Telefonsupport | "send in/out" Support | Button: "Anfrage senden" → `href="test.html?paket=basic"`
- Karte Advanced (Empfohlen): `€ 34,90 monatlich pro Outlet` | + Admin & Mitarbeiter Login | Button: "Anfrage senden" → `href="test.html?paket=advanced"`
- Karte Pro: `€ 39,90 monatlich pro Outlet` | Button: "Anfrage senden" → `href="test.html?paket=pro"`

Neues Design:
- Hintergrund: `#080810` mit Blur-Blobs
- 3 Karten nebeneinander — Glassmorphism
- Mittlere Karte (Advanced/Empfohlen): Größer, `border: 1px solid rgba(124,58,237,0.6)`, stärkerer Glow
- "EMPFOHLEN"-Badge: Pill oben auf der mittleren Karte (Purple)
- Preise: Display-Font, Gradient-Text
- Feature-Liste: Check-Icons in Cyan `#06b6d4`
- CTA "Anfrage senden": Gradient Button (Purple→Blue) — nicht rot
- Karten-Header: Gradient-Hintergrund (Purple→Blue) statt Rot

---

### 9. PROGRAM SECTION (`components/program.html`)

Behalte alle Texte.

Neues Design:
- Dark Background mit Grid-Lines als Dekoration
- Musik-Genre-Cards: Glassmorphism, mit Waveform-Dekoration oder Musik-Icon

---

### 10. CONTACT SECTION (`components/contact.html`)

Behalte ALLE Kontaktdaten und Formularfelder.

Neues Design:
- Hintergrund: `#0f0f1a`
- Formular-Felder: Dark Input Style:
  ```css
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  color: #f8fafc;
  padding: 1rem 1.25rem;
  ```
  Focus: `border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.2);`
- Submit-Button: Gradient (Purple→Blue) mit Glow
- Kontaktdaten rechts: Icons in Cyan

---

### 11. FOOTER (`components/footer.html`)

Behalte ALLE Texte exakt:
- Logo + "be radio" (weiterhin `#ff2d57`)
- Tagline: `we are digital corporate radio! | Beschallung von Point of Sales`
- Kontakt: `+43 1 942 05 14` | `hi@beradio.at` | `Seitenstettengasse 5/37, A-1010 Wien`
- Rechtliches: Impressum
- Copyright: `© 2026 bradio GmbH. Alle Rechte vorbehalten.`
- `#copyright-year` span beibehalten (wird per JS befüllt)

Neues Design:
- Hintergrund: `#050508` (noch dunkler als Base)
- Trennlinie oben: `1px solid rgba(255,255,255,0.06)`
- Text: `#475569` (muted), Links hover: `#f8fafc`
- Icons: `#7c3aed` (Purple)
- Logo-Links hover mit leichtem Brightness-Boost

---

## CSS Variablen in `css/styles.css` hinzufügen

```css
:root {
  --bg-base:     #080810;
  --bg-surface:  #0f0f1a;
  --bg-elevated: #16162a;
  --gradient:    linear-gradient(135deg, #7c3aed, #2563eb);
  --glow-purple: rgba(124,58,237,0.4);
  --glow-cyan:   rgba(6,182,212,0.3);
  --border:      rgba(255,255,255,0.08);
  --text-primary: #f8fafc;
  --text-muted:   #94a3b8;
}

body {
  background-color: var(--bg-base);
  color: var(--text-primary);
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
}

.glow-purple {
  box-shadow: 0 0 40px var(--glow-purple);
}
```

---

## Tailwind Config (`js/config.js`) — Ergänzungen

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#ff2d57',
        'primary-hover': '#e6285a',
        dark: '#080810',
        surface: '#0f0f1a',
        elevated: '#16162a',
        purple: { DEFAULT: '#7c3aed', light: '#a78bfa' },
        cyan: { DEFAULT: '#06b6d4' },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7c3aed, #2563eb)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15), transparent)',
      }
    }
  }
}
```

---

## GSAP Animationen beibehalten & erweitern

Die `PageAnimations`-Klasse in `js/animations.js` bleibt bestehen. Ergänze:

```js
// Glassmorphism-Karten: Hover-Glow via GSAP
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { boxShadow: '0 0 40px rgba(124,58,237,0.4)', duration: 0.3 });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { boxShadow: '0 0 40px rgba(124,58,237,0)', duration: 0.3 });
  });
});

// ScrollTrigger: Karten von unten einfahren
gsap.utils.toArray('.glass-card').forEach((card, i) => {
  gsap.from(card, {
    y: 60, opacity: 0, duration: 0.8,
    delay: i * 0.1,
    scrollTrigger: { trigger: card, start: 'top 85%' }
  });
});
```

---

---

## SEITE: setup.html & ihre Komponenten

### 12. SETUP NAVIGATION (`components/navigation-setup.html`)

Identisches Design wie `components/navigation.html` (Dark Glassmorphism) — nur die Links unterscheiden sich:
- Desktop-Links: **Start** (→ `index.html#hero-bg`) | **Setup** (→ `setup.html`) | **Impressum** (→ `impressum.html`)
- CTA 1: "Login" → `login.html` (Glow Button Purple–Blue)
- CTA 2: "Jetzt testen" → `test.html` (Brand-Rot `#ff2d57` + Glow)
- Mobile Menu: gleiche Links, Dark Background `#0f0f1a`
- Logo + "be radio" bleiben unverändert (Rot)

---

### 13. SETUP CONTENT (`components/setup-content.html`)

**Aktueller Stil:** Weißer Hero mit Video rechts, helle Karten auf `bg-slate-50`
**Neuer Stil:** Dark Theme durchgehend, wie Hauptseite

**Hero-Bereich — Texte exakt beibehalten:**
- Badge: `Einfache Installation`
- Headline Zeile 1: `SETUP` (Display, font-weight 900, Weiß)
- Zeile 2: `auspacken, anschliessen...` (leicht, `#94a3b8`)
- Zeile 3: `los geht´s!` (Bold, Gradient-Text Purple→Blue — NICHT Rot)
- Hinweis-Box Text: `Um eventuelle Störgeräusche während der Installation zu vermeiden: Eigene Audioanlage ausschalten, Lautstärke auf NULL stellen.`
- Video: `assets/setup/digital_radio_setup_box_video_creation.mp4` — gleiche Einbindung, Glow-Rahmen wie Hero

**Hintergrund:** `#080810` mit Purple Blur-Blobs

**Step-Karten — Texte exakt beibehalten:**
- Step 1: `Internetverbindung herstellen...` | `LAN-Kabel mit be radio Player und eigenem Modem, Router oder Switch verbinden.` | Bild: `assets/images/setup_lan-5e071d18.png`
- Step 2: (nächste Steps aus Datei — Texte 1:1 übernehmen)
- Step 3, 4: ebenso alle Texte beibehalten

Neues Design der Step-Karten:
- Hintergrund: `#0f0f1a`
- Karten: Glassmorphism-Stil
- Step-Nummer Badge: Gradient Background (Purple→Blue) statt Rot
- Icons/Bilder: `filter: drop-shadow(0 0 12px rgba(124,58,237,0.3))`
- Hover: `transform: translateY(-8px)`, Glow-Kante verstärkt
- Scroll-Down Arrow unten: Gradient statt Rot
- GSAP-Animationen (`setup-step-card opacity-0`): beibehalten

---

### 14. TEST FORMULAR (`components/test-form.html`)

**Aktueller Stil:** Heller `bg-slate-100`-Hintergrund, weißes Formular
**Neuer Stil:** Dark Theme

**Alle Formularfelder und Texte exakt beibehalten:**
- Überschrift: `Überzeugen Sie sich selbst!`
- Dropdown "Produkt": `be radio - TESTEN` | `be radio - PRO` | `be radio - ADVANCED` | `be radio - BASIC`
- Felder: Anrede (Frau/Herr/Divers) | Vorname* | Nachname* | Firma* | E-mail* | Telefon | Anmerkung(en)
- Hinweistext: `Voraussetzungen: Breitbandinternet mit Flatrate, Audioanlage, Stromanschluss.`
- Datenschutz-Checkbox: Text beibehalten
- Submit-Button: Text beibehalten

Neues Design:
- Sektion-Hintergrund: `#080810` mit Blur-Blobs
- Formular-Container: Glassmorphism-Karte (`glass-card`)
- Labels: `#94a3b8`, `font-size: 0.75rem`, `letter-spacing: 0.1em`, uppercase
- Input-Felder:
  ```css
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  color: #f8fafc;
  padding: 1rem 1.25rem;
  ```
  Focus: `border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.2);`
- Dropdown: Gleicher Dark-Stil, `color-scheme: dark`
- Hinweis-Box: `background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.2);`
- Submit-Button: Gradient (Purple→Blue) + Glow — Icon `fa-paper-plane` oder `fa-send`
- Rechte Spalte (Info-Box falls vorhanden): Glassmorphism-Karte mit Kontaktdaten

---

## SEITE: login.html (Standalone — keine Komponente)

**Aktueller Stil:** Split-Screen — links Dark (`bg-slate-900`) mit roten Blobs, rechts Weiß mit Formular
**Neuer Stil:** Beide Seiten Dark, stärkere Glassmorphism-Ästhetik

**Alle Texte exakt beibehalten:**

Linke Seite (Brand Panel):
- Logo + "be radio" (Rot)
- Badge: `Admin Portal`
- Headline: `Steuern Sie Ihr Programm.` (font-thin, "Programm." in Gradient-Text statt Rot)
- Subtext: `Verwalten Sie Playlists, Spots und Geräte zentral an einem Ort. Einfach, intuitiv und jederzeit verfügbar.`
- Footer: `© [Jahr] bradio GmbH`

Rechte Seite (Login Form):
- Titel: `Willkommen`
- Subtext: `Bitte geben Sie Ihre Zugangsdaten ein.`
- Label "Benutzername" | Label "Passwort"
- Submit-Button: Text beibehalten

Neues Design:
- Linke Seite: `background: #0f0f1a` — Blobs: Purple `rgba(124,58,237,0.2)` + Cyan `rgba(6,182,212,0.15)` statt Rot/Blau
- SVG-Linie: Farbe `#7c3aed` statt `#ff2d57`
- Headline: `font-thin`, "Programm." = Gradient-Text (Purple→Blue)
- Rechte Seite: `background: #080810`
- Formular-Container: Glassmorphism-Karte, zentriert
- Input-Felder: Dark-Input-Stil (gleich wie test-form)
  - Icon links im Input: `#7c3aed` (Purple) im Focus
- Submit-Button: Gradient (Purple→Blue) + Glow, volle Breite
- Mobile Logo: Logo-Bild + "be radio" (Rot) — unverändert
- GSAP-Animationen (`login-hero-anim`, `login-form-anim opacity-0 translate-y-4`): beibehalten
- `#copyright-year` span beibehalten (JS befüllt es)

---

## Was NICHT geändert werden darf

| Element | Grund |
|---|---|
| Alle deutschen Texte | Inhalt bleibt 1:1 |
| Alle Bild-Pfade (`assets/...`) | Dateien bleiben unverändert |
| Video-Pfad und Einbindung | `assets/hero_video/herovideo.mp4` |
| Komponenten-Architektur | `componentloader.js` + `<div id="...">` Platzhalter |
| `id`-Attribute aller Sektionen | Wird für Navigation/Ankern gebraucht |
| `href` der Links | Alle URLs bleiben gleich |
| `#copyright-year` span | JS füllt das automatisch |
| Logo-Datei | Wird nicht ersetzt |
| "be radio" Schriftzug Farbe | Bleibt `#ff2d57` |

---

## Ausgabe-Format

Schreibe jede Komponente als vollständige, eigenständige HTML-Datei. Gib sie nacheinander aus, jeweils mit dem Dateinamen als Überschrift, z.B.:

```
### components/navigation.html
[vollständiger HTML-Code]

### components/hero.html
[vollständiger HTML-Code]
```

Beginne mit der Navigation, dann Hero, dann alle weiteren Sektionen in der Reihenfolge der Seite.

Danach folgen die weiteren Seiten in dieser Reihenfolge:
1. `components/navigation-setup.html`
2. `components/setup-content.html`
3. `components/test-form.html`
4. `login.html` (vollständige HTML-Datei inkl. `<!DOCTYPE html>`, `<head>`, `<body>`)

Zum Schluss `css/styles.css` (nur die neuen/geänderten Regeln) und `js/config.js`.
