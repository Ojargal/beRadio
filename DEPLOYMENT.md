# 🚀 FileZilla Deployment Guide - be radio Website

## ✅ Projekt-Status: BEREIT FÜR UPLOAD

### Letzte Überprüfung: 11. März 2026

---

## 📋 PRE-DEPLOYMENT CHECKLISTE

### ✅ Bereits korrigiert
- [x] Alle Pfade auf Kleinschreibung (Linux case-sensitivity)
- [x] Führende Slashes in Pfaden entfernt
- [x] Video-Fallback für mobile Geräte
- [x] Sichtbarkeits-Fallbacks für langsames Internet
- [x] Setup-Seite Video-Integration
- [x] Typewriter-Animation mit Scroll-Trigger

### ⚠️ WICHTIG: Bekannte Besonderheiten
Die folgenden Dateien haben **Leerzeichen oder Sonderzeichen** im Namen. Sie funktionieren, sollten aber idealerweise umbenannt werden:

**Ordner mit Leerzeichen:**
- `assets/images/3seites bild/` → Funktioniert, aber nicht optimal

**Dateien mit Leerzeichen:**
- `hotel am konzerthaus vienna.png`
- `magdas hotel.png`
- `logo small - ohne schriftzug v3 small-5c7c2735.png`

**Dateien mit Sonderzeichen:**
- `nameit!.png` (Ausrufezeichen)

**Status:** Diese Dateien werden URL-encoded verwendet und funktionieren auf dem Server.

---

## 🌐 SERVER-ANFORDERUNGEN

### Minimale Anforderungen:
✅ **Webserver mit HTTP/HTTPS Support**
- Apache (empfohlen)
- Nginx  
- IIS
- Beliebiger statischer Webserver

✅ **KEINE speziellen Anforderungen:**
- Keine PHP/Node.js/Python erforderlich
- Keine Datenbank erforderlich
- Nur statische HTML/CSS/JS Dateien

### WICHTIG: Fetch API benötigt HTTP
Das Projekt lädt HTML-Komponenten dynamisch per **Fetch API**. Dies funktioniert **NICHT** mit `file://` Protokoll!

**Zum lokalen Testen:**
```bash
# Python 3
python -m http.server 8000

# Node.js http-server
npm install -g http-server
http-server -p 8000

# PHP
php -S localhost:8000
```

---

## 📁 VOLLSTÄNDIGE PROJEKTSTRUKTUR

```
/ (Root-Verzeichnis auf dem Server)
├── index.html                 ← Hauptseite
├── setup.html                 ← Setup-Anleitung
├── test.html                  ← Test-Formular
├── login.html                 ← Login-Seite
├── impressum.html            ← Impressum
├── .htaccess                 ← Optional: Apache-Konfiguration
│
├── assets/
│   ├── firmen_logos_fremd/   ← Client-Logos (6 Dateien)
│   ├── hero_video/           ← Hauptvideo (herovideo.mp4)
│   ├── images/               ← Bilder, Setup-Icons
│   │   ├── program/          ← Programm-Cover
│   │   └── 3seites bild/     ← Zusätzliche Bilder
│   ├── logos/                ← be radio Logos
│   ├── qrcode/               ← QR-Codes
│   ├── setup/                ← Setup-Video + Bilder
│   └── videos/               ← Feature-Videos
│
├── components/               ← HTML-Komponenten (15 Dateien)
│   ├── benefits.html
│   ├── clients.html
│   ├── contact.html
│   ├── features.html
│   ├── footer.html
│   ├── hero.html
│   ├── info-section.html
│   ├── modals.html
│   ├── navigation.html
│   ├── navigation-setup.html
│   ├── pricing.html
│   ├── program.html
│   ├── setup-content.html
│   ├── test-form.html
│   └── user-management.html
│
├── css/
│   ├── styles.css            ← Haupt-Stylesheet
│   ├── beta-animation.css    ← Beta Pulse-Animation (index.html)
│   └── text-glow.css         ← Text-Glow Effekt (index.html)
│
└── js/
    ├── animations.js         ← GSAP Animationen
    ├── componentloader.js    ← Dynamisches Komponenten-Laden
    ├── config.js             ← Tailwind-Konfiguration
    └── scrollToTop.js        ← Scroll-to-Top Button
```

---

## 🔧 FILEZILLA DEPLOYMENT - SCHRITT FÜR SCHRITT

### 1. FileZilla-Verbindung einrichten

**FTP-Zugangsdaten von Ihrem Hosting-Provider:**
- **Host:** Normalerweise `ftp.your-domain.com` oder IP-Adresse
- **Benutzername:** Von Provider erhalten
- **Passwort:** Von Provider erhalten
- **Port:** 21 (FTP) oder 22 (SFTP - empfohlen!)

