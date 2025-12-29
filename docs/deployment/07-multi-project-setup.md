# Multi-Project Deployment Setup mit Custom Domain

## Überblick

Setup für 3 Projekte auf einer Domain mit Cloudflare:

- `https://ademdokur.dev` → Portfolio
- `https://budget.ademdokur.dev` → Budget-Tracker
- `https://issue.ademdokur.dev` → Issue-Tracker
- E-Mail Routing: `kontakt@ademdokur.dev` → Deine Gmail

## Schritt 1: Cloudflare Domain registrieren

### 1.1 Cloudflare Account erstellen

1. Gehe zu https://dash.cloudflare.com/sign-up
2. Registriere dich (E-Mail + Passwort)
3. Bestätige E-Mail-Adresse

### 1.2 Domain kaufen

1. Cloudflare Dashboard → **"Domain Registration"** (linkes Menü)
2. Domain suchen: `ademdokur.dev`
3. In den Warenkorb: ~$9.77/Jahr
4. Checkout mit Kreditkarte
5. Domain wird sofort aktiviert

**Vorteile:**

- ✅ At-Cost Pricing (~$10/Jahr, konstant)
- ✅ Schnellstes DNS weltweit
- ✅ Kostenlose DDoS Protection
- ✅ Email Routing kostenlos
- ✅ DNSSEC 1-Click
- ✅ DNS automatisch konfiguriert

### 1.3 Email Routing aktivieren (kostenlos)

**Nach Domain-Kauf:**

1. Cloudflare Dashboard → Domain `ademdokur.dev`
2. **"Email"** Tab → **"Email Routing"**
3. **"Get started"** klicken
4. **"Add destination address"**
   - Deine Gmail/Outlook Adresse eingeben
   - Bestätigungsmail prüfen und klicken
5. **"Create address"**
   - Adresse: `kontakt@ademdokur.dev`
   - Ziel: Deine Gmail
   - Speichern

**Weitere E-Mail Adressen:**

```
info@ademdokur.dev → deine@gmail.com
kontakt@ademdokur.dev → deine@gmail.com
admin@ademdokur.dev → deine@gmail.com
```

**Von ademdokur.dev senden (optional):**

1. Gmail → Einstellungen → "Konten und Import"
2. "E-Mail-Adresse hinzufügen"
3. `kontakt@ademdokur.dev`
4. SMTP: mail.ademdokur.dev (wird von Cloudflare bereitgestellt)
5. Fertig - Du kannst von `kontakt@ademdokur.dev` senden

## Schritt 2: Portfolio auf Root Domain

### 2.1 Render Service (bereits erstellt)

✅ Service: `portfolio-k18k`
✅ URL: `https://portfolio-k18k.onrender.com`

### 2.2 Custom Domain hinzufügen

1. Render Dashboard → Portfolio Service
2. **Settings** → **Custom Domains**
3. **Add Custom Domain**
4. Domain: `ademdokur.dev`
5. **Verify**

**Render zeigt dir:**

- A Record IP: `216.24.57.1` (Beispiel)
- Oder CNAME: `portfolio-k18k.onrender.com`

### 2.3 DNS konfigurieren (Cloudflare)

**Cloudflare DNS Management:**

1. Cloudflare Dashboard → Domain `ademdokur.dev`
2. **"DNS"** Tab → **"Records"**

**Root Domain (für Portfolio):**

```
Type: CNAME
Name: @ (oder ademdokur.dev)
Target: portfolio-k18k.onrender.com
Proxy status: DNS only (grauer Cloud)
TTL: Auto
```

**Wichtig:** **"DNS only"** auswählen (nicht Proxied/Orange Cloud)

- Grund: Render SSL funktioniert nur mit DNS-only
- Orange Cloud = Cloudflare Proxy (SSL-Konflikt mit Render)

**Alternative (falls CNAME @ nicht funktioniert):**

```
Type: A
Name: @
IPv4 address: 216.24.57.1 (Render IP - wird im Dashboard angezeigt)
```

