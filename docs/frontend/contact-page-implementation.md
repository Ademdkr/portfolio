# Contact-Seite Implementierungsanleitung

## Übersicht

Die Contact-Seite bietet einfache und direkte Kontaktmöglichkeiten über E-Mail und GitHub. Ziel ist es, Kommunikationswege klar und zugänglich zu präsentieren.

**Route:** `/contact`

## Struktur

### Komponenten-Dateien

- `src/app/pages/contact/contact.ts` - TypeScript Component
- `src/app/pages/contact/contact.html` - HTML Template
- `src/app/pages/contact/contact.scss` - SCSS Styling

### Sektionen

1. **Header** - Begrüßung mit Call-to-Action
2. **Contact Options** - E-Mail und GitHub mit Buttons
3. **Additional Info** - Antwortzeit-Information

## TypeScript Implementation

### Component

```typescript
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = 'adem.dokur@example.com';
  readonly github = 'https://github.com/Ademdkr';

  openEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }

  openGitHub(): void {
    window.open(this.github, '_blank');
  }
}
```

### Properties

**email**: E-Mail-Adresse als readonly Property

- Wird im Button-Text angezeigt
- Wird in `mailto:`-Link verwendet

**github**: GitHub-Profil URL als readonly Property

- Wird zum Öffnen in neuem Tab verwendet

### Methods

**openEmail()**: Öffnet den Mail-Client mit vorausgefüllter E-Mail-Adresse

- Verwendet `window.location.href` mit `mailto:` Protokoll
- Browser öffnet Standard-Mail-Client
- E-Mail-Adresse wird automatisch eingetragen

**openGitHub()**: Öffnet GitHub-Profil in neuem Tab

- Verwendet `window.open()` mit `_blank` Target
- Öffnet in neuem Browser-Tab
- Kein Verlassen der Portfolio-Seite

## HTML Template

### Struktur

```html
<div class="contact-page">
  <!-- Header Section -->
  <section class="contact-header">
    <h1>Kontakt</h1>
    <p class="subtitle">Interessiert an einer Zusammenarbeit? Ich freue mich auf Ihre Nachricht!</p>
  </section>

  <!-- Contact Options -->
  <section class="contact-options">
    <mat-card class="contact-card">
      <mat-card-content>
        <!-- Email Contact -->
        <div class="contact-method">
          <div class="method-icon">
            <mat-icon>email</mat-icon>
          </div>
          <div class="method-content">
            <h3>E-Mail</h3>
            <p>Schreiben Sie mir direkt eine E-Mail</p>
            <button mat-raised-button color="primary" (click)="openEmail()">
              <mat-icon>send</mat-icon>
              {{ email }}
            </button>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- GitHub Contact -->
        <div class="contact-method">
          <div class="method-icon">
            <mat-icon>code</mat-icon>
          </div>
          <div class="method-content">
            <h3>GitHub</h3>
            <p>Schauen Sie sich meine Projekte und den Code an</p>
            <button mat-raised-button (click)="openGitHub()">
              <mat-icon>open_in_new</mat-icon>
              GitHub Profil besuchen
            </button>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </section>

  <!-- Additional Info -->
  <section class="contact-info">
    <p class="info-text">
      <mat-icon>info</mat-icon>
      Ich antworte in der Regel innerhalb von 24 Stunden.
    </p>
  </section>
</div>
```

### Event Handling

**E-Mail Button**: `(click)="openEmail()"`

- Click-Event triggert `openEmail()` Methode
- Öffnet Mail-Client mit vorausgefüllter Adresse

**GitHub Button**: `(click)="openGitHub()"`

- Click-Event triggert `openGitHub()` Methode
- Öffnet GitHub-Profil in neuem Tab

### Material Components

**mat-raised-button**: Raised Buttons mit Schatten

- Primary-Color für E-Mail (wichtigste Aktion)
- Default-Color für GitHub (sekundäre Aktion)

**mat-icon**: Material Icons innerhalb der Buttons

- `send` Icon für E-Mail
- `open_in_new` Icon für GitHub
- `email` und `code` Icons für Kontaktmethoden

## SCSS Styling

### Layout

```scss
.contact-page {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: 60vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #666;
    line-height: 1.7;
    margin: 0;
  }
}
```

**Page Container**: Schmaler als andere Seiten (800px statt 1200px)

- Kontaktformulare brauchen weniger Breite
- Fokussierter, zentrierter Look

### Contact Methods

