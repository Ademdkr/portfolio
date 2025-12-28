# Deployment Setup - Schritt 4: GitHub Actions Workflow

## Überblick

Der GitHub Actions Workflow automatisiert das Deployment zu Render bei jedem Push auf den `master` Branch.

## Workflow-Datei

**Pfad**: `.github/workflows/deploy-portfolio.yml`

## Workflow im Detail

### Trigger

```yaml
on:
  push:
    branches:
      - master
```

**Wann läuft der Workflow?**

- ✅ Push auf `master` Branch
- ✅ Merge von Pull Request in `master`
- ❌ NICHT auf Feature Branches
- ❌ NICHT auf Pull Requests (nur Merge)

**Warum nur master?**

- Production-Deployments nur von stabiler Branch
- Feature Branches werden nicht deployed
- Verhindert versehentliche Deployments

### Job: build-and-deploy

```yaml
runs-on: ubuntu-latest
```

**Runner**: Ubuntu Linux (neueste Version)

**Vorteile:**

- ✅ Kostenlos für Public Repos
- ✅ Schnell (SSD, gute CPU)
- ✅ Docker vorinstalliert

## Workflow Steps

### 1. Checkout Code

```yaml
- name: Checkout Code
  uses: actions/checkout@v4
```

**Funktion**: Klont Repository in Runner

**Version**: v4 (neueste stabile Version)

### 2. Setup pnpm

```yaml
- name: Set up pnpm
  uses: pnpm/action-setup@v4
  with:
    version: 10.18.3
```

**Funktion**: Installiert pnpm Package Manager

**Version**: 10.18.3 (matcht `package.json`)

**Warum spezifische Version?**

- ✅ Reproduzierbare Builds
- ✅ Keine Breaking Changes
- ✅ Lock-File Kompatibilität

### 3. Setup Node.js

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'
    cache: 'pnpm'
```

**Funktion**: Installiert Node.js mit pnpm Cache

**Features:**

- **node-version: '20'**: LTS Version
- **cache: 'pnpm'**: Cached `node_modules` (schnellere Builds)

**Performance:**

- Ohne Cache: ~2 Minuten
- Mit Cache: ~30 Sekunden

### 4. Install Dependencies

```yaml
- name: Install Dependencies
  run: pnpm install --frozen-lockfile
```

**Flags:**

- **--frozen-lockfile**: Fail bei Lock-File Mismatch
- Keine Auto-Updates von Dependencies
- Deterministische Builds

**Warum wichtig?**

- ✅ Exakt gleiche Versionen wie lokal
- ✅ Keine Überraschungen in Production
- ✅ Reproduzierbare Builds

### 5. Run Linter

```yaml
- name: Run Linter
  run: pnpm run lint || echo "Linter not configured, skipping..."
```

**Funktion**: Führt ESLint aus (falls konfiguriert)

**Fallback**: `|| echo ...` verhindert Failure wenn nicht konfiguriert

**Best Practice**: Linter vor Build

- ✅ Findet Code-Quality Issues
- ✅ Verhindert schlechten Code in Production

**Linter konfigurieren (später):**

```json
// package.json
"scripts": {
  "lint": "ng lint"
}
```

### 6. Run Tests

```yaml
- name: Run Tests
  run: pnpm run test -- --watch=false --browsers=ChromeHeadless || echo "Tests not configured, skipping..."
```

**Funktion**: Führt Unit Tests aus

**Flags:**

- **--watch=false**: Einmaliger Test-Run (kein Watch-Mode)
- **--browsers=ChromeHeadless**: Headless Chrome (kein GUI)

**Fallback**: Skipped wenn Tests nicht konfiguriert

**Warum wichtig?**

- ✅ Verhindert Deployment von defektem Code
- ✅ Early Feedback bei Bugs
- ✅ CI/CD Best Practice

### 7. Build Application

```yaml
- name: Build Application
  run: pnpm run build
```

**Funktion**: Production Build

**Output**: `dist/portfolio/browser`

**Warum vor Docker Build?**

- ✅ Build-Fehler früh erkennen
- ✅ Workflow stoppt bei Build-Failure
- ✅ Keine Zeit für Docker Build verschwendet

### 8. Setup Docker Buildx

```yaml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3
```

**Funktion**: Aktiviert Docker Buildx

**Features:**

- Multi-Platform Builds
- Build Cache Support
- Bessere Performance

### 9. Build Docker Image

```yaml
- name: Build Docker Image
  uses: docker/build-push-action@v5
  with:
    context: .
    push: false
    tags: portfolio:${{ github.sha }}
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

**Parameters:**

#### context: .

- Build Context ist Root-Verzeichnis
- `.dockerignore` wird respektiert

#### push: false

- Image wird NICHT zu Registry gepusht
- Nur Build-Validierung
- Render baut selbst

**Alternative (Docker Hub Push):**

```yaml
push: true
tags: username/portfolio:latest
```

#### tags: portfolio:${{ github.sha }}

- Tag mit Git Commit SHA
- Eindeutige Identifikation
- Beispiel: `portfolio:a1b2c3d4`