**SSL:** Automatisch von Render (Let's Encrypt)

**Wartezeit:** 5-10 Minuten (Cloudflare DNS ist sehr schnell)

## Schritt 3: Budget-Tracker Setup

### 3.1 Repository vorbereiten

**Budget-Tracker Projekt braucht:**

- ✅ Dockerfile (wie Portfolio)
- ✅ nginx.conf (für Frontend)
- ✅ Backend Config (NestJS Port, CORS)

### 3.2 Neuen Render Service erstellen

1. Render Dashboard → **New +** → **Web Service**
2. **Connect Repository:** `Ademdkr/budget-tracker`
3. **Name:** `budget-tracker`
4. **Region:** Frankfurt (EU Central)
5. **Branch:** `main` oder `master`
6. **Runtime:** Docker
7. **Instance Type:** Free

### 3.3 Environment Variables

**Falls Backend + Frontend getrennt:**

```
# Frontend Service
NODE_ENV=production

# Backend Service
DATABASE_URL=postgresql://...
PORT=10000
FRONTEND_URL=https://budget.ademdokur.dev
```

### 3.4 Custom Domain hinzufügen

1. Budget-Tracker Service → **Settings** → **Custom Domains**
2. **Add Custom Domain**
3. Domain: `budget.ademdokur.dev`
4. **Verify**

### 3.5 DNS für Subdomain (Cloudflare)

**Cloudflare DNS:**

```
Type: CNAME
Name: budget
Target: budget-tracker-xyz.onrender.com (von Render)
Proxy status: DNS only (grauer Cloud)
TTL: Auto
```

**Wichtig:** Wieder **"DNS only"** für Render SSL!

## Schritt 4: Issue-Tracker Setup

### 4.1 Repository vorbereiten

**Issue-Tracker Projekt braucht:**

- ✅ Dockerfile (Frontend + Backend oder getrennt)
- ✅ nginx.conf
- ✅ Backend Config (NestJS, Prisma)

### 4.2 Neuen Render Service erstellen

1. Render Dashboard → **New +** → **Web Service**
2. **Connect Repository:** `Ademdkr/issue-tracker`
3. **Name:** `issue-tracker`
4. **Region:** Frankfurt (EU Central)
5. **Branch:** `feature/portfolio-optimization` oder `main`
6. **Runtime:** Docker
7. **Instance Type:** Free

### 4.3 Custom Domain hinzufügen

1. Issue-Tracker Service → **Settings** → **Custom Domains**
2. **Add Custom Domain**
3. Domain: `issue.ademdokur.dev`

### 4.4 DNS für Subdomain (Cloudflare)

**CNAME Record:**

```
Type: CNAME
Name: issue
Target: issue-tracker-abc.onrender.com (von Render)
Proxy status: DNS only (grauer Cloud)
TTL: Auto
```

## Schritt 5: DNS Zusammenfassung (Cloudflare)

**Komplette DNS Konfiguration in Cloudflare:**

| Type  | Name   | Target/Value                    | Proxy Status    | TTL  |
| ----- | ------ | ------------------------------- | --------------- | ---- |
| CNAME | @      | portfolio-k18k.onrender.com     | DNS only (grau) | Auto |
| CNAME | budget | budget-tracker-xyz.onrender.com | DNS only (grau) | Auto |
| CNAME | issue  | issue-tracker-abc.onrender.com  | DNS only (grau) | Auto |

**Email Routing (automatisch erstellt):**

| Type | Name | Value                                       |
| ---- | ---- | ------------------------------------------- |
| MX   | @    | isaac.mx.cloudflare.net (Priority 1)        |
| MX   | @    | linda.mx.cloudflare.net (Priority 2)        |
| MX   | @    | amir.mx.cloudflare.net (Priority 3)         |
| TXT  | @    | v=spf1 include:\_spf.mx.cloudflare.net ~all |

**Wichtig:**

- Alle Web-Services: **DNS only** (grauer Cloud)
- Email MX Records: Automatisch konfiguriert
- Proxied (Orange Cloud) = SSL-Probleme mit Render!

## Schritt 6: GitHub Actions für alle Projekte

### 6.1 Portfolio (bereits erledigt)

✅ `.github/workflows/deploy-portfolio.yml`
✅ Secret: `RENDER_DEPLOY_HOOK_PORTFOLIO`

### 6.2 Budget-Tracker

**Neues Workflow-File:** `.github/workflows/deploy-budget-tracker.yml`

```yaml
name: Deploy Budget-Tracker to Render

on:
  push:
    branches:
      - main # oder master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 8 # Check package.json

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm run build

      - name: Build Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: false
          tags: budget-tracker:${{ github.sha }}

      - name: Trigger Render Deploy
        env:
          RENDER_DEPLOY_HOOK: ${{ secrets.RENDER_DEPLOY_HOOK_BUDGET }}
        run: curl -X POST "$RENDER_DEPLOY_HOOK"
```

**Secret hinzufügen:**

- Name: `RENDER_DEPLOY_HOOK_BUDGET`
- Value: Deploy Hook URL von Render

### 6.3 Issue-Tracker

Gleiche Struktur wie Budget-Tracker:

- `.github/workflows/deploy-issue-tracker.yml`
- Secret: `RENDER_DEPLOY_HOOK_ISSUE`

## Schritt 7: Projekt-Vorbereitung Checkliste

### Budget-Tracker

**Frontend (Angular):**

- [ ] Dockerfile erstellen
- [ ] nginx.conf erstellen
- [ ] .dockerignore erstellen
- [ ] API URL konfigurierbar (Environment Variable)

**Backend (NestJS):**

- [ ] Dockerfile erstellen (oder gemeinsam mit Frontend)
- [ ] CORS für `budget.ademdokur.dev` konfigurieren
- [ ] Database URL als Environment Variable
- [ ] Health Check Endpoint

### Issue-Tracker

**Frontend (Angular):**

- [ ] Dockerfile erstellen
- [ ] nginx.conf erstellen
- [ ] .dockerignore erstellen

**Backend (NestJS):**

- [ ] Dockerfile erstellen
- [ ] Prisma Migrations Setup
- [ ] CORS konfigurieren
- [ ] Environment Variables

## Schritt 8: Testing

### Lokal testen

**Jedes Projekt:**

```bash
cd budget-tracker
pnpm run local:deploy
# → http://localhost:8080

cd ../issue-tracker
pnpm run local:deploy
# → http://localhost:8080
```

### Production URLs testen

Nach DNS-Propagierung:

- `https://ademdokur.dev` → Portfolio ✅
- `https://budget.ademdokur.dev` → Budget-Tracker ✅
- `https://issue.ademdokur.dev` → Issue-Tracker ✅

## Kosten

### Cloudflare

- **Domain ademdokur.dev:** ~$10/Jahr (at-cost)
- **DNS:** Kostenlos
- **Email Routing:** Kostenlos (unbegrenzte Weiterleitungen)
- **DDoS Protection:** Kostenlos
- **SSL:** Kostenlos (automatisch)

### Render Free Tier

- **750 Stunden/Monat** = 1 Service 24/7
- **3 Services** = 250h/Monat pro Service (~8h/Tag)
- **Reicht für:** Portfolio + 2 Projekte (mit Sleep)

### Render Paid (optional)

- Starter: $7/Monat pro Service
- 3 Services: $21/Monat (kein Sleep, 24/7)

### Gesamt

- **Minimal:** $10/Jahr (nur Domain)
- **Mit Render Free:** $10/Jahr (Services schlafen nach 15 Min)
- **Production:** $10/Jahr + $21/Monat (alle Services 24/7)

## Nächste konkrete Schritte

1. ✅ **Cloudflare Account erstellen**
2. ✅ **Domain kaufen:** `ademdokur.dev` (~$10)
3. ✅ **Email Routing aktivieren:** `kontakt@ademdokur.dev` → Gmail
4. ⏳ **Portfolio Custom Domain:** In Render hinzufügen
5. ⏳ **DNS konfigurieren:** CNAME @ → portfolio-k18k.onrender.com
6. ⏳ **Testen:** https://ademdokur.dev
7. ⏳ **Budget-Tracker:** Dockerfile erstellen
8. ⏳ **Issue-Tracker:** Dockerfile erstellen

## Cloudflare Setup Schritt-für-Schritt

### 1. Domain kaufen

1. https://dash.cloudflare.com/sign-up
2. Account erstellen
3. "Domain Registration" → `ademdokur.dev` suchen
4. Kaufen (~$10)

### 2. Email Routing

1. Domain → "Email" Tab
2. "Email Routing" → "Get started"
3. Ziel-Email hinzufügen (Gmail)
4. Weiterleitung erstellen: `kontakt@ademdokur.dev`

### 3. Render Custom Domain

1. Render → Portfolio Service
2. Settings → Custom Domains
3. "Add Custom Domain" → `ademdokur.dev`

### 4. Cloudflare DNS

1. Cloudflare → Domain → "DNS" Tab
2. Add Record:
   - Type: CNAME
   - Name: @
   - Target: portfolio-k18k.onrender.com
   - Proxy: **DNS only** (grau!)
3. Save

### 5. Warten & Testen

- Warte 5-10 Minuten
- Teste: https://ademdokur.dev
- Teste Email: Sende an kontakt@ademdokur.dev

## Was jetzt tun?

**Empfohlene Reihenfolge:**

1. **Domain bei Cloudflare kaufen** (15 Minuten)
2. **Email Routing aktivieren** (5 Minuten)
3. **Custom Domain in Render hinzufügen** (2 Minuten)
4. **DNS in Cloudflare konfigurieren** (2 Minuten)
5. **Warten auf DNS Propagierung** (5-10 Minuten)
6. **Testen:** Portfolio auf ademdokur.dev

**Währenddessen (während DNS propagiert):**

- Budget-Tracker Dockerfile vorbereiten
- Issue-Tracker Dockerfile vorbereiten

**Bereit zu starten?**
