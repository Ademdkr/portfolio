# Footer Implementierung

Diese Dokumentation beschreibt die Implementierung des Footers für die Portfolio-Webseite.

## Übersicht

Der Footer ist eine Angular-Komponente, die am unteren Ende jeder Seite angezeigt wird und wichtige Links sowie Copyright-Informationen enthält.

## Komponenten-Struktur

```
src/app/components/footer/
├── footer.ts          # TypeScript-Logik
├── footer.html        # Template
└── footer.scss        # Styles
```

## Features

✅ **Copyright Notice** - Automatisches Jahr mit Name  
✅ **GitHub Link** - Direktlink zum GitHub-Profil  
✅ **E-Mail Link** - Mailto-Link für Kontakt  
✅ **Material Icons** - Verwendung von Angular Material Icons  
✅ **Responsive Design** - Mobile-optimiert  
✅ **Flexbox Layout** - Haftet am unteren Ende der Seite

## Verwendete Angular Material Komponenten

- `MatIconModule` - Für die Icons (GitHub, E-Mail)

## TypeScript Komponente (footer.ts)

```typescript
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // Aktuelles Jahr wird automatisch berechnet
  readonly currentYear = new Date().getFullYear();

  // Name für Copyright
  readonly name = 'Adem Dokur';

  // GitHub Profil URL
  readonly githubUrl = 'https://github.com/Ademdkr';

  // E-Mail Adresse
  readonly email = 'kontakt@ademdokur.dev';
}
```

## Template (footer.html)

```html
<footer class="footer">
  <div class="footer-content">
    <!-- Copyright Notice -->
    <span class="copyright">© {{ currentYear }} {{ name }}</span>

    <!-- Footer Links -->
    <div class="footer-links">
      <!-- GitHub Link -->
      <a
        [href]="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
        aria-label="GitHub"
      >
        <mat-icon>code</mat-icon>
        <span>GitHub</span>
      </a>

      <!-- E-Mail Link -->
      <a [href]="'mailto:' + email" class="footer-link" aria-label="E-Mail">
        <mat-icon>email</mat-icon>
        <span>Mail</span>
      </a>
    </div>
  </div>
</footer>
```

## Styles (footer.scss)

```scss
.footer {
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 2rem 1rem;
  margin-top: auto; // Wichtig für Sticky Footer
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: #666;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  mat-icon {
    font-size: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    color: #1976d2;
  }
}

// Responsive Design für mobile Geräte
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-links {
    justify-content: center;
  }
}
```

## Integration in die App

### 1. Import in app.ts

```typescript
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Footer, /* andere Imports */],
  // ...
})
```

### 2. Verwendung in app.html

```html
<!-- Vor dem router-outlet -->
<app-footer />
<router-outlet />
```

### 3. App-Layout für Sticky Footer (app.scss)

Damit der Footer immer am unteren Ende bleibt:

```scss
:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main,
section {
  flex: 1; // Content nimmt verfügbaren Platz ein
}
```

## Anpassungsmöglichkeiten

### Name ändern

In `footer.ts`:

```typescript
readonly name = 'Dein Name';
```

### GitHub URL anpassen

```typescript
readonly githubUrl = 'https://github.com/dein-username';
```

### E-Mail Adresse ändern

```typescript
readonly email = 'deine@email.com';
```

### Farben anpassen

In `footer.scss`:

```scss
.footer {
  background: #deine-farbe;
  border-top: 1px solid #deine-border-farbe;
}

.footer-link:hover {
  color: #deine-hover-farbe;
}
```

### Weitere Links hinzufügen

Im Template `footer.html`:

```html
<div class="footer-links">
  <a href="..." class="footer-link">
    <mat-icon>icon_name</mat-icon>
    <span>Text</span>
  </a>
  <!-- Weitere Links -->
</div>
```

Verfügbare Material Icons: [Material Icons](https://fonts.google.com/icons)

## Wichtige Hinweise

### Sticky Footer Setup

Damit der Footer immer am unteren Ende bleibt (auch bei wenig Content):

1. **Parent Container** muss `min-height: 100vh` haben
2. **Flexbox Layout** verwenden mit `flex-direction: column`
3. **Footer** bekommt `margin-top: auto`

```scss
// app.scss
:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

### Automatisches Jahr

Das Jahr wird automatisch beim Laden der Komponente berechnet:

```typescript
readonly currentYear = new Date().getFullYear();
```

Dies stellt sicher, dass das Copyright immer aktuell ist.

### E-Mail Links

Der `mailto:`-Link öffnet automatisch das Standard-E-Mail-Programm:

```html
<a [href]="'mailto:' + email"></a>
```

### Security

Externe Links verwenden `rel="noopener noreferrer"` für Sicherheit:

```html
<a href="..." target="_blank" rel="noopener noreferrer"></a>
```

## Erstellung der Komponente

Die Komponente wurde mit der Angular CLI erstellt:

```powershell
ng generate component components/footer --skip-tests
```

## Benötigte Dependencies

Angular Material muss im Projekt installiert sein:

```json
{
  "dependencies": {
    "@angular/material": "^21.0.5",
    "@angular/cdk": "^21.0.5"
  }
}
```

## Responsive Design

### Desktop (>768px)

```
┌─────────────────────────────────────┐
│ © 2025 Name    GitHub · Mail       │
└─────────────────────────────────────┘
```

### Mobile (≤768px)

```
┌─────────────┐
│  © 2025 Name │
│              │
│ GitHub · Mail│
└─────────────┘
```

## Troubleshooting

### Footer überlappt Content

Falls der Footer den Content überlappt, stelle sicher:

```scss
// app.scss
:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
}
```

### Icons werden nicht angezeigt

1. Überprüfe, ob Material Icons Font geladen ist
2. Stelle sicher, dass `MatIconModule` importiert ist
3. Überprüfe die Icon-Namen auf [fonts.google.com/icons](https://fonts.google.com/icons)

### Links funktionieren nicht

Überprüfe die Syntax:

```html
<!-- Richtig -->
<a [href]="'mailto:' + email">Mail</a>

<!-- Falsch -->
<a href="mailto:{{ email }}">Mail</a>
```

## Erweiterungsmöglichkeiten

### Social Media Links hinzufügen

```typescript
// footer.ts
readonly socialLinks = [
  { icon: 'code', url: 'https://github.com/...', label: 'GitHub' },
  { icon: 'link', url: 'https://linkedin.com/...', label: 'LinkedIn' },
  { icon: 'chat', url: 'https://twitter.com/...', label: 'Twitter' },
];
```

```html
<!-- footer.html -->
<div class="footer-links">
  @for (link of socialLinks; track link.label) {
  <a
    [href]="link.url"
    target="_blank"
    rel="noopener noreferrer"
    class="footer-link"
    [attr.aria-label]="link.label"
  >
    <mat-icon>{{ link.icon }}</mat-icon>
    <span>{{ link.label }}</span>
  </a>
  }
</div>
```

### Impressum & Datenschutz Links

```html
<div class="footer-legal">
  <a routerLink="/impressum">Impressum</a>
  <span>·</span>
  <a routerLink="/datenschutz">Datenschutz</a>
</div>
```

## Best Practices

1. **Automatisches Jahr**: Verwende `new Date().getFullYear()` statt hardcoded
2. **Accessibility**: Verwende `aria-label` für Icon-Links
3. **Security**: Externe Links mit `rel="noopener noreferrer"`
4. **Responsive**: Mobile-first Ansatz
5. **Typsicherheit**: TypeScript für bessere Wartbarkeit
6. **Konsistenz**: Gleiche Farben und Styles wie Header
