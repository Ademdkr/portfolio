# Projects Page Implementierung

Diese Dokumentation beschreibt die Implementierung der Projects-Seite mit Übersicht und Detailseiten für die Portfolio-Webseite.

## Übersicht

Die Projects-Seite zeigt alle Projekte in einer strukturierten Übersicht und bietet für ausgewählte Projekte detaillierte Einzelseiten mit umfassenden Informationen über Architektur, Features und technische Details.

## Struktur

```
src/app/pages/projects/
├── projects.ts                     # Übersichtsseite
├── projects.html
├── projects.scss
├── issue-tracker/                  # Detailseite
│   ├── issue-tracker.ts
│   ├── issue-tracker.html
│   └── issue-tracker.scss
├── budget-tracker/                 # Detailseite
│   ├── budget-tracker.ts
│   ├── budget-tracker.html
│   └── budget-tracker.scss
└── [weitere Projekte...]
```

## Routing-Konfiguration

### Nested Routes

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { Projects } from './pages/projects/projects';
import { IssueTracker } from './pages/projects/issue-tracker/issue-tracker';
import { BudgetTracker } from './pages/projects/budget-tracker/budget-tracker';

export const routes: Routes = [
  { path: '', component: Landing },
  {
    path: 'projects',
    children: [
      { path: '', component: Projects }, // /projects
      { path: 'issue-tracker', component: IssueTracker }, // /projects/issue-tracker
      { path: 'budget-tracker', component: BudgetTracker }, // /projects/budget-tracker
    ],
  },
  // ... andere Routen
];
```

### Vorteile von Nested Routes

✅ Saubere URL-Struktur (`/projects/issue-tracker`)  
✅ Gemeinsame Parent-Route für alle Projekte  
✅ Einfaches Hinzufügen neuer Projekt-Detailseiten  
✅ SEO-freundliche URLs

---

## 1. Projekt-Übersichtsseite

**URL**: `/projects`

### Zweck

Alle Projekte strukturiert präsentieren und vergleichbar machen.

### Features

✅ **Grid-Layout** - Responsive Card-Grid mit Auto-Fit  
✅ **Featured Badge** - Hervorhebung der Top-Projekte  
✅ **Status-Badges** - Visueller Status (fertig / in Arbeit)  
✅ **Tech-Stack Tags** - Chips mit Hover-Effekt  
✅ **Multiple CTAs** - Details, Live Demo, GitHub  
✅ **Hover-Animationen** - Card lift effect

### TypeScript Komponente (projects.ts)

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  id: string;
  name: string;
  type: string; // z.B. "Full-Stack Web App"
  description: string;
  techStack: string[];
  status: 'fertig' | 'in Arbeit';
  links: {
    demo?: string; // Optional: Live Demo URL
    github?: string; // Optional: GitHub Repo URL
    details: string; // Route zur Detailseite
  };
  featured?: boolean; // Optional: Top-Projekt?
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      id: 'issue-tracker',
      name: 'Issue-Tracker',
      type: 'Full-Stack Web App',
      description:
        'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT'],
      status: 'fertig',
      links: {
        demo: 'https://issue-tracker-demo.example.com',
        github: 'https://github.com/Ademdkr/issue-tracker',
        details: '/projects/issue-tracker',
      },
      featured: true,
    },
    {
      id: 'budget-tracker',
      name: 'Budget-Tracker',
      type: 'Full-Stack Web App',
      description:
        'Persönliches Finanzmanagement-Tool zur Verfolgung von Einnahmen, Ausgaben und Budgets.',
      techStack: ['Angular', 'NestJS', 'MongoDB', 'Mongoose', 'Chart.js'],
      status: 'fertig',
      links: {
        demo: 'https://budget-tracker-demo.example.com',
        github: 'https://github.com/Ademdkr/budget-tracker',
        details: '/projects/budget-tracker',
      },
      featured: true,
    },
    {
      id: 'mini-shop',
      name: 'Mini-Shop',
      type: 'E-Commerce Platform',
      description: 'E-Commerce-Lösung mit Produktverwaltung, Warenkorb und Checkout.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Redis'],
      status: 'in Arbeit',
      links: {
        details: '/projects/mini-shop',
      },
    },
  ];
}
```

### HTML Template (projects.html)

