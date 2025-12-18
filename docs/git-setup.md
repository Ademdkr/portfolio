# Git Repository Setup - Initial Push Anleitung (GitHub)

Diese Anleitung zeigt, wie du ein neues Git-Repository auf GitHub erstellst und den ersten Push durchführst.

## Voraussetzungen

- Git ist installiert (`git --version` zum Überprüfen)
- Ein GitHub Account
- GitHub CLI ist installiert (empfohlen): `winget install GitHub.cli`

## Schritt 1: Lokales Repository initialisieren

```powershell
# Im Projektverzeichnis
cd c:\Users\Adem\Desktop\Dev\TypeScript\portfolio

# Git Repository initialisieren
git init
```

## Schritt 2: .gitignore erstellen (falls nicht vorhanden)

Erstelle eine `.gitignore` Datei mit folgendem Inhalt:

```
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
out-tsc/
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local

# Testing
coverage/
.nyc_output/

# Misc
*.log
npm-debug.log*
.angular/
```

## Schritt 3: Erste Dateien hinzufügen

```powershell
# Alle Dateien zum Staging-Bereich hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit"
```

## Schritt 4: GitHub Repository erstellen

### Option A: Über GitHub CLI (empfohlen) 🚀

```powershell
# GitHub CLI installieren (falls nicht vorhanden)
winget install GitHub.cli

# Bei GitHub anmelden
gh auth login

# Repository erstellen und direkt pushen - FERTIG!
gh repo create portfolio --public --source=. --remote=origin --push
```

**Das war's!** In einem Befehl wurde das Repository erstellt und der Initial Push durchgeführt! 🎉

**Weitere nützliche GitHub CLI Befehle:**

```powershell
# Privates Repository erstellen
gh repo create portfolio --private --source=. --remote=origin --push

# Mit Beschreibung erstellen
gh repo create portfolio --public --description "My portfolio website" --source=. --push

# Interaktiver Modus (führt durch alle Optionen)
gh repo create

# Repository im Browser öffnen
gh repo view --web

# Repository Status anzeigen
gh repo view
```

### Option B: Über die GitHub Weboberfläche

1. Gehe zu [github.com](https://github.com)
2. Klicke auf "New repository" (grüner Button)
3. Repository-Name: `portfolio`
4. Beschreibung (optional): "My portfolio website"
5. Wähle **Public** oder **Private**
6. ⚠️ **WICHTIG**: **NICHT** "Initialize with README" auswählen (da wir bereits lokale Dateien haben)
7. Klicke auf "Create repository"

## Schritt 5: Remote Repository verbinden (nur bei Option B nötig)

Nach der Erstellung zeigt dir GitHub die Commands an:

```powershell
# Remote hinzufügen (ersetze mit deiner URL)
git remote add origin https://github.com/dein-username/portfolio.git

# oder mit SSH:
git remote add origin git@github.com:dein-username/portfolio.git

# Remote überprüfen
git remote -v
```

## Schritt 6: Branch umbenennen (optional)

Der Standard-Branch heißt oft `master`, GitHub verwendet `main`:

```powershell
# Branch in main umbenennen
git branch -M main
```

## Schritt 7: Initial Push durchführen

```powershell
# Ersten Push zum Remote Repository
git push -u origin main

# Die -u Flag setzt den Upstream-Branch für zukünftige Pushes
```

## Schritt 8: Push bestätigen

Lade die Repository-Seite neu - deine Dateien sollten jetzt online sichtbar sein!

## Zukünftige Änderungen pushen

Nach dem Initial Setup:

```powershell
# Änderungen anzeigen
git status

# Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Beschreibung der Änderungen"

# Push durchführen
git push
```

## Häufige Probleme

### Problem: "fatal: remote origin already exists"

```powershell
# Vorhandenes Remote entfernen
git remote remove origin

# Neues Remote hinzufügen
git remote add origin <deine-url>
```

### Problem: "Permission denied (publickey)"

- SSH-Keys müssen konfiguriert sein (siehe [GitHub SSH Setup](https://docs.github.com/de/authentication/connecting-to-github-with-ssh))
- Alternativ: HTTPS-URL verwenden
- Oder: GitHub CLI verwenden (empfohlen): `gh auth login`

### Problem: "failed to push some refs"

```powershell
# Remote-Änderungen holen und mergen
git pull origin main --rebase

# Erneut pushen
git push
```

## Nützliche Git Commands

```powershell
# Aktuellen Status anzeigen
git status

# Commit-Historie anzeigen
git log --oneline

# Änderungen anzeigen
git diff

# Letzten Commit rückgängig machen (behält Änderungen)
git reset --soft HEAD~1

# Alle lokalen Änderungen verwerfen
git reset --hard HEAD

# Branch erstellen und wechseln
git checkout -b feature-name
```

## Empfohlener Workflow für Feature-Entwicklung

1. **Feature-Branch erstellen**: `git checkout -b feature/neue-funktion`
2. **Änderungen committen**: `git add .` → `git commit -m "Beschreibung"`
3. **Push zum Remote**: `git push -u origin feature/neue-funktion`
4. **Pull Request erstellen**: `gh pr create --web` (öffnet Browser)
5. **Nach Merge**: Zurück zu main wechseln und pullen

```powershell
git checkout main
git pull origin main
git branch -d feature/neue-funktion  # Lokalen Branch löschen
```

## Nützliche GitHub CLI Befehle

```powershell
# Pull Request erstellen
gh pr create --title "Feature hinzugefügt" --body "Beschreibung"

# Pull Requests anzeigen
gh pr list

# Issue erstellen
gh issue create --title "Bug gefunden"

# Repository klonen
gh repo clone username/repo-name

# Repository im Browser öffnen
gh repo view --web
```

## Weitere Ressourcen

- [GitHub CLI Dokumentation](https://cli.github.com/manual/)
- [Git Dokumentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Pro Git Buch](https://git-scm.com/book/de/v2) (Deutsch)
- [GitHub Skills](https://skills.github.com/) - Interaktive Tutorials
