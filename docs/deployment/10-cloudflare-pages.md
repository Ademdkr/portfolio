# Portfolio auf Cloudflare Pages

Stand: 17.10.2026.

## Architektur

Angular nutzt bereits `outputMode: static` und `RenderMode.Prerender`. Cloudflare liefert die acht erzeugten Seiten und Assets direkt aus `dist/portfolio/browser` aus. Es gibt keinen laufenden Server mit Idle-Modus. Aktuell benötigt das Portfolio weder Pages Functions noch eine Datenbank. Kontakt öffnet eine E-Mail über `mailto:`.

- Projekt: `adem-portfolio`
- Pages-Adresse: https://adem-portfolio.pages.dev
- Produktionsdomain nach Umstellung: https://ademdokur.dev
- Produktionsbranch: `master`
- Veröffentlichung: GitHub Actions mit Wrangler Direct Upload
- Docker/Nginx bleiben für lokale Nutzung und den vorübergehenden Render-Rückfall erhalten.

Die verlinkten Anwendungen (Space Jump, Budget Tracker, Issue Tracker) werden nicht mit diesem Portfolio-Umzug verändert.

## Lokale Prüfung

```bash
pnpm install --frozen-lockfile
pnpm run test:ci
pnpm run cloudflare:build
pnpm run cloudflare:dev
```

In einem zweiten Terminal:

```bash
pnpm run cloudflare:check -- http://localhost:8788
```

Eine lokale Vorschau kann nach `pnpm exec wrangler login` veröffentlicht werden:

```bash
pnpm run cloudflare:deploy -- --branch=cloudflare-migration --commit-dirty=true
```

Die Produktionsbereitstellung erfolgt über den Workflow auf `master`.

## GitHub-Zugangsdaten

Unter Repository → Settings → Environments → `production`:

| Typ | Name | Wert |
| --- | --- | --- |
| Secret | `CLOUDFLARE_ACCOUNT_ID` | Account, in dem Pages-Projekt und Domain liegen |
| Secret | `CLOUDFLARE_API_TOKEN` | Cloudflare-Token mit Account → Cloudflare Pages → Edit für diesen Account |
| Variable, nach Domainwechsel | `PRODUCTION_SITE_URL` | `https://ademdokur.dev` |

Tokens nie in Quellcode, Logs oder Chat posten. Ein Token benötigt für diesen Deploy-Workflow weder D1- noch DNS-Rechte.

## Statische Dateien und Routing

- `public/_headers` übernimmt Sicherheitsheader, cached ausschließlich Angular-Dateien mit Inhalts-Hash langfristig und schließt Versions-/Health-Dateien vom Cache aus.
- Die unversionierten Projektbilder verwenden das reguläre Pages-Caching, damit Änderungen sichtbar werden.
- `public/_redirects` leitet alte englische Pfade auf die tatsächlichen deutschen Seiten um.
- Die acht Seiten bleiben als eigene HTML-Dateien erhalten. Keine pauschale Rewrite-Regel überschreibt deren vorgerenderten Inhalt.
- Die Sitemap enthält ausschließlich die acht echten Produktions-URLs.
- Die Pages-Produktionsadresse erhält `X-Robots-Tag: noindex`; die eigene Domain bleibt indexierbar.
- Der bestehende AdSense-Meta-Tag bleibt in allen acht Seiten enthalten. Dieser Umbau bindet keine Werbung ein.

## Sichere Domain-Umstellung

1. Erst Vorschau, PR-Prüfung und Produktionsbereitstellung auf der Pages-Adresse prüfen.
2. In Cloudflare Workers & Pages → `adem-portfolio` → Custom domains die bestehende Domain `ademdokur.dev` zuordnen.
3. Den bisherigen DNS-Eintrag für die Hauptdomain dokumentieren (Typ, Inhalt, Proxy), bevor das Hosting-Ziel geändert wird.
4. Nur den bisherigen Hosting-Eintrag der Hauptdomain auf das Pages-Ziel `adem-portfolio.pages.dev` umstellen. Cloudflare kann dies beim Aktivieren der Domain anbieten. Mail-Einträge (MX/TXT), andere Projekte und `space-jump` bleiben erhalten.
5. Die bereits vorhandene Domain `www.ademdokur.dev` ebenfalls im Pages-Projekt zuordnen und ihren bisherigen Render-CNAME auf das Pages-Ziel umstellen. Die bestehende Weiterleitung auf die Hauptdomain bleibt durch `_redirects` erhalten.
6. Auf aktiven Domain-/Zertifikatstatus warten, HTTPS sowie alle Routen und den AdSense-Tag direkt auf der Hauptdomain testen.
7. `PRODUCTION_SITE_URL` setzen und die Pipeline erneut auf `master` ausführen. Damit gehört die Hauptdomain zur dauerhaften Deployment-Prüfung.
8. Erst nach erfolgreicher Umstellung Render-Auto-Deploy deaktivieren; den alten Dienst zunächst als Rückfall behalten. Endgültiges Entfernen erfolgt separat.

Die lokale Wrangler-OAuth-Anmeldung hat aktuell keine DNS-Schreibrechte. Der DNS-Wechsel kann deshalb einen manuellen Dashboard-Schritt erfordern. Eine Zuordnung im Pages-Projekt allein ersetzt nicht die Änderung des bisherigen Render-Ziels.

## Rückfall

Solange Render noch vorhanden ist, kann der vorher dokumentierte DNS-Eintrag wiederhergestellt werden. Zusätzlich `PRODUCTION_SITE_URL` vorübergehend entfernen, wenn die Hauptdomain wieder Render verwendet. Alte Render-Deploy-Hooks bleiben während des Umzugs gespeichert, werden von der neuen Pipeline aber nicht genutzt.

## Quellen

- [Angular auf Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-angular-site/)
- [CI/CD mit Direct Upload](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
- [Eigene Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Header](https://developers.cloudflare.com/pages/configuration/headers/)
- [Routing und HTML-Auslieferung](https://developers.cloudflare.com/pages/configuration/serving-pages/)

## Erfasste Ausgangslage

Am 17.10.2026 vor dem Wechsel lieferte oeffentliches DNS fuer `ademdokur.dev` den A-Wert `216.24.57.1` und fuer `www.ademdokur.dev` den CNAME `portfolio-k18k.onrender.com`. Die www-Adresse leitete mit HTTP 301 auf die Hauptdomain weiter, einschliesslich Unterseiten. Vor der Umstellung sind Typ, Inhalt und Proxy-Status im Dashboard nochmals zu bestaetigen und fuer einen Rueckfall zu notieren.

## Aktueller Betriebsstand

Die Hauptdomain und www zeigen seit dem 17.10.2026 auf Cloudflare Pages. `PRODUCTION_SITE_URL` ist im GitHub-Environment `production` auf `https://ademdokur.dev` gesetzt. Render-Auto-Deploy wurde vom Nutzer auf Off gesetzt; der Dienst bleibt als Rueckfall bestehen. Einzelheiten und Testergebnisse stehen im [Migrationsbericht](11-cloudflare-umzug-2026-10-17.md).
