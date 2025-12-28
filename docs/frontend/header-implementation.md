# Header Implementierung

Diese Dokumentation beschreibt die Implementierung des sticky Headers für die Portfolio-Webseite.

## Übersicht

Der Header ist eine Angular-Komponente, die als sticky Navigation am oberen Rand der Seite fixiert bleibt und Smooth-Scrolling zu den verschiedenen Sektionen ermöglicht.

## Komponenten-Struktur

```
src/app/components/header/
├── header.ts          # TypeScript-Logik
├── header.html        # Template
└── header.scss        # Styles
```

## Features

✅ **Sticky Position** - Bleibt beim Scrollen oben fixiert  
✅ **Smooth Scrolling** - Sanfte Navigation zu Sektionen  
✅ **Angular Material** - Toolbar, Buttons und Icons  
✅ **Responsive Design** - Mobile-optimiert  
✅ **GitHub Link** - Direktlink zum GitHub-Profil

## Verwendete Angular Material Komponenten

- `MatToolbarModule` - Für die Toolbar-Struktur
- `MatButtonModule` - Für die Navigation-Buttons
- `MatIconModule` - Für das GitHub-Icon

## TypeScript Komponente (header.ts)

```typescript
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Navigation Items für die Menüpunkte
  readonly navItems = [
    { label: 'Start', link: '#start' },
    { label: 'Projekte', link: '#projekte' },
    { label: 'Skills', link: '#skills' },
    { label: 'Über mich', link: '#ueber-mich' },
    { label: 'Kontakt', link: '#kontakt' },
  ];

  // GitHub Profil URL
  readonly githubUrl = 'https://github.com/Ademdkr';

  // Smooth Scroll Funktion
  scrollToSection(link: string): void {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
```

## Template (header.html)

```html
<mat-toolbar class="header">
  <div class="header-container">
    <span class="logo">Portfolio</span>

    <nav class="nav-links">
      @for (item of navItems; track item.label) {
      <button mat-button (click)="scrollToSection(item.link)" class="nav-button">
        {{ item.label }}
      </button>
      }
    </nav>

    <a
      [href]="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      mat-icon-button
      class="github-button"
      aria-label="GitHub"
    >
      <mat-icon>code</mat-icon>
    </a>
  </div>
</mat-toolbar>
```

## Styles (header.scss)

```scss
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1976d2;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-button {
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1976d2;
  }
}

.github-button {
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #1976d2;
  }
}

// Responsive Design für mobile Geräte
@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
  }

  .logo {
    order: 1;
  }

  .github-button {
    order: 2;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: space-around;
    margin-top: 8px;
  }

  .nav-button {
    font-size: 0.875rem;
    padding: 0 8px;
  }
}
```

## Integration in die App

### 1. Import in app.ts

```typescript
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, /* andere Imports */],
  // ...
})
```

### 2. Verwendung in app.html

```html
<app-header />
```

### 3. Sektionen für Navigation erstellen

```html
<main id="start">
  <!-- Start Sektion -->
</main>

<section id="projekte">
  <!-- Projekte Sektion -->
</section>

<section id="skills">
  <!-- Skills Sektion -->
</section>

<section id="ueber-mich">
  <!-- Über mich Sektion -->
</section>

<section id="kontakt">
  <!-- Kontakt Sektion -->
</section>
```

## Anpassungsmöglichkeiten

### Navigation Items ändern

Bearbeite das `navItems` Array in `header.ts`:

```typescript
readonly navItems = [
  { label: 'Neuer Punkt', link: '#neue-sektion' },
  // ...
];
```

### GitHub URL anpassen

```typescript
readonly githubUrl = 'https://github.com/dein-username';
```

### Farben anpassen

In `header.scss` kannst du die Farben ändern:

```scss
.logo {
  color: #deine-farbe; // Logo-Farbe
}

.nav-button:hover {
  color: #deine-farbe; // Hover-Farbe
}
```

### Logo-Text ändern

Im Template `header.html`:

```html
<span class="logo">Dein Name</span>
```

## Wichtige Hinweise

- **Sticky Position**: Der Header verwendet `position: sticky` und bleibt beim Scrollen oben fixiert
- **Z-Index**: Der Header hat `z-index: 1000`, um über anderen Elementen zu bleiben
- **Smooth Scrolling**: Die Navigation verwendet `scrollIntoView` mit `behavior: 'smooth'`
- **Accessibility**: Links haben `aria-label` für bessere Zugänglichkeit
- **Security**: Externe Links verwenden `rel="noopener noreferrer"`

## Erstellung der Komponente

Die Komponente wurde mit der Angular CLI erstellt:

```powershell
ng generate component components/header --skip-tests
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

## Troubleshooting

### Header überlappt Content

Falls der Header den Content überlappt, füge ein Padding zum ersten Element hinzu:

```scss
main {
  padding-top: 64px; // Höhe des Headers
}
```

### Smooth Scrolling funktioniert nicht

Stelle sicher, dass die IDs in den Sektionen mit den Links übereinstimmen:

```html
<!-- Header -->
<button (click)="scrollToSection('#projekte')">Projekte</button>

<!-- Sektion -->
<section id="projekte">...</section>
```

## Best Practices

1. **Konsistente IDs**: Verwende eindeutige IDs für Sektionen
2. **Performance**: Der Header ist lightweight und performant
3. **Mobile First**: Design ist responsive und mobile-optimiert
4. **Wartbarkeit**: Navigation Items sind zentral in einem Array definiert
5. **Typsicherheit**: Verwendet TypeScript für bessere Code-Qualität