```html
<div class="projects-page">
  <!-- Header Section -->
  <section class="projects-header">
    <h1>Projekte</h1>
    <p class="subtitle">Übersicht meiner Web-Entwicklungsprojekte</p>
  </section>

  <!-- Projects Grid -->
  <section class="projects-grid">
    @for (project of projects; track project.id) {
    <mat-card class="project-card" [class.featured]="project.featured">
      <!-- Featured Badge -->
      @if (project.featured) {
      <div class="featured-badge">
        <mat-icon>star</mat-icon>
        <span>Featured</span>
      </div>
      }

      <!-- Card Header -->
      <mat-card-header>
        <mat-card-title>{{ project.name }}</mat-card-title>
        <mat-card-subtitle>{{ project.type }}</mat-card-subtitle>
      </mat-card-header>

      <!-- Card Content -->
      <mat-card-content>
        <!-- Description -->
        <p class="description">{{ project.description }}</p>

        <!-- Tech Stack -->
        <div class="tech-stack">
          <h4>Tech-Stack</h4>
          <mat-chip-set>
            @for (tech of project.techStack; track tech) {
            <mat-chip>{{ tech }}</mat-chip>
            }
          </mat-chip-set>
        </div>

        <!-- Status -->
        <div class="status">
          <span class="status-badge" [class.completed]="project.status === 'fertig'">
            {{ project.status }}
          </span>
        </div>
      </mat-card-content>

      <!-- Card Actions -->
      <mat-card-actions>
        <a mat-raised-button color="primary" [routerLink]="project.links.details">
          <mat-icon>info</mat-icon>
          Details
        </a>

        @if (project.links.demo) {
        <a mat-button [href]="project.links.demo" target="_blank" rel="noopener noreferrer">
          <mat-icon>open_in_new</mat-icon>
          Live Demo
        </a>
        } @if (project.links.github) {
        <a mat-button [href]="project.links.github" target="_blank" rel="noopener noreferrer">
          <mat-icon>code</mat-icon>
          GitHub
        </a>
        }
      </mat-card-actions>
    </mat-card>
    }
  </section>
</div>
```

### Styling (projects.scss)

```scss
.projects-page {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.projects-header {
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
    margin: 0;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  &.featured {
    border: 2px solid #667eea;
  }

  .tech-stack {
    h4 {
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #666;
      margin: 0 0 0.75rem 0;
    }

    mat-chip {
      font-size: 0.85rem;
      background: #f3f4f6;
      color: #555;

      &:hover {
        background: #667eea;
        color: white;
      }
    }
  }

  .status {
    .status-badge {
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      background: #fef3c7;
      color: #92400e;
      border: 1px solid #fbbf24;

      &.completed {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #34d399;
      }
    }
  }
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 1;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 2. Projekt-Detailseiten

**URLs**: `/projects/issue-tracker`, `/projects/budget-tracker`

Die Implementierung der Projekt-Detailseiten ist in einem separaten Dokument beschrieben:

📄 **[Project Detail Page Implementierung](./project-detail-page-implementation.md)**

### Übersicht

Detailseiten zeigen:

- ✅ Anforderungsverständnis (Problemstellung & Ziel)
- ✅ Systemarchitektur (Frontend, Backend, DB, Communication)
- ✅ Technische Tiefe (Modulstruktur, State, API, DB-Modell)
- ✅ Problem-Solving (Herausforderungen & Lösungen)
- ✅ Reflexion (Learnings & Verbesserungen)

Siehe **[Project Detail Page Implementierung](./project-detail-page-implementation.md)** für:

1. **Projekt-Header** - Titel, Tech-Stack, Action Buttons
2. **Problemstellung & Ziel** - Anforderungsverständnis
3. **Features** - Grid mit Icon-Cards
4. **Architektur** - Frontend, Backend, DB, Communication
5. **Screenshots** - UI-Flows und Ansichten
6. **Technische Details** - Modulstruktur, State, API, DB
7. **Herausforderungen & Learnings** - Problem-Solving & Reflexion

**Navigation**:

```html
<!-- Zurück zur Übersicht -->
<a mat-button routerLink="/projects">
  <mat-icon>arrow_back</mat-icon>
  Zurück zu Projekten
</a>
```

---

## Komponenten erstellen

### Mit Angular CLI

```powershell
# Übersichtsseite (bereits vorhanden)
ng generate component pages/projects --skip-tests

# Detailseiten
ng generate component pages/projects/issue-tracker --skip-tests
ng generate component pages/projects/budget-tracker --skip-tests

# Weitere Detailseiten (nach Bedarf)
ng generate component pages/projects/mini-shop --skip-tests
ng generate component pages/projects/wiki --skip-tests
```

---

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

### Material Modules

- `MatCardModule` - Projekt-Cards
- `MatButtonModule` - Buttons
- `MatChipsModule` - Tech-Stack Tags
- `MatIconModule` - Icons
- `MatDividerModule` - Trennlinien

---

## Navigation & Links

### Von Landing Page

```html
<!-- Hero Section -->
<a mat-raised-button routerLink="/projects">Projekte ansehen</a>

