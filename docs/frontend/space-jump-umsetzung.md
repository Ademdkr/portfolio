# Space Jump im Portfolio

Ziel: Projektkarte, Detailseite und Eintrag unter „Ausgewählte Projekte“ auf der Startseite im vorhandenen Design.

## Ablauf

- [x] Portfolio-Struktur und Spielprojekt prüfen.
- [x] Projektkarte und Route `/projekte/space-jump` ergänzen.
- [x] Detailseite mit Funktionen, Technik und echten Spielansichten erstellen.
- [x] Produktionsbuild und Darstellung/Navigation prüfen.
- [x] Hauptbild durch eine actionreichere Spielaufnahme ersetzen und visuell prüfen.
- [x] Tech-Stack-Abschnitte je Kartenreihe mit CSS-Subgrid ausrichten und prüfen.
- [x] Theme-Wechsel auf 180 ms vereinheitlichen, Hover-Effekte getrennt halten und reduzierte Bewegung prüfen.
- [x] Space Jump auf der Startseite mit Beschreibung, Technologien und Links ergänzen und prüfen.
- [x] Technologie-Tags auf der Startseite je Kartenreihe ausrichten und prüfen.
- [x] Mobile Skills-Karten mittig ausrichten und lange Titel ohne Überlauf darstellen; prüfen.

## Entscheidungen

- Live-Demo: https://space-jump.ademdokur.dev; kein Link zum privaten Repository.
- Stack: Phaser 3, TypeScript, Vite, Cloudflare Pages und D1.
- Space Jump erhält wie die beiden anderen abgeschlossenen Projekte das Featured-Badge und den farbigen Rahmen.
- Detailseiten-Kopf: „Jetzt spielen“ zentriert in eigener Zeile unter den Technologie-Chips.
- PostgreSQL nur als lokale Alternative erläutern; Spiel nicht einbetten.
- Redaktionell angepasst: Hinweis auf Grenzen der Cheat-Erkennung aus der Detailseite entfernt.

## Prüfung

- Abschließender Produktionsbuild inklusive Assets erfolgreich; neue Route statisch vorgerendert.
- Startseite: Build erfolgreich; drei ausgewählte Projekte und Space-Jump-Technologien, Details- und Demo-Link im vorgerenderten HTML geprüft.
- Startseiten-Tags: Chrome-Prüfung bei 1440/1100/800/390 px erfolgreich; Tags und Aktionslinks je Reihe auf gleicher Höhe, keine Überläufe.
- Drei Screenshots aus der veröffentlichten Version aufgenommen (ohne Registrierung).
- Hauptbild ersetzt: echte Spielaufnahme mit Starbike, Schild, Laserfeuer, Gegnern und Gold; visuell geprüft, Bildformat unverändert (1440 × 665).
- Chrome: 1440/390/320 px, jeweils Hell-/Dunkelmodus; Bilder, Navigation und Direktaufruf erfolgreich, keine horizontalen Überläufe oder JS-Laufzeitfehler.
- Kartenlayout: Build erfolgreich; bei 1440/1100/800 px identische Tech-Stack-Höhen je Reihe, bei 390 px einspaltig ohne Überlauf.
- Theme: Build und Chrome-Prüfung auf Start-, Projektübersichts- und Space-Jump-Seite erfolgreich; beide Richtungen mit 180 ms, Mehrfachklicks, gespeicherte Auswahl und sofortiger Wechsel bei reduzierter Bewegung geprüft.
- Veröffentlichung läuft auf `feature/space-jump-portfolio`; fremde unversionierte Ordner bleiben unberührt.
- Skills mobil: Build erfolgreich; Chrome bei 320/375/390/430/768 px mit gleichen Seitenabständen und ohne Überläufe, Desktop bei 1440 px geprüft.

## Veröffentlichung

- [x] Tests reparieren und CI für PRs aktivieren; Fehler nicht mehr übergehen.
- [x] Deploy-Hook und Prüfung des live ausgelieferten Commits absichern.
- [ ] Änderungen committen, Branch pushen und PR nach `master` erstellen.
- [ ] Grüne PR-Checks abwarten, mergen und Deployment live prüfen.

Lokal: drei Tests und Produktionsbuild erfolgreich. Docker wird im PR geprüft, da lokal kein Docker-Daemon läuft. Details: [CI/CD](../deployment/09-ci-cd-veroeffentlichung.md).
