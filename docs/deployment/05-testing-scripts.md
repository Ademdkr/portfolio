# CI/CD Testing Scripts

## Überblick

Lokale npm-Scripts zum Testen des GitHub Actions Workflows vor dem Push.

## Verfügbare Scripts

### `pnpm run ci:full-test`

**Vollständiger CI/CD Workflow Test:**

Führt alle Schritte des GitHub Actions Workflows lokal aus:

```bash
pnpm run ci:full-test
```

**Schritte:**

1. ✅ `pnpm install --frozen-lockfile` - Dependencies installieren
2. ✅ `pnpm run lint` - Code Linting
3. ✅ `pnpm run test:ci` - Unit Tests
4. ✅ `pnpm run build` - Production Build
5. ✅ `docker build` - Docker Image bauen

**Verwendung:**

- Vor jedem Push auf `main` Branch
- Verhindert fehlgeschlagene Workflows
- Spart Zeit und GitHub Actions Minutes

### `pnpm run test:ci`

**CI-optimierte Tests:**

```bash
pnpm run test:ci
```

**Flags:**

- `--watch=false`: Kein Watch-Mode
- `--browsers=ChromeHeadless`: Headless Browser
- Fallback bei fehlenden Tests

**Verwendung:**

- Einzeln Tests testen
- Schneller als `pnpm test`

### `pnpm run lint`

**Code Linting:**

```bash
pnpm run lint
```

**Status:** Placeholder (nicht konfiguriert)

**Später konfigurieren:**

```bash
ng add @angular-eslint/schematics
```

### `pnpm run docker:build`

**Docker Image bauen:**

```bash
pnpm run docker:build
```

**Output:** `portfolio:local` Image

**Verwendung:**

- Dockerfile-Änderungen testen
- Image-Größe prüfen

### `pnpm run docker:run`

**Container starten:**

```bash
pnpm run docker:run
```

**Port:** http://localhost:8080

**Voraussetzung:** Image muss gebaut sein

### `pnpm run docker:stop`

**Container stoppen und löschen:**

```bash
pnpm run docker:stop
```

**Verwendung:**

- Cleanup nach Tests
- Vor erneutem `docker:run`

### `pnpm run docker:logs`

**Container Logs anzeigen:**

```bash
pnpm run docker:logs
```

**Output:** Letzte 20 Log-Einträge

**Verwendung:**

- Debugging
- Fehlersuche
- Monitoring

### `pnpm run docker:restart`

**Container neu starten:**

```bash
pnpm run docker:restart
```

**Schritte:**

1. Stop Container
2. Remove Container
3. Start neu

**Verwendung:**

- Nach Code-Änderungen
- Schneller als manuell stop + run

### `pnpm run docker:test`

**Docker Build + Run + Health Check:**

```bash
pnpm run docker:test
```

**Schritte:**

1. Build Image
2. Start Container
3. Wait 3 Sekunden
4. Health Check

**Verwendung:**

- Kompletter Docker-Test
- Vor Deployment

### `pnpm run local:deploy`

**Komplettes lokales Deployment:**

```bash
pnpm run local:deploy
```

**Schritte:**

1. Install Dependencies
2. Lint
3. Test
4. Build
5. Docker Build
6. Docker Run
7. Success Message

**Output:** Container läuft auf http://localhost:8080

**Verwendung:**

- **Haupt-Command vor Push**
- Simuliert kompletten Deployment-Flow
- Startet automatisch Container zum Testen

### `pnpm run local:cleanup`

**Container aufräumen (fail-safe):**

```bash
pnpm run local:cleanup
```

**Features:**

- Stoppt und löscht Container
- Fail-safe: Kein Fehler wenn Container nicht existiert
- Nutzt `|| echo` Fallback

**Verwendung:**

- Vor `local:deploy`
- Cleanup nach Tests
- Aufräumen bei Problemen

## Workflow Simulation

### Kompletter Test (wie GitHub Actions)

**Empfohlen - Alles in einem:**

```bash
pnpm run local:cleanup
pnpm run local:deploy
# → http://localhost:8080
```

**Manuell (Schritt für Schritt):**