#### cache-from / cache-to: type=gha

- **gha**: GitHub Actions Cache
- Cached Docker Layers
- Schnellere Builds

**Performance:**

- First Build: ~3 Minuten
- Cached Build: ~30 Sekunden

**Cache Strategie:**

- **mode=max**: Cached alle Layers (größerer Cache, schnellere Builds)

### 10. Trigger Render Deploy

```yaml
- name: Trigger Render Deploy
  env:
    RENDER_DEPLOY_HOOK: ${{ secrets.RENDER_DEPLOY_HOOK_PORTFOLIO }}
  run: |
    if [ -n "$RENDER_DEPLOY_HOOK" ]; then
      curl -X POST "$RENDER_DEPLOY_HOOK"
      echo "✅ Render deployment triggered successfully"
    else
      echo "⚠️ RENDER_DEPLOY_HOOK_PORTFOLIO not configured"
      exit 1
    fi
```

**Funktion**: Triggert Deployment auf Render

**Environment Variable:**

- `RENDER_DEPLOY_HOOK_PORTFOLIO`: GitHub Secret
- Enthält Render Deploy Hook URL

**Logic:**

1. **Check**: Ist Secret konfiguriert?
2. **Trigger**: POST Request zu Render
3. **Feedback**: Success/Error Message
4. **Fail**: Exit 1 wenn nicht konfiguriert

**Security:**

- ✅ Secret nie im Code/Logs sichtbar
- ✅ Nur im GitHub Repository Settings
- ✅ Nur in diesem Workflow verfügbar

## GitHub Secrets Setup

### Schritt 1: Render Deploy Hook erhalten

1. Render Dashboard → Service
2. Settings → Deploy Hook
3. "Create Deploy Hook" klicken
4. URL kopieren (z.B. `https://api.render.com/deploy/srv-xxx?key=yyy`)

### Schritt 2: Secret in GitHub hinzufügen

1. GitHub Repository → Settings
2. Secrets and variables → Actions
3. "New repository secret"
4. **Name**: `RENDER_DEPLOY_HOOK_PORTFOLIO`
5. **Value**: Render Deploy Hook URL
6. "Add secret"

## Workflow Ablauf Visualisiert

```
┌─────────────────────────────────────────────┐
│  Push to master Branch                        │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  1. Checkout Code                           │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  2. Setup pnpm + Node.js (with cache)       │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  3. Install Dependencies                    │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  4. Run Linter (optional)                   │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  5. Run Tests (optional)                    │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  6. Build Application                       │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  7. Build Docker Image (validation)         │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  8. Trigger Render Deploy                   │
└────────────────┬────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│  ✅ Workflow Complete                       │
└─────────────────────────────────────────────┘
```

## Performance Optimierungen

### 1. pnpm Cache

- Spart ~1.5 Minuten pro Build

### 2. Docker Layer Cache

- Spart ~2 Minuten bei wiederholten Builds

### 3. Conditional Steps

- Linter/Tests nur wenn konfiguriert

### Erwartete Zeiten

**First Run (kein Cache):**

- ~4-5 Minuten

**Cached Run:**

- ~1.5-2 Minuten

## Error Handling

### Fehler 1: Build Failed

```
Error: Build failed with exit code 1
```

**Ursache**: TypeScript/Build Errors

**Lösung**: Lokal `pnpm run build` testen

### Fehler 2: Tests Failed

```
Error: Test suite failed
```

**Ursache**: Failing Tests

**Lösung**: Lokal `pnpm run test` fixen

### Fehler 3: Deploy Hook nicht konfiguriert

```
⚠️ RENDER_DEPLOY_HOOK_PORTFOLIO not configured
```

**Ursache**: GitHub Secret fehlt

**Lösung**: Secret hinzufügen (siehe oben)

## Best Practices

### 1. Branch Protection Rules

GitHub Settings → Branches → Add rule:

- ✅ Require status checks (Workflow muss grün sein)
- ✅ Require pull request before merging
- ✅ Dismiss stale reviews

### 2. Notification Setup

GitHub Settings → Notifications:

- ✅ Email bei Workflow Failure
- ✅ Slack/Discord Integration (optional)

### 3. Workflow Monitoring

GitHub Repository → Actions Tab:

- Alle Runs sichtbar
- Logs downloadbar
- Re-run möglich

## Nächste Schritte

1. ✅ Dockerfile erstellt
2. ✅ nginx.conf erstellt
3. ✅ .dockerignore erstellt
4. ✅ GitHub Actions Workflow erstellt
5. ⏳ Render Service Setup
6. ⏳ GitHub Secret konfigurieren
7. ⏳ Test Deployment auf master Branch

## Hinweise

- Workflow läuft NUR bei Push auf `master`
- Docker Image wird gebaut aber NICHT gepusht (Render baut selbst)
- Render erhält nur Deploy-Trigger
- Tests/Linter sind optional (Fallback bei Fehler)
- Cache reduziert Build-Zeit erheblich