```scss
.contact-options {
  margin-bottom: 3rem;

  .contact-card {
    padding: 2rem;
  }

  .contact-method {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 2rem 0;

    .method-icon {
      flex-shrink: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;

      mat-icon {
        color: white;
        font-size: 32px;
        width: 32px;
        height: 32px;
      }
    }

    .method-content {
      flex: 1;

      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #333;
        margin: 0 0 0.5rem 0;
      }

      p {
        font-size: 1rem;
        color: #666;
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
      }

      button {
        mat-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
    margin: 0 2rem;
  }
}
```

**Contact Method Layout:**

- Flexbox mit Icon links, Content rechts
- Gradient-Icons für visuelle Konsistenz
- Divider mit Gradient-Effekt zwischen Methoden

### Additional Info

```scss
.contact-info {
  text-align: center;

  .info-text {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #666;
    background: #f9fafb;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;

    mat-icon {
      color: #667eea;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }
  }
}
```

**Info-Badge:**

- Inline-Flex für Icon + Text Alignment
- Subtle Background mit Border
- Icon in Akzentfarbe

## Features

### 1. Header Section

- Gradient-Überschrift wie auf anderen Seiten
- Einladender Subtitle-Text
- Call-to-Action Formulierung

### 2. E-Mail Contact

- **Icon**: `email` in Gradient-Circle
- **Titel**: "E-Mail"
- **Beschreibung**: "Schreiben Sie mir direkt eine E-Mail"
- **Button**: Primary Raised Button mit E-Mail-Adresse
- **Aktion**: Öffnet Mail-Client mit `mailto:` Link

### 3. GitHub Contact

- **Icon**: `code` in Gradient-Circle
- **Titel**: "GitHub"
- **Beschreibung**: "Schauen Sie sich meine Projekte und den Code an"
- **Button**: Default Raised Button
- **Aktion**: Öffnet GitHub-Profil in neuem Tab

### 4. Visual Divider

- Gradient-Linie trennt Kontaktmethoden
- Subtle Effekt mit transparenten Rändern

### 5. Response Time Info

- Info-Badge mit Icon
- Zeigt Professionalität
- Setzt Erwartungen für Antwortzeit

## Responsive Design

### Desktop (> 768px)

- Horizontal Layout für Contact Methods
- Icon links, Content rechts
- Volle Button-Breite mit Text

### Mobile (≤ 768px)

```scss
@media (max-width: 768px) {
  .contact-page {
    padding: 2rem 1rem;
  }

  .contact-header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  .contact-options {
    .contact-card {
      padding: 1.5rem;
    }

    .contact-method {
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 0;

      .method-icon {
        width: 56px;
        height: 56px;

        mat-icon {
          font-size: 28px;
          width: 28px;
          height: 28px;
        }
      }

      .method-content {
        h3 {
          font-size: 1.25rem;
        }

        p {
          font-size: 0.95rem;
        }

        button {
          width: 100%;
        }
      }
    }

    .divider {
      margin: 0;
    }
  }

  .contact-info {
    .info-text {
      font-size: 0.9rem;
      padding: 0.875rem 1.25rem;
    }
  }
}
```

**Mobile Anpassungen:**

- Vertikales Layout für Contact Methods
- Full-Width Buttons für bessere Touch-Targets
- Kleinere Icons und Font-Sizes
- Reduzierte Abstände

## Material Design Integration

### Verwendete Komponenten

- `MatButtonModule`: Raised Buttons mit Primary/Default Colors
- `MatIconModule`: Material Icons für Actions und Visuals
- `MatCardModule`: Card-Container für Contact Options

### Icons

- `email`: E-Mail Kontaktmethode
- `send`: E-Mail senden Aktion
- `code`: GitHub Kontaktmethode
- `open_in_new`: Externes Öffnen Aktion
- `info`: Informations-Icon

### Button Types

- **Primary Raised Button**: E-Mail (wichtigste Aktion)
- **Default Raised Button**: GitHub (sekundäre Aktion)

## Best Practices

### 1. User Experience

- **Direkte Aktionen**: Ein Click öffnet Mail-Client oder GitHub
- **Klare Labels**: Buttons zeigen genau, was passiert
- **Visual Hierarchy**: E-Mail als Primary-Button hervorgehoben
- **Erwartungsmanagement**: Antwortzeit kommuniziert

### 2. Security & Privacy

- **Mailto-Links**: Keine direkten E-Mail-Formulare (weniger Spam-Anfällig)
- **External Links**: GitHub öffnet in neuem Tab (`_blank`)
- **No Tracking**: Keine Third-Party-Services
- **Readonly Properties**: E-Mail und GitHub URL sind unveränderlich