**In FileZilla:**
1. Öffnen Sie FileZilla
2. Klicken Sie auf **Datei** → **Servermanager**
3. Klicken Sie auf **Neuer Server**
4. Geben Sie die Zugangsdaten ein
5. **Protokoll:** SFTP (empfohlen) oder FTP
6. Klicken Sie auf **Verbinden**

---

### 2. Upload vorbereiten

**Server-Verzeichnis identifizieren:**
- Oft heißt es: `public_html/`, `www/`, `htdocs/` oder `html/`
- Fragen Sie Ihren Provider, falls unsicher

**Wichtig:**
- Die Dateien müssen **direkt** in das Web-Root-Verzeichnis, NICHT in Unterordner!
- `index.html` muss im Root liegen, damit die Website unter `www.ihre-domain.de` erreichbar ist

---

### 3. Upload durchführen

**Linke Seite (Lokal):**
- Navigiere zu: `C:\Users\odkhu\Desktop\bRadio_01\25032026_NB_Bradio\`

**Rechte Seite (Server):**
- Navigiere zu deinem Web-Root-Verzeichnis (`public_html/` o.ä.)

**Upload-Methode 1: Alles auf einmal (empfohlen)**
1. Markiere alle Dateien und Ordner im lokalen Verzeichnis
2. Rechtsklick → **Hochladen**
3. Warte, bis der Transfer abgeschlossen ist (kann einige Minuten dauern wegen Videos)

**Upload-Methode 2: Schrittweise**
1. Zuerst HTML-Dateien hochladen
2. Dann `css/` und `js/` Ordner
3. Dann `components/` Ordner  
4. Zuletzt `assets/` Ordner (dauert am längsten wegen Videos)

---

### 4. Nach dem Upload

**Berechtigungen überprüfen (Permissions):**
- Dateien: `644` (rw-r--r--)
- Ordner: `755` (rwxr-xr-x)

**In FileZilla:**
1. Rechtsklick auf Datei/Ordner → **Dateiberechtigungen**
2. Stelle sicher, dass die Berechtigungen korrekt sind

---

### 5. Test der Website

**Funkt
│   ├── setup-content.html
│   ├── test-form.html
│   └── user-management.html
├── css/
│   ├── styles.css
│   ├── beta-animation.css
│   └── text-glow.css
└── js/
    ├── animations.js
    ├── componentloader.js
    ├── config.js
    └── scrollToTop.js
```

### 2. FileZilla Upload
1. Öffnen Sie FileZilla
2. Verbinden Sie sich mit Ihrem Webserver:
   - Host: (z.B. ftp.ihre-domain.de oder beradio.at)
   - Benutzername: Ihr FTP-Benutzername
   - Passwort: Ihr FTP-Passwort
   - Port: 21 (Standard FTP) oder 22 (SFTP)

3. Navigieren Sie zum Zielverzeichnis (z.B. `/v2/` für beradio.at/v2/)

4. Laden Sie ALLE Dateien und Ordner hoch:
   - Ziehen Sie die Dateien vom lokalen System (links) zum Server (rechts)
   - ⚠️ WICHTIG: Laden Sie auch die `.htaccess` Datei hoch!
   - Stellen Sie sicher, dass die Ordnerstruktur erhalten bleibt

5. **Setzen Sie die Dateiberechtigungen:**
   - Markieren Sie alle Dateien und Ordner
   - Rechtsklick → "Dateiattribute..."
   - Dateien: `644` / Ordner: `755`
   - ✅ "In Unterverzeichnisse übertragen" aktivieren

### 3. Wichtige Upload-Einstellungen
- **Transfer-Modus:** Binär (für Videos und Bilder wichtig!)
- **Dateien überschreiben:** Ja (bei Updates)
- **Ordnerstruktur beibehalten:** Ja

### 4. Nach dem Upload prüfen
Öffnen Sie im Browser: `http://ihre-domain.de/index.html`

**Test-Checklist:**
- [ ] Startseite lädt komplett (index.html)
- [ ] Navigation ist sichtbar und funktioniert
- [ ] Hero-Video läuft
- [ ] Alle Bilder werden angezeigt
- [ ] Setup-Seite funktioniert (setup.html)
- [ ] Test-Seite öffnet sich (test.html)
- [ ] Login-Seite lädt (login.html)
- [ ] Modals öffnen sich (Impressum, Datenschutz)
- [ ] Scroll-Effekte funktionieren
- [ ] Mobile Ansicht funktioniert

## 🔧 Mögliche Probleme und Lösungen

### Problem: "403 Forbidden Error"
**Ursache:** Falsche Dateiberechtigungen auf dem Server
**Lösung:**

