# 🚀 FILEZILLA UPLOAD - Schnellanleitung

## ⚡ KURZ-VERSION: 5 Schritte zum Upload

### Schritt 1: FileZilla öffnen und verbinden
```
Host: ftp.beradio.at (oder Ihre Server-Adresse)
Benutzername: [Vom Provider erhalten]
Passwort: [Vom Provider erhalten]
Port: 21 (FTP) oder 22 (SFTP bevorzugt)
```

**Button "Schnellverbindung" klicken**

---

### Schritt 2: Verzeichnisse öffnen

**LINKS (Ihr Computer):**
```
C:\Users\odkhu\Desktop\bRadio_01\1103026_NB_BRadio\
```

**RECHTS (Server):**
```
public_html/    (oder www/ oder htdocs/)
```

⚠️ **WICHTIG:** Die Dateien müssen DIREKT ins Root, nicht in Unterordner!

---

### Schritt 3: Alles hochladen

1. **LINKS:** Alle Dateien markieren (Strg+A)
2. **Rechtsklick** → **Hochladen**
3. ⏳ **Warten** (2-5 Minuten für Videos)

**Was hochgeladen wird:**
- ✅ index.html, setup.html, test.html, login.html, impressum.html
- ✅ assets/ (mit allen Unterordnern)
- ✅ components/ (alle HTML-Dateien)
- ✅ css/ (styles.css)
- ✅ js/ (alle JavaScript-Dateien)
- ✅ .htaccess (falls vorhanden)

---

### Schritt 4: Berechtigungen setzen

**RECHTS im Server:**
1. Alle Dateien markieren (Strg+A)
2. **Rechtsklick** → **Dateiberechtigungen**
3. **Numerischer Wert:**
   - Dateien: `644`
   - Ordner: `755`
4. ✅ Haken bei **"In Unterverzeichnisse übertragen"**
5. **OK** klicken

---

### Schritt 5: Website testen

Öffnen Sie im Browser:
```
https://www.beradio.at/
```

**Prüfen Sie:**
- ✅ Seite lädt vollständig
- ✅ Video spielt ab
- ✅ Bilder werden angezeigt
- ✅ Navigation funktioniert
- ✅ Setup-Seite öffnet
- ✅ Mobile Ansicht funktioniert (F12 → Responsive)

---

## 🆘 PROBLEME?

### "403 Forbidden" Fehler
→ Berechtigungen falsch → Siehe Schritt 4 wiederholen

### "Seite lädt, aber keine Komponenten"
→ Browser-Konsole öffnen (F12)
→ Fehler ablesen und melden

### "Videos spielen nicht"
→ In FileZilla: **Übertragung** → **Übertragungstyp** → **Binär**
→ Videos erneut hochladen

### "Bilder fehlen"
→ Dateinamen-Groß/Kleinschreibung prüfen
→ Alle Pfade sind kleingeschrieben!

---

## 📞 CHECKLISTE VOR DEM UPLOAD

- [ ] FileZilla installiert
- [ ] FTP-Zugangsdaten zur Hand
- [ ] Alle Dateien in `1103026_NB_BRadio` Ordner komplett
- [ ] Internetverbindung stabil
- [ ] 15 Minuten Zeit eingeplant

---

## 📁 WICHTIGE DATEIEN (müssen vorhanden sein)

```
✓ index.html           → Hauptseite
✓ setup.html           → Setup-Anleitung  
✓ test.html            → Testformular
✓ login.html           → Login
✓ impressum.html       → Impressum

✓ assets/hero_video/herovideo.mp4           → 🎥 Haupt-Video
✓ assets/setup/digital_radio...mp4          → 🎥 Setup-Video

✓ components/hero.html                      → Hero-Section
✓ components/navigation.html                → Menü
✓ components/footer.html                    → Footer

✓ js/animations.js                          → Animationen
✓ js/componentloader.js                     → Komponenten-Loader
✓ css/styles.css                            → Styles
```

---

## ⚙️ FILEZILLA EINSTELLUNGEN

**Übertragung → Übertragungstyp:**
- ✅ **Binär** (für Videos & Bilder)

**Übertragung → Maximale Verbindungen:**
- ✅ **2-3** (nicht zu viele)

**Übertragung → Bei Fehler:**
- ✅ **Wiederholen** aktivieren

---

## 🎯 ERFOLGSMELDUNG

Wenn Sie diese Meldung sehen:
```
✅ 127 Dateien erfolgreich übertragen
```

**Dann:**
1. Öffnen Sie: `https://www.beradio.at/`
2. Prüfen Sie alle Funktionen
3. Testen Sie auf Handy/Tablet
4. 🎉 **Fertig!**

---

## 📝 NOTIZEN

- **Upload-Dauer:** ca. 5-10 Minuten (abhängig von Internet)
- **Video-Größen:** ca. 50-100 MB
- **Gesamt-Projektgröße:** ca. 150-200 MB
- **Benötigte Server-Geschwindigkeit:** Min. 100 Mbit/s empfohlen

---

## 🔗 WEITERFÜHRENDE LINKS

- FileZilla Download: https://filezilla-project.org/
- FileZilla Anleitung: https://wiki.filezilla-project.org/
- Vollständige Anleitung: Siehe `DEPLOYMENT.md`

---

**Stand:** 11. März 2026
**Version:** 1.0 - Production Ready ✅