### 3. Accessibility

- **Semantic HTML**: Section-Tags für Struktur
- **Button Actions**: Click-Events statt Link-Hacks
- **Icon Labels**: Icons mit beschreibendem Text
- **Keyboard Navigation**: Buttons sind fokusierbar

### 4. Performance

- **No External Dependencies**: Keine E-Mail-Service-APIs
- **Lightweight**: Minimale Komponenten
- **Fast Load**: Keine Heavy Assets

### 5. Maintainability

- **Centralized Data**: E-Mail und GitHub in Properties
- **Method Extraction**: Logik in separaten Methoden
- **Type Safety**: Readonly Properties

## Erweiterungsmöglichkeiten

### 1. LinkedIn Integration

```typescript
readonly linkedin = 'https://linkedin.com/in/ademdokur';

openLinkedIn(): void {
  window.open(this.linkedin, '_blank');
}
```

**HTML:**

```html
<div class="contact-method">
  <div class="method-icon">
    <mat-icon>business</mat-icon>
  </div>
  <div class="method-content">
    <h3>LinkedIn</h3>
    <p>Vernetzen Sie sich mit mir</p>
    <button mat-raised-button (click)="openLinkedIn()">
      <mat-icon>open_in_new</mat-icon>
      LinkedIn Profil
    </button>
  </div>
</div>
```

### 2. Kontaktformular

- Formular mit Name, E-Mail, Nachricht
- Angular Reactive Forms
- Validation mit Error Messages
- EmailJS oder SendGrid Integration

```typescript
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

contactForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
}

onSubmit(): void {
  if (this.contactForm.valid) {
    // Send email via EmailJS or backend API
  }
}
```

### 3. Social Media Links

- Twitter/X, Instagram, Stack Overflow
- Icon-Buttons als Row
- Im Footer oder als eigene Section

### 4. Verfügbarkeits-Status

```typescript
readonly availability = {
  status: 'available', // 'available', 'busy', 'unavailable'
  message: 'Aktuell offen für neue Projekte'
};
```

**Visual Indicator:**

- Grüner Dot für "available"
- Gelber Dot für "busy"
- Roter Dot für "unavailable"

### 5. Contact Success Feedback

- Snackbar nach Button-Click
- "E-Mail-Client wurde geöffnet"
- "GitHub-Profil wird geöffnet"

```typescript
import { MatSnackBar } from '@angular/material/snack-bar';

constructor(private snackBar: MatSnackBar) {}

openEmail(): void {
  window.location.href = `mailto:${this.email}`;
  this.snackBar.open('E-Mail-Client wird geöffnet...', 'OK', {
    duration: 3000,
  });
}
```

### 6. Copy-to-Clipboard

- Button zum Kopieren der E-Mail-Adresse
- Tooltip "Kopiert!" nach Click

```typescript
copyEmail(): void {
  navigator.clipboard.writeText(this.email);
  // Show snackbar or tooltip
}
```

## Integration in Portfolio

### Routing

Die Contact-Seite ist bereits in `app.routes.ts` integriert:

```typescript
{
  path: 'contact',
  component: Contact,
}
```

### Navigation

Die Header-Navigation enthält bereits den Link:

```html
<a mat-button routerLink="/contact">Kontakt</a>
```

### Landing Page CTA

Die Landing Page kann einen "Kontakt aufnehmen" Button enthalten, der zu `/contact` verlinkt.

### Footer

Footer kann E-Mail und GitHub-Links enthalten:

```html
<footer>
  <div class="footer-links">
    <a href="mailto:adem.dokur@example.com">E-Mail</a>
    <a href="https://github.com/Ademdkr" target="_blank">GitHub</a>
  </div>
</footer>
```

## Zusammenfassung

Die Contact-Seite bietet einfache und direkte Kontaktmöglichkeiten:

✅ Gradient-Header mit einladendem Subtitle  
✅ E-Mail-Button mit mailto-Link  
✅ GitHub-Button öffnet Profil in neuem Tab  
✅ Gradient-Icons für visuelle Konsistenz  
✅ Divider zwischen Kontaktmethoden  
✅ Response Time Info-Badge  
✅ Material Design mit Raised Buttons  
✅ Responsive Layout (horizontal → vertikal)  
✅ Type-safe TypeScript Implementation  
✅ Accessibility-freundlich

Die Implementierung ist simpel, direkt und benutzerfreundlich – genau richtig für eine Kontaktseite.
