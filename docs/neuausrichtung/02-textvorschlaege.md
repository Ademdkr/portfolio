# Textvorschläge für die Neuausrichtung

Entwürfe, noch nicht im Code umgesetzt.

## Vorgaben

- rimpido GmbH darf namentlich genannt werden, aber nicht auf der Landing-Page (nur About/Erfahrung).
- EH&S nicht erwähnen (kein direkter Bezug der Tätigkeit).
- Keine genauen Angaben zur Infrastruktur: keine Produktnamen, Hostnamen, Versionen, Netzpläne oder Sicherheitsdetails der internen IT.
- Tools nur als Kategorien nennen (z. B. Collaboration-Software, Passwortmanager, Dokumentationssoftware, Reverse Proxy), alles auf Freeware/Open-Source-Basis.
- SAP-Stand: SAP S/4HANA 2025. Fiori-Technologien: UI5 und Web Dynpro.
- Kein LinkedIn/Xing-Profil vorhanden.

## Landing-Page (`landing.ts`, `landing.html`)

**Rolle**

> IT-Administrator & Anwendungsentwickler

**Hero-Beschreibung**

> Ich betreue IT-Infrastruktur, SAP-Basis und entwickle Anwendungen, von ABAP und SAP-Fiori-Anpassungen bis Angular und NestJS.

**Hero-Buttons**

- Primär: "Erfahrung ansehen" (neuer Abschnitt) oder "Projekte ansehen"
- Sekundär: GitHub (bestehend), optional LinkedIn

**CTA-Abschnitt (statt "Interesse an meinen Projekten?")**

> Fragen oder Austausch?
> Ich freue mich über Nachrichten rund um SAP, Webentwicklung und Self-Hosting.

Buttons: "Projekte ansehen", "Kontakt".

## About-Seite (`about.html`, `about.ts`)

**Einleitung**

> Ich bin **Adem Dokur**, IT-Administrator und Anwendungsentwickler bei der rimpido GmbH.
> Meine Arbeit verbindet **IT-Infrastruktur**, **SAP-Basis** und **Softwareentwicklung**.

**Tagline (statt "bereit für den professionellen Einsatz")**

> Ausgebildeter Fachinformatiker für Anwendungsentwicklung, im Berufsalltag zwischen Betrieb, Basis und Entwicklung.

**Timeline-Ergänzung**

| Zeitraum     | Titel                                                 | Beschreibung                                                                                                                                   |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Seit 03/2026 | IT-Administrator & Anwendungsentwickler, rimpido GmbH | Tätig bei einem SAP-Beratungsunternehmen. Verantwortung für interne IT, Netzwerk, SAP-Basis sowie Anpassung von Fiori-Apps und Schnittstellen. |

Bestehende Einträge anpassen:

- "Seit 10/2025 Praxisprojekte & Weiterentwicklung" auf "10/2025 - 02/2026" begrenzen.
- Alternativ umbenennen in "Eigene Projekte", wenn sie parallel weiterlaufen.

**Abschnitt "Berufliches Ziel" ersetzen durch "Schwerpunkte"**

> Mein Schwerpunkt liegt auf stabilen, nachvollziehbar betriebenen Systemen und Anwendungen:
> von der On-Prem-Infrastruktur über die SAP-Basis bis zur Anwendung, die darauf läuft.
> Privat vertiefe ich moderne Webtechnologien in eigenen Projekten.

## Neue Seite: Erfahrung (Beispieltext)

Eigene Seite `/erfahrung` mit Beispieltext, später anpassbar. Tätigkeiten allgemein halten.

**Einleitung**

> Bei der rimpido GmbH, einem SAP-Beratungsunternehmen,
> arbeite ich seit 03/2026 an der Schnittstelle von IT-Betrieb, SAP-Basis und Entwicklung.

**IT-Administration**

