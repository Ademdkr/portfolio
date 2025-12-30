# Landing Page Implementierung

Diese Dokumentation beschreibt die Implementierung der Landing Page für die Portfolio-Webseite.

## Übersicht

Die Landing Page ist die Startseite (`/`) der Portfolio-Website und präsentiert den Developer mit seinen wichtigsten Projekten, Skills und einem Call-to-Action.

## Komponenten-Struktur

```
src/app/pages/landing/
├── landing.ts          # TypeScript-Logik & Daten
├── landing.html        # Template
└── landing.scss        # Styles
```

## Features

✅ **Hero Section** - Eindrucksvoller Header mit Gradient  
✅ **Highlight-Projekte** - Preview der 3 besten Projekte  
✅ **Skills Teaser** - Überblick über Tech-Stack  
✅ **Call to Action** - Aufrufe zu Projekten & Kontakt  
✅ **Animations** - Fade-in Effekte für bessere UX  
✅ **Responsive Design** - Mobile-optimiert  
✅ **Routing Integration** - Navigation zu anderen Seiten

## Verwendete Angular Material Komponenten

- `MatButtonModule` - Für Buttons und Links
- `MatIconModule` - Für Icons
- `MatCardModule` - Für Projekt-Karten
- `MatChipsModule` - Für Tech-Stack Tags

## TypeScript Komponente (landing.ts)

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  detailsUrl: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-landing',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  // Profil-Daten
  readonly profile = {
    name: 'Adem Dokur',
    role: 'Full-Stack Developer (Angular · NestJS)',
    description:
      'Entwicklung moderner Webanwendungen mit Fokus auf saubere Architektur und Praxisnähe.',
    githubUrl: 'https://github.com/Ademdkr',
  };

  // Highlight-Projekte (nur die besten 2-3)
  readonly highlightProjects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Vollständige E-Commerce-Lösung mit Produktverwaltung, Warenkorb und Checkout.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL'],
      liveUrl: 'https://demo.example.com',
      detailsUrl: '/projekte',
    },
    // ... weitere Projekte
  ];

  // Skills nach Kategorien
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    },
    {
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'REST API', 'GraphQL'],
    },
    // ... weitere Kategorien
  ];
}
```

## Sektionen der Landing Page

### 1. Hero Section

**Zweck**: Erste Impression - Wer bin ich und was mache ich?

**Inhalt**:

- Name (H1)
- Rolle/Position (H2)
- Kurzbeschreibung (1-2 Sätze)
- Primary CTA: "Projekte ansehen"
- Secondary CTA: "GitHub"

**Design**:

- Gradient Background (Purple/Blue)
- Weiße Schrift
- Zentriert
- Min. 80vh Höhe
- Fade-in Animationen

```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-name">{{ profile.name }}</h1>
    <h2 class="hero-role">{{ profile.role }}</h2>
    <p class="hero-description">{{ profile.description }}</p>

    <div class="hero-actions">
      <a mat-raised-button color="primary" routerLink="/projekte">
        Projekte ansehen
        <mat-icon>arrow_forward</mat-icon>
      </a>
      <a mat-stroked-button [href]="profile.githubUrl" target="_blank">
        <mat-icon>code</mat-icon>
        GitHub
      </a>
    </div>
  </div>
</section>
```

### 2. Highlight-Projekte

**Zweck**: Showcase der besten 2-3 Projekte

**Inhalt**:

- Section Header mit Titel & Beschreibung
- Grid mit Projekt-Karten (Material Cards)
- Pro Karte:
  - Titel
  - 1-Satz-Beschreibung
  - Tech-Stack (Chips)
  - "Details" Button (zu /projekte)
  - "Live Demo" Button (optional, extern)
- "Alle Projekte ansehen" Button

**Design**:

- Heller Background (#f9fafb)
- Responsive Grid (auto-fit)
- Hover-Effekte auf Cards
- Tech-Stack als Chips

```html
<section class="highlight-projects">
  <div class="section-header">
    <h2>Ausgewählte Projekte</h2>
    <p>Einblick in meine neuesten Arbeiten</p>
  </div>

  <div class="projects-grid">
    @for (project of highlightProjects; track project.title) {
    <mat-card class="project-card">
      <mat-card-header>
        <mat-card-title>{{ project.title }}</mat-card-title>
      </mat-card-header>

      <mat-card-content>
        <p>{{ project.description }}</p>

        <div class="tech-stack">
          <mat-chip-set>
            @for (tech of project.techStack; track tech) {
            <mat-chip>{{ tech }}</mat-chip>
            }
          </mat-chip-set>
        </div>
      </mat-card-content>

      <mat-card-actions>
        <a mat-button [routerLink]="project.detailsUrl">Details</a>
        @if (project.liveUrl) {
        <a mat-button [href]="project.liveUrl" target="_blank">
          <mat-icon>open_in_new</mat-icon>
          Live Demo
        </a>
        }
      </mat-card-actions>
    </mat-card>
    }
  </div>
