# Portfolio: Neuausrichtung (Stand 10/2026)

## Ausgangslage

- Ursprünglich: Bewerbungsportfolio für eine Stelle als (Junior) Anwendungsentwickler.
- Aktuell: IT-Administrator und Anwendungsentwickler bei der rimpido GmbH (seit 03/2026).
- rimpido GmbH: SAP-Beratungsunternehmen (EH&S-Bezug besteht für die eigene Tätigkeit nicht, im Portfolio nicht erwähnen).
- Zweck jetzt: Visitenkarte und Referenz. Später möglicherweise Netzwerk und Freelance.

## Aufgaben bei rimpido

### IT-Administration

- Support der internen Kollegen.
- Einführung, Einrichtung und Pflege neuer Services und Systeme, vollständig On-Prem:
  Raspberry Pi, Server, USV, Backupstrategien, Anwendungen wie Nextcloud.

### SAP-Basis-Administration

- S/4HANA-Entwicklungssysteme selbständig eingerichtet.
- Rollen und Berechtigungen.
- FIORI-Installation und -Aktivierung.
- FIORI-App-Aktivierung und -Einrichtung inkl. Rollenzuweisung.

### Anwendungsentwicklung

- Modifizierte FIORI-Apps (Anpassung bestehender Apps, keine Neuentwicklung von Grund auf).
- ABAP-Coding.
- OData-API-Bereitstellung für Dritt- bzw. externe Systeme.

## Bewertung

### Neues Profil

Das Profil ist breiter und wertvoller als das bisherige "Full-Stack Developer (Angular · NestJS)":
Es verbindet **Infrastruktur, SAP-Basis und Entwicklung**. Diese Kombination ist selten und ist
das eigentliche Alleinstellungsmerkmal. Das Portfolio sollte sie in den Vordergrund stellen.

Vorschlag Positionierung: "IT-Administrator, SAP-Basis & Anwendungsentwickler (SAP-Anpassungen mit ABAP/Fiori und Angular/NestJS)".

### Passung der Webprojekte

- Fiori/UI5 und OData sind thematisch nah an Angular, REST-APIs und TypeScript.
  Budget Tracker und Issue Tracker belegen die Entwicklungskompetenz unabhängig von SAP.
- Sinnvoll ist ein Satz, der beide Welten verbindet: SAP-Arbeit beim Arbeitgeber, freie Webprojekte privat.
- Die privaten Projekte bleiben die einzigen öffentlich zeigbaren Codebeispiele.
  Beim Arbeitgeber entstandener Code ist in der Regel vertraulich.

### Anzupassende Stellen

| Bereich            | Datei          | Problem                                               | Maßnahme                                                       |
| ------------------ | -------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| Berufliches Ziel   | `about.html`   | "Ich suche eine Junior Full-Stack Developer Position" | Ersetzen durch aktuelle Rolle und Ausrichtung                  |
| Einleitung/Tagline | `about.html`   | "bereit für den professionellen Einsatz"              | Auf aktuelle Tätigkeit umformulieren                           |
| Timeline           | `about.ts`     | Endet bei "Seit 10/2025 Praxisprojekte"               | Eintrag "Seit 03/2026 rimpido GmbH" ergänzen                   |
| Rolle              | `landing.ts`   | "Full-Stack Developer (Angular · NestJS)"             | Neue Rolle mit IT-Admin, SAP-Basis, Entwicklung                |
| Hero-Text          | `landing.ts`   | Allgemein, ohne Arbeitgeber                           | Kurzer Verweis auf rimpido/SAP                                 |
| CTA                | `landing.html` | "Lassen Sie uns zusammen etwas Großartiges schaffen!" | Neutral formulieren (Visitenkarte)                             |
| Skills             | `skills.ts`    | Nur Web-Stack                                         | Neue Kategorien (siehe unten)                                  |
| Kontakt            | `contact.html` | Bewerbungston, nur E-Mail und GitHub                  | Ton anpassen, LinkedIn/Xing ergänzen                           |
| Meta/SEO           | `index.html`   | Nur "Full Stack Developer"; Favicon/Manifest doppelt  | Titel, Description, Keywords, OG anpassen; Duplikate entfernen |
| Sitemap/Manifest   | `public/`      | Beschreibung veraltet                                 | Prüfen und anpassen                                            |

### Neue Skill-Kategorien (Vorschlag)

- **IT-Administration (On-Prem):** Server, Raspberry Pi, USV, Backupstrategien, Nextcloud, interner Support.
- **SAP-Basis:** S/4HANA-Entwicklungssysteme, Rollen und Berechtigungen, Fiori-Installation und -Aktivierung, App-Aktivierung.
- **SAP-Entwicklung:** ABAP, Fiori-App-Anpassung, OData-Services.
- Bestehende Kategorien (Frontend, Backend, Datenbanken, DevOps, Konzepte) beibehalten.
- Skill-Levels überprüfen. Viele stehen auf "advanced" oder "expert".
  Bei neuen Skills realistisch einstufen. Die Skala "intermediate" heißt aktuell "Grundkenntnisse".
- Konkrete Tools (Betriebssysteme, Backup-Software, SAP-Release) nur ergänzen, wenn tatsächlich im Einsatz.

### Neuer Inhalt: Berufserfahrung

Empfohlen ist ein eigener Abschnitt (im About oder als eigene Seite "Erfahrung") mit
drei Blöcken: IT-Administration, SAP-Basis, Anwendungsentwicklung.
Aufgaben als Ergebnisse formulieren, nicht nur als Tätigkeiten (z. B. "Entwicklungssysteme selbständig aufgebaut").
Keine Kundennamen, interne Systemdetails oder Sicherheitsarchitektur nennen.

### Kontakt und Netzwerk

- LinkedIn und/oder Xing ergänzen.
- Hinweis "Antwort innerhalb von 24 Stunden" prüfen.
- Die Resend-Doku (`docs/deployment/08-resend-email-setup.md`) deutet auf ein früheres Formular hin. Ist es entfernt, sollte nichts Veraltetes verlinkt sein.

## Rechtliches und Klärung

- Mit rimpido abklären: Nennung des Arbeitgebers, Nebentätigkeit/Portfolio, Vertraulichkeit von Projektinhalten.
- Impressum prüfen. Heute meist unkritisch (privat, nicht kommerziell).
  Bei Freelance-Angeboten ist es später erforderlich (Name, Anschrift, Kontakt).
- Datenschutzhinweis ergänzen, falls Kontaktformular, Tracking oder externe Fonts (Google Fonts) genutzt werden.

## Spätere Erweiterung (Netzwerk / Freelance)

Nicht jetzt umsetzen, aber vorbereiten:

- Abschnitt "Leistungen" (SAP-Basis, Fiori/OData, Webentwicklung, Selbsthosting).
- Verfügbarkeit/Kapazität (nur nach Absprache mit dem Arbeitgeber).
- Impressum und Datenschutz vollständig.
- Kontaktseite mit klarem Anliegen-Hinweis.

## Priorisierte Schritte

1. About: Berufliches Ziel ersetzen, Timeline-Eintrag rimpido ergänzen.
2. Landing: Rolle und Hero-Text neu formulieren, CTA entschärfen.
3. Skills: Kategorien IT-Administration, SAP-Basis, SAP-Entwicklung ergänzen und Levels prüfen.
4. Berufserfahrung-Abschnitt anlegen (ohne vertrauliche Details).
5. Kontakt: Ton anpassen, LinkedIn/Xing hinzufügen.
6. Meta/SEO und Duplikate in `index.html` bereinigen.
7. Klärung mit rimpido, Impressum/Datenschutz prüfen.
