# Resend E-Mail Setup für kontakt@ademdokur.dev

Diese Anleitung zeigt, wie du Resend.com einrichtest, um E-Mails von `kontakt@ademdokur.dev` zu senden, während eingehende E-Mails über Cloudflare Email Routing weitergeleitet werden.

## Warum Resend?

- ✅ Kostenlos: 100 E-Mails/Tag, 3.000/Monat
- ✅ Einfache Integration mit Cloudflare
- ✅ SMTP + API Support
- ✅ Schnelle Einrichtung (~10 Minuten)

---

## Teil 1: Resend Account einrichten

### Schritt 1: Registrierung

1. Gehe zu [resend.com](https://resend.com)
2. Klicke auf **"Sign Up"**
3. Registriere dich mit deiner E-Mail (z.B. adem.dokur@outlook.de)
4. Bestätige deine E-Mail-Adresse

### Schritt 2: Domain hinzufügen

1. Nach dem Login klicke auf **"Domains"** im Seitenmenü
2. Klicke auf **"Add Domain"**
3. Gebe deine Domain ein: `ademdokur.dev`
4. Klicke auf **"Add"**

---

## Teil 2: DNS-Records in Cloudflare hinzufügen

Nach dem Hinzufügen der Domain zeigt Resend dir **3 DNS-Records** an, die du in Cloudflare eintragen musst:

### Schritt 1: Öffne Cloudflare Dashboard

1. Gehe zu [dash.cloudflare.com](https://dash.cloudflare.com)
2. Wähle deine Domain `ademdokur.dev`
3. Klicke auf **"DNS"** → **"Records"**

### Schritt 2: SPF-Record hinzufügen

- **Type:** `TXT`
- **Name:** `@` (oder `ademdokur.dev`)
- **Content:** `v=spf1 include:_spf.resend.com ~all`
- **Proxy status:** DNS only (grauer Wolke)
- Klicke **"Save"**

> **Hinweis:** Falls du bereits einen SPF-Record hast, füge `include:_spf.resend.com` zum bestehenden Record hinzu.

### Schritt 3: DKIM-Records hinzufügen

Resend zeigt dir 2-3 DKIM-Records an. Für jeden Record:

**Beispiel:**

- **Type:** `TXT`
- **Name:** `resend._domainkey` (genauer Name wird von Resend angezeigt)
- **Content:** `p=MIGfMA0GCSqGSIb3DQEBAQUAA4...` (langer Schlüssel von Resend)
- **Proxy status:** DNS only (grauer Wolke)
- Klicke **"Save"**

Wiederhole dies für alle DKIM-Records, die Resend anzeigt.

### Schritt 4: DMARC-Record hinzufügen (optional, aber empfohlen)

- **Type:** `TXT`
- **Name:** `_dmarc`
- **Content:** `v=DMARC1; p=none; rua=mailto:kontakt@ademdokur.dev`
- **Proxy status:** DNS only (grauer Wolke)
- Klicke **"Save"**

### Schritt 5: Verifizierung in Resend

1. Zurück zu Resend Dashboard
2. Klicke auf **"Verify Records"** bei deiner Domain
3. Warte einige Sekunden bis Minuten (DNS-Propagierung)
4. Status sollte auf **"Verified"** ✅ wechseln

> **Tipp:** DNS-Änderungen können bis zu 24h dauern, meist aber nur wenige Minuten.

---

## Teil 3: SMTP-Credentials erstellen

### Schritt 1: API Key generieren

1. In Resend Dashboard: **"API Keys"**
2. Klicke **"Create API Key"**
3. Name: `Outlook SMTP` (oder beliebiger Name)
4. Permission: **"Sending access"**
5. Klicke **"Create"**
6. **Kopiere den API Key sofort** (wird nur einmal angezeigt!)

### SMTP-Einstellungen für Outlook:

```
Server: smtp.resend.com
Port: 465 (SSL) oder 587 (TLS)
Benutzername: resend
Passwort: [Dein API Key]
```

---

## Teil 4: Outlook.de konfigurieren

### Schritt 1: Outlook-Einstellungen öffnen

1. Gehe zu [outlook.live.com](https://outlook.live.com)
2. Klicke auf ⚙️ **Einstellungen** (oben rechts)
3. **"Alle Outlook-Einstellungen anzeigen"**
4. **"E-Mail"** → **"Verfassen und Antworten"**

### Schritt 2: E-Mail-Signatur anpassen

1. Scrolle zu **"E-Mail-Signatur"**
2. Aktiviere **"Automatisch meine Signatur in neue Nachrichten einschließen"**
3. Füge eine Signatur mit deiner Domain hinzu:
   ```
   Mit freundlichen Grüßen
   Adem Dokur
   kontakt@ademdokur.dev
   ```

### Schritt 3: "Senden als" konfigurieren

> **Problem:** Outlook.de unterstützt **kein "Senden als" mit SMTP** direkt.

**Lösung: Gmail als Zwischenschritt nutzen**

---

## Teil 5: Gmail als "Senden als" einrichten (empfohlen)

### Option A: Gmail-Konto nutzen

Falls du ein Gmail-Konto hast oder eines erstellen möchtest:

#### Schritt 1: Gmail-Einstellungen

1. Gehe zu [gmail.com](https://gmail.com)
2. Klicke auf ⚙️ → **"Alle Einstellungen anzeigen"**
3. Tab: **"Konten und Import"**
4. Bei **"Senden als"** → **"Weitere E-Mail-Adresse hinzufügen"**

#### Schritt 2: E-Mail-Adresse hinzufügen

1. **Name:** `Adem Dokur` (wird als Absendername angezeigt)
2. **E-Mail-Adresse:** `kontakt@ademdokur.dev`
3. ❌ Deaktiviere **"Als Alias behandeln"**
4. Klicke **"Nächster Schritt"**

#### Schritt 3: SMTP-Einstellungen eingeben

1. **SMTP-Server:** `smtp.resend.com`
2. **Port:** `587`
3. **Benutzername:** `resend`
4. **Passwort:** `[Dein Resend API Key]`
5. ✅ **Sichere Verbindung über TLS**
6. Klicke **"Konto hinzufügen"**

#### Schritt 4: Bestätigung

1. Gmail sendet eine Bestätigungsmail an `kontakt@ademdokur.dev`
2. Diese wird über Cloudflare zu `adem.dokur@outlook.de` weitergeleitet
3. Öffne die Mail in Outlook und klicke auf den Bestätigungslink

#### Schritt 5: Standard-Absender festlegen

1. Zurück zu Gmail → Konten
2. Bei `kontakt@ademdokur.dev` → **"Als Standard festlegen"**
3. Aktiviere **"Immer von Standard-Adresse antworten"**

---

## Teil 6: Outlook-Weiterleitung zu Gmail (optional)

Um alles zentral in Gmail zu verwalten:

### In Outlook.de:

1. Einstellungen → **"E-Mail"** → **"Weiterleitung"**
2. Aktiviere Weiterleitung
3. Zieladresse: `deine-gmail@gmail.com`
4. ✅ **Kopie im Postfach behalten** (optional)

### Workflow:

1. E-Mail an `kontakt@ademdokur.dev` → Cloudflare → Outlook.de
2. Outlook.de → Gmail (Weiterleitung)
3. Antwort von Gmail als `kontakt@ademdokur.dev` via Resend SMTP

---

## Teil 7: Testing

### Test 1: E-Mail von Gmail senden

1. Öffne Gmail
2. Verfasse neue E-Mail
3. Klicke auf **"Von: kontakt@ademdokur.dev"** (falls nicht Standard)
4. Sende Testmail an eine andere deiner E-Mail-Adressen
5. Prüfe, ob Absender korrekt als `kontakt@ademdokur.dev` angezeigt wird

### Test 2: Antwort-Test

1. Sende von einer externen E-Mail (z.B. Handy) an `kontakt@ademdokur.dev`
2. Empfange in Outlook/Gmail
3. Antworte direkt
4. Prüfe beim Empfänger, ob Absender `kontakt@ademdokur.dev` ist

### Test 3: SPF/DKIM/DMARC prüfen

1. Sende Test-E-Mail an: [mail-tester.com](https://www.mail-tester.com)
2. Prüfe Score (sollte 10/10 sein)
3. Verifiziere, dass SPF, DKIM und DMARC ✅ sind

---

## Alternative: Thunderbird/Desktop-Client

Falls du einen Desktop-E-Mail-Client nutzen möchtest:

### Mozilla Thunderbird:

1. Download: [thunderbird.net](https://www.thunderbird.net)
2. Konto hinzufügen → **Manuell konfigurieren**

**Eingehend (IMAP):**

```
Server: outlook.office365.com
Port: 993
SSL: SSL/TLS
Benutzername: adem.dokur@outlook.de
Passwort: [Outlook Passwort]
```

**Ausgehend (SMTP):**

```
Server: smtp.resend.com
Port: 587
SSL: STARTTLS
Benutzername: resend
Passwort: [Resend API Key]
```

**Identität:**

- Name: Adem Dokur
- E-Mail: kontakt@ademdokur.dev

---

## Troubleshooting

### Problem: Domain nicht verifiziert

- **Lösung:** Warte 30-60 Minuten auf DNS-Propagierung
- Prüfe DNS mit: [dnschecker.org](https://dnschecker.org)

### Problem: SMTP-Authentifizierung fehlgeschlagen

- **Lösung:** Prüfe, ob API Key korrekt kopiert wurde
- Erstelle ggf. neuen API Key in Resend

### Problem: E-Mails landen im Spam

- **Lösung:**
  - Prüfe SPF/DKIM/DMARC auf [mxtoolbox.com](https://mxtoolbox.com)
  - Füge DMARC-Record hinzu
  - Sende zunächst wenige E-Mails (Reputation aufbauen)

### Problem: Outlook "Senden als" funktioniert nicht

- **Lösung:** Nutze Gmail als Hauptclient (siehe Teil 5)
- Outlook.de unterstützt kein echtes "Senden als" mit externem SMTP

---

## Zusammenfassung

✅ **Eingehende E-Mails:** Cloudflare Email Routing → Outlook.de  
✅ **Ausgehende E-Mails:** Gmail/Thunderbird → Resend SMTP → kontakt@ademdokur.dev  
✅ **Kosten:** 0€ (bis 3.000 E-Mails/Monat)  
✅ **Absender:** Immer `kontakt@ademdokur.dev` (professionell)

---

## Nächste Schritte

1. [ ] Resend Account erstellen
2. [ ] Domain `ademdokur.dev` verifizieren
3. [ ] DNS-Records in Cloudflare hinzufügen
4. [ ] API Key erstellen
5. [ ] Gmail "Senden als" konfigurieren
6. [ ] Test-E-Mail senden
7. [ ] Optional: Outlook → Gmail Weiterleitung

---

## Ressourcen

- [Resend Dokumentation](https://resend.com/docs)
- [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/)
- [SPF/DKIM/DMARC Checker](https://mxtoolbox.com)
- [E-Mail Test Tool](https://www.mail-tester.com)