<!-- Projekt-Karte -->
<a mat-button [routerLink]="'/projects/issue-tracker'">Details</a>

<!-- Section Footer -->
<a mat-stroked-button routerLink="/projects">Alle Projekte ansehen</a>
```

### Innerhalb der Detailseiten

```html
<!-- Zurück Button -->
<a mat-button routerLink="/projects">
  <mat-icon>arrow_back</mat-icon>
  Zurück zu Projekten
</a>

<!-- Zwischen Projekten navigieren -->
<a mat-button routerLink="/projects/budget-tracker">Nächstes Projekt</a>
```

### Im Header

```typescript
// header.ts
readonly navItems = [
  { label: 'Start', route: '/' },
  { label: 'Projekte', route: '/projects' },
  { label: 'Skills', route: '/skills' },
  { label: 'Über mich', route: '/ueber-mich' },
  { label: 'Kontakt', route: '/kontakt' },
];
```

---

## Best Practices

### 1. Datenmodellierung

```typescript
// Typsicherheit mit Interfaces
interface Project {
  id: string; // Eindeutige ID
  name: string; // Anzeigename
  type: string; // Kategorie
  description: string; // Kurzbeschreibung
  techStack: string[]; // Array von Technologien
  status: 'fertig' | 'in Arbeit'; // Union Type
  links: {
    demo?: string; // Optional
    github?: string; // Optional
    details: string; // Pflichtfeld
  };
  featured?: boolean; // Optional
}
```

### 2. Code-Organisation

```typescript
// Readonly für unveränderliche Daten
readonly projects: Project[] = [...];

// Track-By für Performance in Loops
@for (project of projects; track project.id) { }

// Descriptive Variablennamen
const problemStatement = { why, problem, target };
```

### 3. Accessibility

```html
<!-- Semantisches HTML -->
<section>
  ,
  <h1>
    ,
    <h2>
      ,
      <h3>
        <!-- Alt-Texte für Icons -->
        <mat-icon aria-label="Zurück">arrow_back</mat-icon>

        <!-- Rel-Attribute für externe Links -->
        <a href="..." target="_blank" rel="noopener noreferrer"></a>
      </h3>
    </h2>
  </h1>
</section>
```

### 4. Performance

```typescript
// Track-By in @for Loops
@for (item of items; track item.id) { }

// Lazy Loading für Detailseiten (optional)
{
  path: 'projects',
  loadChildren: () => import('./pages/projects/projects.routes')
}
```

### 5. SEO

```html
<!-- Sinnvolle H1-H3 Hierarchie -->
<h1>Issue-Tracker</h1>
<h2>Problemstellung & Ziel</h2>
<h3>Warum gibt es dieses Projekt?</h3>

<!-- Beschreibende Links -->
<a routerLink="/projects/issue-tracker">Issue-Tracker Details</a>
```

---

## Responsive Design

### Breakpoints

- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px

### Mobile Anpassungen

```scss
@media (max-width: 768px) {
  .projects-page {
    padding: 2rem 1rem;
  }

  .projects-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr; // Single column
  }

  .project-card mat-card-actions {
    flex-direction: column;

    a {
      width: 100%;
      justify-content: center;
    }
  }

  .action-buttons {
    flex-direction: column;
  }
}
```

---

## Anpassungsmöglichkeiten

### Neues Projekt hinzufügen

#### 1. Komponente erstellen

```powershell
ng generate component pages/projects/neue-app --skip-tests
```

#### 2. Route registrieren

```typescript
// app.routes.ts
{ path: 'neue-app', component: NeueApp }
```

#### 3. Zur Übersicht hinzufügen

```typescript
// projects.ts
readonly projects: Project[] = [
  // ... bestehende Projekte
  {
    id: 'neue-app',
    name: 'Neue App',
    type: 'Mobile App',
    description: 'Beschreibung der neuen App.',
    techStack: ['Angular', 'Ionic', 'Capacitor'],
    status: 'in Arbeit',
    links: {
      details: '/projects/neue-app',
    },
  },
];
```

#### 4. Detailseite implementieren

Kopiere die Struktur von `issue-tracker.ts` und passe die Inhalte an.

### Status-Badge Farben anpassen

```scss
.status-badge {
  &.completed {
    background: #d1fae5;
    color: #065f46;
    border: 1px solid #34d399;
  }

  &.in-progress {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fbbf24;
  }

  &.planned {
    background: #e0e7ff;
    color: #3730a3;
    border: 1px solid #818cf8;
  }
}
```

### Featured Badge anpassen

```scss
.featured-badge {
  background: linear-gradient(135deg, #f59e0b 0%, #dc2626 100%); // Orange-Red
  // oder
  background: linear-gradient(135deg, #10b981 0%, #059669 100%); // Green
}
```

---

## Troubleshooting

### Problem: Routing funktioniert nicht

**Lösung**: Stelle sicher, dass `RouterLink` importiert ist:

```typescript
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, /* ... */],
})
```

### Problem: Material Icons werden nicht angezeigt

**Lösung**: Überprüfe `MatIconModule` Import und Font-Loading:

```typescript
imports: [MatIconModule];
```

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

### Problem: Cards haben unterschiedliche Höhen

**Lösung**: Verwende `flex` im Grid:

```scss
.project-card {
  display: flex;
  flex-direction: column;

  mat-card-content {
    flex: 1; // Nimmt verfügbaren Platz
  }

  mat-card-actions {
    margin-top: auto; // Buttons immer unten
  }
}
```

### Problem: Featured Badge überlappt mit Text

**Lösung**: Z-Index und Position anpassen:

```scss
.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10; // Über Card-Content
}

