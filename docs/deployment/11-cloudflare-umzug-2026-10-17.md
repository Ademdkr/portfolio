# Portfolio-Umzug zu Cloudflare Pages

Datum: 17.10.2026.

## Bereitstellung

Das Portfolio wird statisch von Cloudflare Pages ausgeliefert. Angular erzeugt acht HTML-Seiten; ein laufender Container oder Backend-Server ist dafür nicht erforderlich.

- Repository: [Ademdkr/portfolio](https://github.com/Ademdkr/portfolio)
- Produktionsbranch: `master`
- Cloudflare-Projekt: `adem-portfolio`
- Produktionsdomain: https://ademdokur.dev
- Alias: https://adem-portfolio.pages.dev (`noindex`)
- `https://www.ademdokur.dev` leitet mit HTTP 301 auf die Hauptdomain um und erhält dabei den Pfad.
- Umsetzung: [PR #8](https://github.com/Ademdkr/portfolio/pull/8)
- Erste erfolgreiche Produktionspipeline: [39030664445](https://github.com/Ademdkr/portfolio/actions/runs/39030664445)
- Dabei veröffentlichter Commit: `6a8e8a04f2e5ffce6f2d2a48b2c2bad8aaad36b6`.

## DNS-Wechsel

Der Nutzer hat die folgenden Ausgangswerte im Dashboard bestätigt und anschließend beide Hosting-Einträge geändert:

| Name | Vorher | Nachher |
| --- | --- | --- |
| `ademdokur.dev` | A `216.24.57.1`, DNS only, TTL Auto | CNAME `adem-portfolio.pages.dev`, Proxied, TTL Auto |
| `www.ademdokur.dev` | CNAME `portfolio-k18k.onrender.com`, DNS only, TTL Auto | CNAME `adem-portfolio.pages.dev`, Proxied, TTL Auto |

Die Domains wurden zuvor dem Pages-Projekt zugeordnet. Die lokale Wrangler-Anmeldung besitzt keine DNS-Schreibrechte; deshalb erfolgte dieser Schritt begleitet im Dashboard.

MX und SPF der Hauptdomain sowie die DKIM-Einträge von Cloudflare und Resend und der Send-MX-Eintrag waren nach dem Wechsel weiterhin öffentlich auflösbar. Die Einträge der anderen Anwendungen wurden bei diesem Umbau nicht geändert.

## GitHub Actions

Das Environment `production` enthält `CLOUDFLARE_ACCOUNT_ID` und `CLOUDFLARE_API_TOKEN` als Secrets. Der Nutzer hat dafür einen Account-Token mit `Cloudflare Pages: Edit` eingerichtet.

`PRODUCTION_SITE_URL=https://ademdokur.dev` ist nach erfolgreicher Live-Prüfung als Environment-Variable gesetzt. Die Pipeline prüft dadurch künftig zusätzlich zur Pages-Adresse auch die Hauptdomain. Das geprüfte Build-Artefakt wird unverändert veröffentlicht.

## Nachweise

- Die drei vorhandenen Angular/Vitest-Tests bestanden lokal und in GitHub Actions.
- Alle acht vorgerenderten Seiten, die tatsächlichen Sitemap-Routen, referenzierten JavaScript-/CSS-Dateien der Startseite und die Pages-Dateigrößen wurden beim Build geprüft.
- Die lokale Pages-Auslieferung und die öffentliche Vorschau bestanden die Prüfungen für Routen, AdSense, Assets, Weiterleitungen, Sicherheitsheader und Cache-Verhalten.
- Nach dem DNS-Wechsel bestanden alle acht Seiten dieselben Live-Prüfungen unter `https://ademdokur.dev`, einschließlich passendem Git-SHA.
- `www` lieferte für die Startseite und `/projekte/space-jump/` die erwartete HTTPS-Weiterleitung. Die neue Weiterleitung wurde zusätzlich direkt über eine Cloudflare-IP geprüft, um alte DNS-Zwischenspeicher auszuschließen.
- Browserprüfung auf Vorschau und Produktionsdomain: Desktop-Chrome und Chromium mit iPhone-16-Pro-Layout, jeweils Navigation, Designwechsel und direktes Neuladen der Space-Jump-Unterseite ohne Browser- oder HTTP-Fehler.
- Das simulierte iPhone-Layout ersetzt keinen Test auf echtem Safari.
- Der AdSense-Meta-Tag bleibt in allen acht HTML-Seiten erhalten; die Hauptdomain hat kein `noindex`.

## Rückfall und nächste Schritte

Der Nutzer hat Auto-Deploy beim bisherigen Render-Web-Service auf **Off** gesetzt und dies am 17.10.2026 bestaetigt. Der Dienst bleibt vorerst als Rueckfall erhalten.

Ein Rückfall ist durch Wiederherstellen der oben dokumentierten Hosting-DNS-Einträge möglich. Der Render-Deploy-Hook wird von der neuen Pipeline nicht verwendet.

Die AdSense-Inhaberschaft kann nach diesem Hosting-Wechsel weiter unter derselben Hauptdomain bestätigt werden. Die Freigabe von AdSense und H5 Games Ads ist kein Bestandteil dieses Hosting-Umzugs.
