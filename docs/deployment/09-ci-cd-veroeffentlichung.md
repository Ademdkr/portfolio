# Aktueller Veröffentlichungsablauf

Stand: 17.10.2026. Diese Beschreibung ersetzt die frühere Render-Pipeline.

## Prüfungen und Deployment

- Pull Requests nach `master`, Pushes auf `master` und manuelle Workflow-Läufe führen Angular/Vitest-Tests und den statischen Pages-Build aus.
- `pnpm run cloudflare:build` rendert alle acht Seiten vor, schreibt die Git-Version und prüft HTML, AdSense-Tag, Sitemap, Assets und Pages-Dateigrößen.
- Die geprüften Dateien werden als GitHub-Artefakt gespeichert. Der Deploy-Job veröffentlicht genau dieses Artefakt; er baut die Anwendung nicht erneut.
- Nur `master` darf veröffentlichen. PRs erhalten keine Cloudflare-Zugangsdaten.
- Das GitHub-Environment `production` enthält die Secrets `CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID`.
- Wrangler veröffentlicht auf dem bestehenden Pages-Projekt `adem-portfolio`, Produktionsbranch `master`.
- Anschließend prüft die Pipeline Git-Version, alle acht vorgerenderten Seiten, AdSense, Assets, Weiterleitungen und HTTP-Header.
- Ein echter Linter und verpflichtender Branch-Schutz sind weiterhin nicht eingerichtet. PRs erst nach grüner Validierung mergen.

## Versionsnachweis und Domainwechsel

`scripts/prepare-pages.mjs` schreibt den vollen Commit-SHA aus `GITHUB_SHA` (lokal aus Git) in `/version.json`.
Pages liefert diese Datei und `/health` mit `Cache-Control: no-store` aus.

Die Pipeline prüft immer `https://adem-portfolio.pages.dev`. Während des Umzugs bleibt die zusätzliche Variable `PRODUCTION_SITE_URL` im Environment leer. Nach erfolgreicher DNS-Umstellung wird sie auf `https://ademdokur.dev` gesetzt. Danach muss auch die öffentliche Domain sämtliche Prüfungen bestehen.

Render wird durch diesen Workflow nicht mehr ausgelöst. Ein separat in Render aktiviertes Auto-Deploy muss dort deaktiviert werden, bevor Render endgültig stillgelegt wird.

Einrichtung, Domainwechsel und Rückfall: [Cloudflare Pages](10-cloudflare-pages.md).