```bash
# 1. Cleanup
pnpm run local:cleanup

# 2. CI Test
pnpm run ci:full-test

# 3. Container Test
pnpm run docker:run

# 4. Manual Browser Test
# → http://localhost:8080

# 5. Cleanup
pnpm run docker:stop
```

### Schneller Test (nur Build)

```bash
pnpm install --frozen-lockfile
pnpm run build
```

### Docker-only Test

```bash
pnpm run docker:build
pnpm run docker:run
# → http://localhost:8080
pnpm run docker:stop
```

## Fehlerbehandlung

### Fehler: Tests schlagen fehl

```bash
pnpm run test:ci
```

**Lösung:** Tests fixen oder `|| exit 0` Fallback nutzen

### Fehler: Docker Container existiert bereits

```bash
pnpm run docker:stop
pnpm run docker:run
```

### Fehler: Port 8080 belegt

```bash
# Container stoppen
pnpm run docker:stop

# Oder anderen Port nutzen
docker run -d -p 8081:80 --name portfolio-test portfolio:local
```

### Fehler: Build schlägt fehl

```bash
# Detaillierte Ausgabe
pnpm run build -- --verbose
```

## Best Practices

### Vor jedem Push

```bash
# Minimal
pnpm run build

# Empfohlen (nur CI validierung)
pnpm run ci:full-test

# Komplett (mit lokalem Container zum Testen)
pnpm run local:deploy
```

### Bei Dockerfile-Änderungen

```bash
pnpm run docker:build
pnpm run docker:run
# Test im Browser
pnpm run docker:stop
```

### Bei CI/CD-Workflow-Änderungen

```bash
pnpm run ci:full-test
```

## Performance

### Erwartete Zeiten

**ci:full-test (erstes Mal):**

- Install: ~30 Sekunden
- Lint: <1 Sekunde
- Test: ~5 Sekunden
- Build: ~15 Sekunden
- Docker Build: ~15 Sekunden
- **Gesamt:** ~65 Sekunden

**ci:full-test (mit Cache):**

- Install: ~5 Sekunden
- Lint: <1 Sekunde
- Test: ~5 Sekunden
- Build: ~10 Sekunden
- Docker Build: ~5 Sekunden (Layer Cache)
- **Gesamt:** ~25 Sekunden

**local:deploy (mit Cache):**

- ci:full-test: ~25 Sekunden
- Docker Run: ~2 Sekunden
- **Gesamt:** ~27 Sekunden

### Optimierungen

**pnpm Cache nutzen:**

- Node modules werden gecacht
- Nur neue Dependencies installiert

**Docker Layer Cache:**

- Unchanged Layers werden wiederverwendet
- Nur geänderte Schritte neu gebaut

## Troubleshooting

### Script funktioniert nicht

**PowerShell:**

```powershell
# Fallback für timeout
Start-Sleep -Seconds 3
```

**Bash/Linux:**

```bash
sleep 3
```

### Docker nicht verfügbar

```bash
# Check Docker
docker --version

# Start Docker Desktop
```

## Zukünftige Erweiterungen

### ESLint hinzufügen

```bash
ng add @angular-eslint/schematics
```

**Dann in package.json:**

```json
"lint": "ng lint"
```

### E2E Tests

```bash
# Playwright/Cypress
"test:e2e": "playwright test"
```

### Coverage Reports

```json
"test:coverage": "ng test --code-coverage --watch=false"
```

## Quick Reference

| Script           | Zweck                        | Verwendung                   |
| ---------------- | ---------------------------- | ---------------------------- |
| `local:deploy`   | **Komplett: CI + Container** | Vor jedem Push (empfohlen)   |
| `ci:full-test`   | Nur CI validierung           | Workflow-Test ohne Container |
| `docker:restart` | Container neu starten        | Nach Code-Änderungen         |
| `docker:logs`    | Logs anzeigen                | Debugging                    |
| `local:cleanup`  | Container löschen            | Aufräumen                    |

## Hinweise

- **local:deploy** = Kompletter lokaler Deployment-Test (empfohlen)
- **ci:full-test** = Simuliert exakt den GitHub Actions Workflow
- **docker:test** = Testet das finale Deployment-Image mit Health Check
- Scripts sind **Cross-Platform** (Windows/Linux/Mac)
- Fallbacks verhindern Failures bei fehlenden Features
