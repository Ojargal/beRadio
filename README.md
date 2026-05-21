# BERADIO - Business Radio Lösung

## 🎵 Über das Projekt

BERADIO ist eine moderne, responsive Website für eine Business-Radio-Lösung. Das Projekt bietet eine komplette Web-Präsenz mit Informationen über das Produkt, Features, Preise und Setup-Anleitungen.

## 🚀 Features

- ✅ **Responsive Design** - Funktioniert auf allen Geräten (Desktop, Tablet, Mobile)
- ✅ **Video-Integration** - Hero-Videos mit automatischem Wechsel
- ✅ **Animationen** - Smooth GSAP-Animationen beim Scrollen
- ✅ **Component-Based** - Modulare HTML-Komponenten
- ✅ **Modern UI** - Tailwind CSS für modernes Design
- ✅ **Interactive Elements** - Modals, Hover-Effekte, Scroll-to-Top

## 📂 Projekt-Struktur

```
BERADIO/
├── index.html              # Startseite
├── setup.html             # Setup-Anleitung
├── test.html              # Test-Seite
├── login.html             # Login-Seite
├── impressum.html         # Impressum
├── assets/                # Medien-Assets
│   ├── hero_video/       # Hero-Videos
│   ├── videos/           # Feature-Videos
│   ├── images/           # Bilder
│   ├── logos/            # Logos
│   ├── qrcode/           # QR-Codes
│   └── setup/            # Setup-Bilder & Videos
├── components/            # HTML-Komponenten
│   ├── navigation.html
│   ├── navigation-setup.html
│   ├── hero.html
│   ├── features.html
│   ├── info-section.html
│   ├── program.html
│   ├── pricing.html
│   ├── user-management.html
│   ├── setup-content.html
│   ├── benefits.html
│   ├── clients.html
│   ├── contact.html
│   ├── footer.html
│   ├── modals.html
│   └── test-form.html
├── css/
│   ├── styles.css         # Custom CSS
│   ├── beta-animation.css # Beta Pulse-Animation
│   └── text-glow.css      # Text-Glow Effekt
├── js/
│   ├── animations.js      # GSAP Animationen
│   ├── componentloader.js # Component Loader
│   ├── config.js          # Konfiguration
│   └── scrollToTop.js     # Scroll-to-Top Button
├── DEPLOYMENT.md          # Deployment-Anleitung
└── README.md             # Diese Datei
```

## 🛠️ Technologien

- **HTML5** - Struktur
- **CSS3** - Styling
- **JavaScript (ES6+)** - Interaktivität
- **Tailwind CSS v3** - Utility-First CSS Framework
- **GSAP 3.12.2** - Animationen
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Roboto Schriftart
- **AOS (Animate On Scroll)** - Scroll-Animationen für World-Map Sektion

## 🖥️ Lokale Entwicklung

### Voraussetzungen
- Einen HTTP Server (Python, Node.js, PHP, etc.)

### Python Server starten
```bash
# In das Projekt-Verzeichnis navigieren
cd "C:\Users\odkhu\Desktop\bRadio_01\25032026_NB_Bradio"

# Python 3 HTTP Server starten
python -m http.server 8000

# Im Browser öffnen
# http://localhost:8000
```

### Node.js Server starten
```bash
# http-server installieren (einmalig)
npm install -g http-server

# Server starten
http-server -p 8000
```

### PHP Server starten
```bash
php -S localhost:8000
```

⚠️ **WICHTIG:** Das Projekt verwendet die Fetch API zum Laden von Komponenten und funktioniert NICHT mit dem `file://` Protokoll. Sie müssen einen HTTP Server verwenden!

## 🌐 Deployment

Siehe [DEPLOYMENT.md](DEPLOYMENT.md) für detaillierte Anweisungen zum Deployment mit FileZilla auf einen Webserver.

**Kurzfassung:**
1. Alle Dateien via FileZilla auf den Webserver hochladen
2. Sicherstellen, dass die Ordnerstruktur erhalten bleibt
3. Binär-Transfer-Modus für Videos und Bilder verwenden
4. Über HTTP/HTTPS aufrufen (z.B. http://ihre-domain.de)

## 📄 Seiten-Übersicht

### 1. Startseite (index.html)
- Hero-Section mit Video
- Features-Section
- Info-Section (Typewriter-Animation)
- Programm-Übersicht
- Preise
- Kunden-Logos (Marquee)
- World-Map Netzwerk-Visualisierung
- QR-Kontakt-Section (direkt in index.html)
- Benefits
- Kontakt-Formular
- Footer

### 2. Setup-Seite (setup.html)
- Setup-Anleitung
- Video-Tutorial
- 3 Setup-Schritte (Power, Audio, LAN)
- QR-Code für Kontakt

### 3. Test-Seite (test.html)
- Test-Formular
- Kontakt-Informationen

### 4. Login-Seite (login.html)
- Login-Formular
- Link zur Registrierung

### 5. Impressum (impressum.html)
- Firmeninformationen
- Rechtliche Hinweise

## 🎨 Design-System

### Farben
- **Primary:** `#ff2d57` (Pink/Rot)
- **Primary Hover:** `#e6285a`
- **Secondary:** Slate-Farben (900, 800, 700, 600, 500)

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Animationen
- GSAP Timeline-Animationen
- ScrollTrigger für Scroll-basierte Animationen
- Hover-Effekte mit Tailwind-Transitions

## 🐛 Bekannte Probleme & Lösungen

### Komponenten werden nicht geladen
**Problem:** Seite lädt, aber Teile fehlen  
**Lösung:** HTTP Server verwenden (nicht file://)

### Videos laufen nicht
**Problem:** Videos werden nicht abgespielt  
**Lösung:** Browser unterstützt autoplay mit sound nicht - Videos sind `muted`

### Scroll-Effekte funktionieren nicht
**Problem:** GSAP-Animationen starten nicht  
**Lösung:** JavaScript-Fehler in Browser-Konsole prüfen (F12)

## 📱 Browser-Kompatibilität

Getestet und funktioniert in:
- ✅ Chrome (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browser (Chrome, Safari)

## 🤝 Support

Bei Fragen oder Problemen:
1. Prüfen Sie [DEPLOYMENT.md](DEPLOYMENT.md)
2. Öffnen Sie die Browser-Konsole (F12) auf Fehler
3. Stellen Sie sicher, dass ein HTTP Server läuft

## 📝 Changelog

### Version 1.0.0 (Aktuell)
- ✅ Initiales Release
- ✅ Alle Seiten implementiert
- ✅ Responsive Design
- ✅ Animationen mit GSAP
- ✅ Component-Based Architecture
- ✅ Case-Sensitivity-Probleme behoben
- ✅ FileZilla Deployment-Ready

---

**Entwickelt für:** BERADIO  
**Erstellt mit:** ❤️ und GitHub Copilot