</section>
```

### 3. Skills Teaser

**Zweck**: Überblick über Tech-Stack ohne ins Detail zu gehen

**Inhalt**:

- Section Header
- 4 Kategorien (Frontend, Backend, Datenbanken, Tools)
- Pro Kategorie: Liste von Skills als Tags
- "Alle Skills ansehen" Button (zu /skills)

**Design**:

- Weißer Background
- Grid Layout (4 Spalten auf Desktop)
- Skill-Tags mit Hover-Effekt
- Unterstrich unter Kategorie-Titel

```html
<section class="skills-teaser">
  <div class="section-header">
    <h2>Technologien & Skills</h2>
    <p>Mein Tech-Stack im Überblick</p>
  </div>

  <div class="skills-grid">
    @for (category of skillCategories; track category.title) {
    <div class="skill-category">
      <h3>{{ category.title }}</h3>
      <div class="skill-tags">
        @for (skill of category.skills; track skill) {
        <span class="skill-tag">{{ skill }}</span>
        }
      </div>
    </div>
    }
  </div>

  <div class="section-footer">
    <a mat-stroked-button routerLink="/skills">
      Alle Skills ansehen
      <mat-icon>arrow_forward</mat-icon>
    </a>
  </div>
</section>
```

### 4. Call to Action (CTA)

**Zweck**: Besucher zu Aktion bewegen

**Inhalt**:

- Einladende Überschrift
- Kurzer Text
- 2 Buttons:
  - "Projekte ansehen" (zu /projekte)
  - "Kontakt aufnehmen" (zu /kontakt)

**Design**:

- Gradient Background (wie Hero)
- Weiße Schrift
- Zentriert
- Abgerundete Ecken

```html
<section class="cta">
  <div class="cta-content">
    <h2>Interesse an meinen Projekten?</h2>
    <p>Lassen Sie uns zusammen etwas Großartiges schaffen!</p>

    <div class="cta-actions">
      <a mat-raised-button color="primary" routerLink="/projekte"> Projekte ansehen </a>
      <a mat-raised-button routerLink="/kontakt"> Kontakt aufnehmen </a>
    </div>
  </div>
</section>
```

## Styles (landing.scss)

### Hero Section Styling

```scss
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  animation: fadeInUp 0.8s ease-out;
}

.hero-role {
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  opacity: 0.95;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
```

### Animationen

```scss
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Projekt-Karten

```scss
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}
```

### Skill-Tags

```scss
.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
}
```

## Routing Integration

### Route Konfiguration

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', component: Landing },
  // ... andere Routen
];
```

### Navigation

Alle Links verwenden `routerLink` statt Hash-Anchors:

```html
<!-- Interne Navigation -->
<a routerLink="/projekte">Projekte</a>