.project-card {
  position: relative; // Kontext für absolute positioning
}
```

### Problem: Status-Badge wird abgeschnitten

**Lösung**: Flex-Wrap aktivieren:

```scss
.status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
```

---

## Testing

### Unit Tests

```typescript
// projects.spec.ts
describe('Projects', () => {
  it('should display all projects', () => {
    const fixture = TestBed.createComponent(Projects);
    const component = fixture.componentInstance;

    expect(component.projects.length).toBe(4);
  });

  it('should filter featured projects', () => {
    const fixture = TestBed.createComponent(Projects);
    const component = fixture.componentInstance;
    const featured = component.projects.filter((p) => p.featured);

    expect(featured.length).toBeGreaterThan(0);
  });
});
```

### E2E Tests

```typescript
// projects.e2e.ts
describe('Projects Page', () => {
  it('should navigate to project details', () => {
    cy.visit('/projects');
    cy.contains('Issue-Tracker').click();
    cy.url().should('include', '/projects/issue-tracker');
  });

  it('should display featured badge', () => {
    cy.visit('/projects');
    cy.get('.featured-badge').should('be.visible');
  });
});
```

---

## Performance-Optimierungen

### 1. Lazy Loading von Bildern

```html
<img [src]="screenshot.url" loading="lazy" alt="Screenshot" />
```

### 2. OnPush Change Detection

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {}
```

### 3. TrackBy in Loops

```typescript
@for (project of projects; track project.id) { }
```

### 4. Code Splitting

```typescript
// app.routes.ts
{
  path: 'projects',
  loadChildren: () => import('./pages/projects/projects.routes').then(m => m.routes)
}
```

---

## Interview-Tipps

Wenn du über diese Projekte sprichst, betone:

### 1. Anforderungsverständnis

"Ich habe zuerst analysiert, welches Problem gelöst werden soll und für wen."

### 2. Architektur-Entscheidungen

"Ich habe mich für NestJS entschieden, weil es eine klare modulare Struktur bietet."

### 3. Problem-Solving

"Bei der Performance-Optimierung habe ich Pagination und DB-Indizes implementiert."

### 4. Best Practices

"Ich nutze TypeScript Interfaces für Typsicherheit und DTOs für Validation."

### 5. Learnings

"Ich habe gelernt, dass frühe Tests und Dokumentation viel Zeit sparen."

### 6. Verbesserungen

"Nächstes Mal würde ich von Anfang an WebSockets für Echtzeit-Features einplanen."

---

## Zusammenfassung

Die Projects-Seite ist das **Herzstück** deines Portfolios:

✅ **Übersichtsseite** zeigt alle Projekte strukturiert mit Status und Tech-Stack  
✅ **Detailseiten** demonstrieren fachliche Tiefe und Systemverständnis  
✅ **Nested Routing** bietet saubere URL-Struktur  
✅ **Material Design** sorgt für professionelle UI  
✅ **Responsive** für Desktop und Mobile optimiert  
✅ **Interview-Ready** mit Problem/Lösung und Learnings

Die Detailseiten sind **besonders wichtig**, weil sie zeigen, dass du:

- Anforderungen verstehst
- Architektur durchdenkst
- Technische Tiefe besitzt
- Reflektierst und lernst
- Verbesserungen identifizierst

👉 **Das überzeugt Arbeitgeber!**
