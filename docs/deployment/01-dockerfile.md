# Deployment Setup - Schritt 1: Dockerfile

## Überblick

Das Dockerfile verwendet einen **Multi-Stage Build** für optimale Image-Größe und Sicherheit:

- **Stage 1 (Builder)**: Node.js 20 Alpine für Angular Build
- **Stage 2 (Production)**: Nginx Alpine für statisches Hosting

## Dockerfile Struktur

### Stage 1: Build Angular Application

```dockerfile
FROM node:20-alpine AS builder
```

- **Base Image**: Node.js 20 auf Alpine Linux (minimales Image ~50MB)
- **Alias**: `builder` für Referenzierung in Stage 2

**Schritte:**

1. **Working Directory**: `/app`
2. **Package Manager**: pnpm 10.18.3 (definiert in `package.json`)
3. **Dependencies**: `pnpm install --frozen-lockfile` (deterministische Builds)
4. **Build**: `pnpm run build` (Production Build)

**Output**: `dist/portfolio/browser` (Angular 21 Standard-Ausgabe)

### Stage 2: Production Server

```dockerfile
FROM nginx:alpine
```

- **Base Image**: Nginx auf Alpine Linux (~40MB)
- **Purpose**: Statischer Webserver für SPA

**Schritte:**

1. **Copy Build**: Von Builder Stage → `/usr/share/nginx/html`
2. **Nginx Config**: Custom `nginx.conf` für SPA-Routing
3. **Port**: 80 (HTTP)
4. **Start Command**: `nginx -g "daemon off;"` (Foreground-Modus für Docker)

## Warum Multi-Stage Build?

### Vorteile:

- ✅ **Kleine Image-Größe**: ~25MB (ohne Node.js Build-Tools)
- ✅ **Sicherheit**: Keine Build-Dependencies in Production
- ✅ **Schnellere Deployments**: Weniger zu übertragen
- ✅ **Best Practice**: Separation of Concerns

### Alternative (Single-Stage):

- ❌ Image-Größe: ~200MB (mit Node.js)
- ❌ Unnötige Build-Tools in Production
- ❌ Größere Angriffsfläche

## Build Output Verzeichnis

Angular 21 verwendet standardmäßig:

```
dist/portfolio/browser
```

**Erklärung:**

- `dist/`: Build-Output-Root
- `portfolio/`: Projektname (aus `angular.json`)
- `browser/`: Client-Bundle (SSR würde `server/` erzeugen)

## Nächste Schritte

1. ✅ Dockerfile erstellt
2. ⏳ nginx.conf erstellen (Schritt 2)
3. ⏳ .dockerignore erstellen (Schritt 3)
4. ⏳ Lokaler Test: `docker build` und `docker run`

## Testing (später)

```bash
# Build Image
docker build -t portfolio:local .

# Run Container
docker run -p 8080:80 portfolio:local

# Test im Browser
# http://localhost:8080
```

## Hinweise

- **Package Manager**: pnpm (wie in `package.json` definiert)
- **Node Version**: 20 (LTS, kompatibel mit Angular 21)
- **Production Build**: Automatisch durch `pnpm run build` (nutzt Production Config)
- **Nginx**: Benötigt Custom Config für SPA-Routing (nächster Schritt)