1. **In FileZilla: Dateirechte setzen**
   - Markieren Sie ALLE Dateien und Ordner im `/v2` Verzeichnis
   - Rechtsklick → "Dateiattribute..." 
   - **Für Dateien:** Numerischer Wert `644` (oder: Owner: Lesen+Schreiben, Group: Lesen, Public: Lesen)
   - **Für Ordner:** Numerischer Wert `755` (oder: Owner: Alle, Group: Lesen+Ausführen, Public: Lesen+Ausführen)
   - ✅ Haken bei "In Unterverzeichnisse übertragen"
   - Klicken Sie auf "OK"

2. **.htaccess Datei hochladen**
   - Laden Sie die `.htaccess` Datei aus dem Projekt-Root hoch
   - Platzieren Sie sie im `/v2` Verzeichnis
   - Setzen Sie die Berechtigung auf `644`

3. **Prüfen Sie die index.html**
   - Stellen Sie sicher, dass `index.html` im `/v2` Verzeichnis ist
   - Berechtigung: `644`

### Problem: "Seite lädt, aber Komponenten fehlen"
**Ursache:** Fetch API wird blockiert oder Server unterstützt kein HTTP
**Lösung:** 
- Prüfen Sie die Browser-Konsole (F12 → Console)
- Stellen Sie sicher, dass Sie über HTTP/HTTPS zugreifen (NICHT file://)
- Prüfen Sie Server-Konfiguration

### Problem: "Videos werden nicht angezeigt"
**Ursache:** 
- Falsche Pfade (Case-Sensitivity)
- Videos nicht als Binär übertragen
- MIME-Typ nicht korrekt

**Lösung:**
- Alle Video-Pfade sind bereits korrigiert
- FileZilla auf "Binär" Transfer-Modus setzen
- Server-Konfiguration prüfen (MIME-Type: video/mp4)

### Problem: "Bilder werden nicht angezeigt"
**Ursache:** Case-Sensitivity oder falsche Pfade
**Lösung:** Bereits korrigiert! Alle Pfade sind jetzt kleingeschrieben.

### Problem: "CORS-Fehler in Browser-Konsole"
**Ursache:** Browser blockiert Cross-Origin Requests
**Lösung:**
- Stellen Sie sicher, dass Sie über HTTP/HTTPS zugreifen
- Bei lokaler Entwicklung: Verwenden Sie einen lokalen Server (siehe oben)

## 📊 Externe Abhängigkeiten (CDN)

Das Projekt verwendet folgende externe Ressourcen (funktionieren automatisch):
- **Tailwind CSS:** https://cdn.tailwindcss.com
- **Google Fonts:** Roboto (fonts.googleapis.com)
- **Font Awesome 6.4.0:** https://cdnjs.cloudflare.com
- **GSAP 3.12.2:** https://cdn.jsdelivr.net
- **AOS (Animate On Scroll):** https://unpkg.com/aos@2.3.1

Diese werden automatisch geladen und benötigen **keine** lokalen Dateien.

## ⚙️ Optionale Server-Konfiguration

### .htaccess (für Apache)
Erstellen Sie eine `.htaccess` Datei im Root-Verzeichnis:

```apache
# Aktiviere Rewrite Engine
RewriteEngine On

# Redirect von www zu non-www (optional)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]

# Error Pages
ErrorDocument 404 /index.html

# MIME Types
AddType video/mp4 .mp4
AddType image/jpeg .jpeg .jpg
AddType image/png .png

# Compression (optional, für bessere Performance)
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache Control (optional)
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType video/mp4 "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## ✅ Deployment-Checklist

Vor dem Upload:
- [ ] Alle Dateien sind vorhanden
- [ ] Pfade sind relativ (keine absoluten Pfade mit `/`)
- [ ] Alle Dateinamen sind kleingeschrieben
- [ ] Videos im MP4-Format
- [ ] Bilder optimiert (nicht zu groß)

Während des Uploads:
- [ ] FTP-Verbindung erfolgreich
- [ ] Binär-Transfer-Modus aktiv
- [ ] Ordnerstruktur wird beibehalten
- [ ] Alle Dateien vollständig übertragen

Nach dem Upload:
- [ ] Website über HTTP/HTTPS erreichbar
- [ ] Alle Seiten getestet
- [ ] Browser-Konsole auf Fehler geprüft (F12)
- [ ] Mobile Ansicht getestet
- [ ] Videos abspielen
- [ ] Alle Links funktionieren

## 🎯 Zusammenfassung

✅ **Alle kritischen Pfad-Probleme wurden behoben**
✅ **Projekt ist deployment-ready für FileZilla**
✅ **Benötigt nur einen Standard-Webserver (HTTP/HTTPS)**
✅ **Keine Backend-Technologien erforderlich**
✅ **Alle externen Ressourcen werden automatisch von CDNs geladen**

---

**Letzte Aktualisierung:** $(Get-Date -Format "dd.MM.yyyy HH:mm")
**Autor:** GitHub Copilot
