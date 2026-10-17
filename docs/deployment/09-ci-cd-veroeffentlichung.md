# Aktueller Veröffentlichungsablauf

Stand: 17.10.2026. Diese Beschreibung ersetzt ältere Angaben zu `main` und zum Überspringen von Tests.

## Prüfungen und Deployment

- Pull Requests nach `master` und Pushes auf `master` führen Tests, Angular-Build, Docker-Build und Container-Smoke-Tests aus.
- Tests laufen mit `pnpm run test:ci` über Angular/Vitest in jsdom; Fehler stoppen die Pipeline.
- Ein echter Linter ist noch nicht eingerichtet. Der bestehende Lint-Platzhalter ist kein CI-Check.
- Nur Pushes auf `master` starten nach erfolgreichen Prüfungen den Deploy-Job.
- Der Job nutzt das vorhandene Secret `RENDER_DEPLOY_HOOK_PORTFOLIO`; HTTP-Fehler und fehlende Deployment-ID führen zum Abbruch.
- Anschließend prüft er `/version.json` auf den erwarteten Commit, `/health` und die Space-Jump-Detailseite. Ohne erfolgreichen Nachweis wird der Job rot.

## Versionsnachweis

Das Dockerfile schreibt den Build-Parameter `RENDER_GIT_COMMIT` in `/version.json`. CI setzt diesen Parameter explizit. Render stellt ihn für den jeweiligen Build bereit. Nginx liefert die Datei mit `Cache-Control: no-store` aus.

Referenzen: [Render-Umgebungsvariablen](https://render.com/docs/environment-variables), [Docker-Build-Parameter](https://render.com/docs/docker-secrets).

## Grenzen

- Die Live-Prüfung bestätigt den ausgelieferten Commit, nicht den internen Render-API-Status.
- Der Hook ändert keine Render-Einstellungen. Ein eventuell in Render aktiviertes Auto-Deploy bleibt erhalten und sollte dort separat auf die gewünschte Freigabestrategie abgestimmt werden.
- Branch-Schutz und verpflichtende Checks sind weiterhin nicht eingerichtet. PRs erst nach grüner Validierung mergen.
