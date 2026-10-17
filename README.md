# 💼 Portfolio - Adem Dokur

Modernes, responsives Portfolio zur Präsentation meiner Full-Stack-Projekte und technischen Fähigkeiten.

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://ademdokur.dev)
![Angular](https://img.shields.io/badge/Angular-21-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌐 Live Demo

**[https://ademdokur.dev](https://ademdokur.dev)**

## 📋 Inhaltsverzeichnis

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Projekt-Struktur](#-projekt-struktur)
- [Installation](#-installation)
- [Entwicklung](#-entwicklung)
- [Build & Deployment](#-build--deployment)
- [Lighthouse Optimierungen](#-lighthouse-optimierungen)
- [Projekte](#-projekte)
- [Lizenz](#-lizenz)

## ✨ Features

- 📱 **Fully Responsive** - Mobile-First Design mit Angular Material
- 🎨 **Modern UI/UX** - Clean und professionelles Design
- ⚡ **Performance-optimiert** - Lighthouse Score 90+
- 🔍 **SEO-optimiert** - Meta-Tags, Sitemap, robots.txt
- ♿ **Accessibility** - ARIA-Labels, semantisches HTML
- 📦 **PWA-Ready** - Progressive Web App Manifest
- 🎯 **Projekt-Showcase** - Detaillierte Präsentation von Full-Stack-Projekten

### Seiten

- **Landing Page** - Übersicht mit Highlights
- **Über mich** - Werdegang und berufliche Ziele
- **Skills** - Technologien nach Kategorien
- **Projekte** - Detaillierte Projektbeschreibungen
- **Kontakt** - Kontaktformular und Social Links

## 🛠 Tech Stack

### Frontend

- **[Angular 21](https://angular.dev/)** - Modern Web Framework
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type-Safe JavaScript
- **[Angular Material 21](https://material.angular.io/)** - Material Design Components
- **[SCSS](https://sass-lang.com/)** - Advanced CSS Preprocessing
- **[RxJS](https://rxjs.dev/)** - Reactive Programming

### Build & DevOps

- **[Angular CLI](https://angular.dev/tools/cli)** - Build System
- **[Docker](https://www.docker.com/)** - Optionale lokale Container
- **[Nginx](https://nginx.org/)** - Optionaler Container-Webserver
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD Pipeline
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Statisches Hosting ohne Server-Idle

## 📁 Projekt-Struktur

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Wiederverwendbare Komponenten
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/               # Seiten-Komponenten
│   │   │   ├── landing/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── app.routes.ts        # Routing-Konfiguration
│   │   └── app.config.ts        # App-Konfiguration
│   ├── index.html               # HTML Entry Point
│   ├── styles.scss              # Globale Styles
│   └── theme.scss               # Material Theme
├── public/
│   ├── assets/                  # Statische Assets
│   ├── manifest.json            # PWA Manifest
│   ├── robots.txt               # SEO Crawler-Steuerung
│   └── sitemap.xml              # SEO Sitemap
├── docs/                        # Dokumentation
├── Dockerfile                   # Production Container
├── nginx.conf                   # Nginx Konfiguration
└── angular.json                 # Angular Workspace Config
```

## 📦 Installation

### Voraussetzungen

- **Node.js** >= 20.x
- **pnpm** >= 8.x (empfohlen) oder npm

### Setup

```bash
# Repository klonen
git clone https://github.com/Ademdkr/portfolio.git
cd portfolio

# Dependencies installieren
pnpm install
# oder
npm install
```

## 💻 Entwicklung

### Development Server

```bash
# Development Server starten
pnpm start
# oder
npm start
```

Öffne [http://localhost:4200](http://localhost:4200) im Browser. Die Anwendung lädt automatisch neu bei Dateiänderungen.

### Code Scaffolding

```bash
# Neue Komponente generieren
ng generate component pages/example

# Neue Page mit Routing
ng generate component pages/new-page --standalone
```

## 🏗️ Build & Deployment

### Production Build

```bash
# Build für Production
pnpm build
# oder
npm run build

# Output: dist/portfolio/browser/
```

### Docker Build

```bash
# Docker Image bauen
docker build -t portfolio .

# Container starten
docker run -p 8080:80 portfolio
```

### Deployment

Das Portfolio wird als statische Angular-Anwendung auf **Cloudflare Pages** veröffentlicht.

- Produktionsbranch: `master`; Pull Requests werden vor dem Merge geprüft.
- GitHub Actions führt Tests und den Pages-Build aus und veröffentlicht das geprüfte Build-Artefakt mit Wrangler.
- Das Environment `production` enthält `CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID`.
- Die Pipeline prüft nach der Veröffentlichung Git-Version, alle acht Seiten, Assets, Weiterleitungen und den AdSense-Tag.
- Docker/Nginx bleiben optional für lokale Container und als vorübergehender Render-Rückfall erhalten.

`pnpm run cloudflare:build` erstellt und prüft das Pages-Artefakt. `pnpm run cloudflare:dev` startet dessen lokale Vorschau.

Einrichtung und Domain-Umstellung: [Cloudflare Pages](docs/deployment/10-cloudflare-pages.md).
Aktueller Pipeline-Ablauf: [CI/CD-Veröffentlichung](docs/deployment/09-ci-cd-veroeffentlichung.md).
Abgeschlossener Domain-Wechsel und Nachweise: [Migrationsbericht vom 17.10.2026](docs/deployment/11-cloudflare-umzug-2026-10-17.md).

### AdSense-Verifizierung

Die Inhaberschaft von `ademdokur.dev` wird für Google AdSense über den Meta-Tag `google-adsense-account` in `src/index.html` bestätigt. Der Produktions-Build übernimmt ihn in die vorgerenderten HTML-Seiten. Nach dem Deployment kann die Verifizierung in AdSense bestätigt und die Website-Überprüfung beantragt werden.

Die Freigabe für H5 Games Ads und die Einbindung belohnter Anzeigen im Spiel erfolgen separat.

## 🚀 Lighthouse Optimierungen

Das Portfolio ist für optimale Performance, SEO und Accessibility optimiert:

### SEO

- ✅ Meta-Tags (description, keywords, author)
- ✅ Open Graph Tags für Social Media
- ✅ Twitter Card Meta-Tags
- ✅ robots.txt und sitemap.xml
- ✅ Semantisches HTML

### Performance

- ✅ Font-Loading Optimierung (preconnect, display=swap)
- ✅ Lazy Loading für Routes
- ✅ OnPush Change Detection
- ✅ Optimierte Bundle-Größe

### Accessibility

- ✅ ARIA-Labels für alle interaktiven Elemente
- ✅ Semantic HTML (header, nav, main, footer)
- ✅ Keyboard-Navigation
- ✅ Screen-Reader Support

### PWA

- ✅ Web App Manifest
- ✅ Theme Color
- ✅ Viewport Configuration

## 📂 Projekte

Detaillierte Präsentation meiner Full-Stack-Projekte:

### [Issue-Tracker](https://issue-tracker.ademdokur.dev)

Monorepo-basiertes Issue-Management-System mit JWT-Authentication, RBAC und Policy-basierter Authorization.

**Tech-Stack**: Angular 20, NestJS 11, PostgreSQL, Prisma ORM, Nx Monorepo

### [Budget-Tracker](https://budget-tracker.ademdokur.dev)

Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen mit Chart.js Visualisierungen.

**Tech-Stack**: Angular 18, NestJS 10, PostgreSQL, Prisma ORM, Chart.js

## 📚 Dokumentation

Weitere Dokumentation findest du im [docs/](docs/) Verzeichnis:

- **Frontend**: Implementierungs-Guides für alle Seiten
- **Deployment**: Cloudflare Pages, CI/CD, optionales Docker und historisches Render-Setup
- **Git**: Git-Workflow und Best Practices

## 🤝 Contributing

Feedback und Verbesserungsvorschläge sind willkommen! Erstelle gerne ein Issue oder Pull Request.

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

---

<div align="center">
  <p>Entwickelt mit ❤️ von Adem Dokur</p>
  <p>
    <a href="https://github.com/Ademdkr">GitHub</a> •
    <a href="https://issue-tracker.ademdokur.dev">Issue-Tracker</a> •
    <a href="https://budget-tracker.ademdokur.dev">Budget-Tracker</a>
  </p>
</div>