<!-- Externe Links -->
<a [href]="url" target="_blank" rel="noopener noreferrer">GitHub</a>
```

## Anpassungsmöglichkeiten

### Profil-Daten ändern

In `landing.ts`:

```typescript
readonly profile = {
  name: 'Dein Name',
  role: 'Deine Position',
  description: 'Deine Beschreibung',
  githubUrl: 'https://github.com/dein-username',
};
```

### Projekte anpassen

```typescript
readonly highlightProjects: Project[] = [
  {
    title: 'Projekt Name',
    description: 'Kurzbeschreibung in einem Satz.',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    liveUrl: 'https://demo.url', // Optional
    detailsUrl: '/projekte',
  },
  // ... weitere Projekte
];
```

### Skills anpassen

```typescript
readonly skillCategories: SkillCategory[] = [
  {
    title: 'Kategorie Name',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // ... weitere Kategorien
];
```

### Farben ändern

In `landing.scss`:

```scss
// Hero Gradient
.hero {
  background: linear-gradient(135deg, #deine-farbe1 0%, #deine-farbe2 100%);
}

// Skill-Tag Hover
.skill-tag:hover {
  background: #deine-farbe;
}
```

## Responsive Design

### Breakpoints

- Desktop: > 768px
- Tablet/Mobile: ≤ 768px

### Mobile Anpassungen

```scss
@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: 3rem 1rem;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr; // Single column
  }
}
```

## Best Practices

### 1. Performance

- Verwende `track` in `@for` Loops für besseres Rendering
- Lazy Loading für Bilder (wenn verwendet)
- Optimierte Animationen (nur transform/opacity)

### 2. Accessibility

- Semantisches HTML (section, h1, h2, etc.)
- `aria-label` für Icon-Buttons
- Ausreichende Kontraste (WCAG AA)
- Keyboard-Navigation möglich

### 3. SEO

- Sinnvolle H1-H2 Hierarchie
- Beschreibende Alt-Texte (bei Bildern)
- Meta-Tags in index.html

### 4. Code-Qualität

- TypeScript Interfaces für Typsicherheit
- Readonly Properties für Daten
- Saubere Trennung von Daten und Präsentation

## Erstellung der Komponente

Die Komponente wurde mit der Angular CLI erstellt:

```powershell
ng generate component pages/landing --skip-tests
```

## Benötigte Dependencies

```json
{
  "dependencies": {
    "@angular/material": "^21.0.5",
    "@angular/cdk": "^21.0.5",
    "@angular/router": "^21.0.0"
  }
}
```

## Integration in die App

### 1. Route registrieren

```typescript
// app.routes.ts
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  { path: '', component: Landing },
  // ...
];
```

### 2. In App einbinden

Die Landing Page wird über den Router automatisch geladen, wenn der Nutzer auf `/` navigiert.

## Troubleshooting

### Buttons funktionieren nicht

Stelle sicher, dass `RouterLink` importiert ist:

```typescript
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, /* ... */],
})
```

### Animationen laufen nicht

Überprüfe, ob die Keyframes definiert sind:

```scss
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Grid bricht auf Mobile

Stelle sicher, dass Media Queries vorhanden sind:

```scss
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

### Material Icons werden nicht angezeigt

Überprüfe, dass `MatIconModule` importiert ist und die Font geladen wird.

## Erweiterungsmöglichkeiten

### 1. Projekt-Details Modal

Statt zur Projektseite zu navigieren, könnte ein Modal mit Details geöffnet werden.

### 2. Animierte Statistiken

Zahlen zu Projekten, Skills, Erfahrung mit Count-up Animation.

### 3. Testimonials

Zitate von Kunden oder Kollegen.

### 4. Blog-Preview

Neueste Blog-Artikel (wenn vorhanden).

### 5. Tech-Stack Logos

Statt Text-Chips könnten Logos der Technologien angezeigt werden.

### 6. Timeline

Berufliche Stationen in einer Timeline.

## Performance-Tipps

1. **Lazy Loading**: Lade Bilder nur wenn sie im Viewport sind
2. **OnPush Change Detection**: Für bessere Performance
3. **TrackBy Functions**: In ngFor/for Loops
4. **Optimierte Bilder**: WebP Format, verschiedene Größen
5. **Code Splitting**: Lazy Loading für Routen

## Zusammenfassung

Die Landing Page ist die zentrale Anlaufstelle der Portfolio-Website und präsentiert:

- **Hero Section**: Klare Positionierung als Full-Stack Developer
- **Projekte**: Top 3 Arbeiten mit Tech-Stack
- **Skills**: Überblick über Fähigkeiten
- **CTA**: Aufrufe zur Interaktion

Die Seite nutzt Angular Material, Routing und moderne CSS-Techniken für eine professionelle und performante User Experience.
