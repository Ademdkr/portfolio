> Historische Dokumentation. Den aktuellen Portfolio-Deployment-Ablauf beschreibt [Cloudflare Pages](10-cloudflare-pages.md).

# Deployment Setup - Schritt 6: Render Service einrichten

## Überblick

In diesem Schritt richtest du das Portfolio als Web Service auf Render ein. Render baut und hostet deine Anwendung automatisch bei jedem Push auf den `main` Branch.

## Voraussetzungen

- ✅ GitHub Repository mit Portfolio Code
- ✅ Dockerfile im Root
- ✅ nginx.conf im Root
- ✅ Lokaler Test erfolgreich (`pnpm run local:deploy`)

## Schritt 1: Render Account erstellen

1. Gehe zu [https://render.com](https://render.com)
2. Klicke auf **"Get Started for Free"**
3. Registriere dich mit GitHub Account (empfohlen)
   - Autorisiere Render für Zugriff auf deine Repositories

## Schritt 2: Neuen Web Service erstellen

### 2.1 Dashboard öffnen

1. Nach Login: Render Dashboard
2. Klicke auf **"New +"** (oben rechts)
3. Wähle **"Web Service"**

### 2.2 Repository verbinden

**Option A: Alle Repositories (empfohlen)**

1. Wähle **"Connect GitHub"**
2. Klicke **"Configure GitHub App"**
3. Wähle **"All repositories"** oder spezifische Repos
4. Autorisiere

**Option B: Public Repository**

1. Gib Repository URL ein: `https://github.com/[username]/portfolio`

### 2.3 Repository auswählen

1. Finde dein `portfolio` Repository in der Liste
2. Klicke **"Connect"**

## Schritt 3: Service konfigurieren

### 3.1 Basic Settings

| Feld               | Wert                                                 |
| ------------------ | ---------------------------------------------------- |
| **Name**           | `portfolio` (oder eigener Name)                      |
| **Region**         | `Frankfurt (EU Central)` (empfohlen für Deutschland) |
| **Branch**         | `main`                                               |
| **Root Directory** | Leer lassen (falls Mono-Repo: Pfad angeben)          |

### 3.2 Build & Deploy Settings

| Feld                | Wert                 |
| ------------------- | -------------------- |
| **Runtime**         | `Docker`             |
| **Dockerfile Path** | `Dockerfile`         |
| **Docker Context**  | `.` (Root Directory) |

**Wichtig:** Render erkennt automatisch das Dockerfile!

### 3.3 Instance Type

**Free Tier:**

- **Instance Type:** `Free`
- **CPU:** 0.1 CPU
- **RAM:** 512 MB
- **Storage:** Ephemeral (bei jedem Deploy neu)
- **Sleep nach Inaktivität:** Ja (15 Minuten)

**Hinweis:** Free Tier reicht für Portfolio vollkommen aus!

**Starter Tier (Optional - $7/Monat):**

- Kein Sleep
- 0.5 CPU
- 512 MB RAM
- Bessere Performance

### 3.4 Advanced Settings (Optional)

**Health Check Path:**

```
/health
```

- Nutzt den `/health` Endpoint aus nginx.conf
- Render prüft damit, ob Service läuft

**Auto-Deploy:**

- ✅ **Enabled** (automatisch bei Push auf main)

## Schritt 4: Environment Variables (Optional)

Aktuell nicht benötigt für Portfolio.

**Falls später notwendig:**

1. Scrolle zu **"Environment Variables"**
2. Klicke **"Add Environment Variable"**
3. Beispiel:
   - Key: `NODE_ENV`
   - Value: `production`

## Schritt 5: Deploy starten

1. Scrolle nach unten
2. Klicke **"Create Web Service"**
3. Render startet automatisch ersten Deploy

### 5.1 Deploy-Prozess beobachten

**Live Logs anzeigen:**

- Dashboard → Dein Service → **"Logs"** Tab

**Erwartete Schritte:**

1. ✅ Cloning repository
2. ✅ Building Docker image
   - Build Stage (Node.js, pnpm install, ng build)
   - Production Stage (Nginx)
3. ✅ Starting service
4. ✅ Health check passed
5. ✅ **Deploy live** 🎉

**Erwartete Zeit:**

- Erster Deploy: ~2-3 Minuten
- Folgende Deploys: ~1-2 Minuten (mit Cache)

### 5.2 Deployment URL

Nach erfolgreichem Deploy:

- **URL:** `https://portfolio-[random].onrender.com`
- Oder Custom Domain (siehe unten)

## Schritt 6: Deploy Hook generieren

**Wofür?** GitHub Actions soll Render bei Push auf `main` triggern.

### 6.1 Deploy Hook erstellen

1. Dein Service → **"Settings"**
2. Scrolle zu **"Deploy Hooks"**
3. Klicke **"Create Deploy Hook"**
4. **Name:** `GitHub Actions`
5. Klicke **"Create"**

### 6.2 Deploy Hook URL kopieren

**URL Format:**

```
https://api.render.com/deploy/srv-xxxxxxxxxxxxx?key=yyyyyyyyyyy
```

**Wichtig:** Diese URL ist ein Secret! Nicht öffentlich teilen.

### 6.3 Secret in GitHub hinterlegen

1. GitHub Repository → **"Settings"**
2. **"Secrets and variables"** → **"Actions"**
3. Klicke **"New repository secret"**
4. **Name:** `RENDER_DEPLOY_HOOK_PORTFOLIO`
5. **Value:** Die kopierte Deploy Hook URL
6. Klicke **"Add secret"**

## Schritt 7: Custom Domain (Optional)

### 7.1 Custom Domain hinzufügen

1. Dein Service → **"Settings"**
2. Scrolle zu **"Custom Domains"**
3. Klicke **"Add Custom Domain"**
4. Gib Domain ein: `portfolio.deinedomain.com`

### 7.2 DNS konfigurieren

**Bei deinem Domain-Provider:**

**Für Subdomain (empfohlen):**

```
Type: CNAME
Name: portfolio
Value: [dein-service].onrender.com
```

**Für Root Domain:**

```
Type: A
Name: @
Value: [Render IP - siehe Dashboard]
```

### 7.3 SSL/TLS

- ✅ Automatisch von Render (Let's Encrypt)
- ✅ HTTPS erzwungen
- ✅ Kein Setup notwendig

## Schritt 8: Monitoring & Logs

### 8.1 Logs anzeigen

**Live Logs:**

1. Dashboard → Dein Service
2. **"Logs"** Tab
3. **"Live"** für Echtzeit

**Filteroptionen:**

- Last 10 minutes
- Last hour
- Last 24 hours
- Custom range

### 8.2 Metrics (Starter Tier+)

**Verfügbar ab Starter Plan:**

- CPU Usage
- Memory Usage
- Request Count
- Response Times

### 8.3 Events

**Deploy Events:**

1. Dashboard → Dein Service
2. **"Events"** Tab
3. Alle Deploys mit:
   - Status
   - Commit Message
   - Duration
   - Trigger (Manual/Auto/Webhook)

## Fehlerbehebung

### Fehler 1: Build Failed

**Symptom:**

```
Error: failed to solve: failed to compute cache key
```

**Ursachen:**

- Dockerfile-Syntax Fehler
- Fehlende Dateien (package.json, pnpm-lock.yaml)
- .dockerignore blockt wichtige Dateien

**Lösung:**

1. Lokalen Test: `pnpm run local:deploy`
2. Logs in Render prüfen
3. Dockerfile-Pfad checken

### Fehler 2: Health Check Failed

**Symptom:**

```
Health check failed at /health
```

**Ursachen:**

- Nginx nicht gestartet
- nginx.conf fehlerhaft
- Port 80 nicht exposed

**Lösung:**

1. Prüfe Dockerfile: `EXPOSE 80`
2. Prüfe nginx.conf: `/health` Endpoint vorhanden
3. Lokal testen: `curl http://localhost:8080/health`

### Fehler 3: Container Exit Code 1

**Symptom:**

```
Container exited with code 1
```

**Ursachen:**

- Build-Fehler
- Angular Build fehlgeschlagen
- Dependencies fehlen

**Lösung:**

1. Logs prüfen für spezifische Errors
2. Lokal bauen: `pnpm run ci:full-test`
3. Node/pnpm Version checken

### Fehler 4: Service Sleeps (Free Tier)

**Symptom:**

- Service schläft nach 15 Minuten Inaktivität
- Erste Anfrage nach Sleep dauert 30+ Sekunden

**Nicht wirklich ein Fehler:**

- Free Tier Limitation
- Kein Fix außer Upgrade zu Starter Plan

**Workaround:**

- Uptime-Monitor (z.B. UptimeRobot)
- Pings alle 10 Minuten
- Hält Service wach

## Kosten

### Free Tier

- **Preis:** $0/Monat
- **Limitations:**
  - 750 Stunden/Monat (genug für 1 Service)
  - Sleep nach 15 Min Inaktivität
  - Shared CPU/RAM
- **Perfekt für:** Portfolio, Demos

### Starter Tier

- **Preis:** $7/Monat
- **Benefits:**
  - Kein Sleep
  - 0.5 CPU
  - 512 MB RAM
  - Bessere Performance
- **Empfohlen für:** Production Services

## Nächste Schritte

1. ✅ Render Service erstellt
2. ✅ Deploy Hook generiert
3. ✅ GitHub Secret hinterlegt
4. ⏳ Test Push auf `main` Branch
5. ⏳ GitHub Actions Workflow validieren

## Test Deployment

### Manueller Test

1. GitHub → Dein Repository
2. Gehe zu **"Actions"** Tab
3. Warte auf Workflow-Run (bei Push auf `main`)
4. Prüfe:
   - ✅ Workflow erfolgreich
   - ✅ Render Deploy getriggert
   - ✅ Service Live

### Automatischer Test

```bash
# Dummy-Commit für Test
git commit --allow-empty -m "test: trigger deployment"
git push origin main
```

**Erwartetes Verhalten:**

1. GitHub Actions Workflow startet
2. Build & Tests laufen
3. Deploy Hook wird getriggert
4. Render startet neuen Deploy
5. Nach 1-2 Minuten: Live auf Render URL

## Nützliche Links

- **Render Dashboard:** https://dashboard.render.com
- **Render Docs:** https://render.com/docs
- **Render Status:** https://status.render.com
- **Support:** https://render.com/support

## Zusammenfassung

**Was wurde eingerichtet:**

- ✅ Web Service auf Render
- ✅ Docker Runtime
- ✅ Auto-Deploy von `main` Branch
- ✅ Health Check Endpoint
- ✅ Deploy Hook für GitHub Actions
- ✅ Free Tier Hosting

**Was kommt als Nächstes:**

- Test Push auf `main`
- GitHub Actions Workflow validieren
- Optional: Custom Domain
- Optional: Monitoring Setup