> Ich betreue die interne IT und unterstütze die Kolleginnen und Kollegen im Alltag.
> Dazu gehören Betrieb und Weiterentwicklung der Netzwerk- und Serverumgebung sowie
> die Einführung neuer Dienste, etwa für Zusammenarbeit, Passwortverwaltung, Dokumentation und
> sicheren Zugriff. Die Systeme laufen On-Prem, überwiegend auf Linux (u. a. NixOS, Debian/Ubuntu)
> und auf Basis freier Software. Backup-Konzepte und Ausfallsicherheit gehören dazu.

**SAP-Basis-Administration**

> Ich richte SAP-S/4HANA-2025-Entwicklungssysteme selbständig ein und pflege Rollen und Berechtigungen.
> Außerdem installiere und aktiviere ich Fiori und die zugehörigen Apps und weise die passenden Rollen zu.

**Anwendungsentwicklung**

> Ich passe Fiori-Apps (UI5) an, entwickle Web-Dynpro-Anwendungen,
> programmiere in ABAP und stelle OData-APIs für Dritt- und externe Systeme bereit.

**Hinweis zur Veröffentlichung:** keine Kundennamen, keine Produktnamen oder Versionen der internen Infrastruktur, keine Netzwerkdetails.

## Skills (`skills.ts`)

Neue Kategorien. Levels nach ehrlicher Einschätzung vergeben.

**IT-Administration (On-Prem)**

- Netzwerkadministration
- Server-Betrieb
- NixOS
- Debian / Ubuntu
- Backupstrategien
- USV & Ausfallsicherheit
- Reverse Proxy
- Collaboration-Software
- Passwortmanagement
- Dokumentationssoftware
- Open-Source-/Freeware-Stack
- Interner Support

**SAP-Basis**

- S/4HANA 2025 (Entwicklungssysteme)
- Rollen & Berechtigungen
- Fiori-Installation & -Aktivierung
- Fiori-App-Aktivierung

**SAP-Entwicklung**

- ABAP
- Fiori-App-Anpassung (UI5)
- Web Dynpro
- OData-Services

Beschreibung je Kategorie (Beispiel): "SAP-Systeme aufsetzen, absichern und erweitern."

## Kontakt (`contact.html`)

**Untertitel (statt "Interessiert an einer Zusammenarbeit?")**

> Fragen, Austausch oder Vernetzung? Schreiben Sie mir gern.

- Kanäle vorerst: E-Mail und GitHub. LinkedIn/Xing erst bei Anlage eines Profils (für Netzwerk/Freelance später sinnvoll).
- Hinweis "Antwort innerhalb von 24 Stunden" nur beibehalten, wenn realistisch.

## Meta-Tags (`index.html`)

**Title**

> Adem Dokur - IT-Administrator & Anwendungsentwickler

**Description**

> Portfolio von Adem Dokur: IT-Administration, SAP-Basis und Anwendungsentwicklung mit ABAP, SAP-Fiori-Anpassungen, Angular und NestJS. Projekte und Berufserfahrung im Überblick.

**Keywords**

> Adem Dokur, IT-Administrator, Netzwerkadministration, Linux, SAP Basis, SAP Fiori, UI5, ABAP, OData, Angular, NestJS, TypeScript, Portfolio

Gleiche Anpassung bei `og:title`, `og:description`, `twitter:*`.
Doppelte `favicon`- und `manifest`-Links entfernen.

## Geklärt

1. rimpido darf genannt werden, ohne Infrastrukturdetails.
2. Tools nur als Kategorien, Freeware-Basis.
3. SAP S/4HANA 2025, UI5 und Web Dynpro.
4. Kein LinkedIn/Xing vorhanden.
5. Eigene Erfahrungsseite mit Beispieltext.

## Offen

- Skill-Levels für die neuen Kategorien festlegen.
- Navigation: Eintrag "Erfahrung" im Header ergänzen.
- Ob die Hauptdatei `01-bewertung.md` (Tabelle "Anzupassende Stellen") um `/erfahrung` erweitert werden soll.
