# Project Detail Page Implementierung

Diese Dokumentation beschreibt die Implementierung von Projekt-Detailseiten für die Portfolio-Webseite.

## Übersicht

Projekt-Detailseiten sind **das Herzstück** deines Portfolios, wo du fachliche Tiefe demonstrierst.

**URLs**: `/projects/issue-tracker`, `/projects/budget-tracker`, etc.

## Zweck

⚠️ **Hier punktest du fachlich!**

Detaillierte Darstellung eines Projekts mit:

- ✅ Anforderungsverständnis
- ✅ Systemarchitektur
- ✅ Technische Tiefe
- ✅ Problem-Solving Skills
- ✅ Learnings & Reflexion

## Komponenten-Struktur

```
src/app/pages/projects/
├── issue-tracker/
│   ├── issue-tracker.ts
│   ├── issue-tracker.html
│   └── issue-tracker.scss
└── budget-tracker/
    ├── budget-tracker.ts
    ├── budget-tracker.html
    └── budget-tracker.scss
```

## Routing

Detailseiten werden als Child-Routes unter `/projects` registriert:

```typescript
// app.routes.ts
import { IssueTracker } from './pages/projects/issue-tracker/issue-tracker';
import { BudgetTracker } from './pages/projects/budget-tracker/budget-tracker';

export const routes: Routes = [
  {
    path: 'projects',
    children: [
      { path: '', component: Projects },
      { path: 'issue-tracker', component: IssueTracker },
      { path: 'budget-tracker', component: BudgetTracker },
    ],
  },
];
```

---

## Struktur einer Detailseite

Eine vollständige Detailseite besteht aus 7 Sektionen:

### 🔹 1. Projekt-Header

**Inhalt**:

- Titel (H1 mit Gradient)
- Kurzbeschreibung (1-2 Sätze)
- Tech-Stack Badges
- Action Buttons (Live Demo, Frontend Repo, Backend Repo)
- Zurück-Button zur Übersicht

```typescript
readonly project = {
  title: 'Issue-Tracker',
  shortDescription: 'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features',
  techStack: ['Angular 21', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'RxJS', 'Angular Material'],
  links: {
    demo: 'https://issue-tracker-demo.example.com',
    frontendRepo: 'https://github.com/Ademdkr/issue-tracker-frontend',
    backendRepo: 'https://github.com/Ademdkr/issue-tracker-backend',
  },
};
```

```html
<div class="project-detail">
  <!-- Back Button -->
  <div class="back-nav">
    <a mat-button routerLink="/projects">
      <mat-icon>arrow_back</mat-icon>
      Zurück zu Projekten
    </a>
  </div>

  <!-- Project Header -->
  <section class="project-header">
    <h1>{{ project.title }}</h1>
    <p class="short-description">{{ project.shortDescription }}</p>

    <!-- Tech Stack Badges -->
    <div class="tech-stack">
      <mat-chip-set>
        @for (tech of project.techStack; track tech) {
        <mat-chip>{{ tech }}</mat-chip>
        }
      </mat-chip-set>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <a
        mat-raised-button
        color="primary"
        [href]="project.links.demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mat-icon>open_in_new</mat-icon>
        Live Demo
      </a>
      <a
        mat-stroked-button
        [href]="project.links.frontendRepo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mat-icon>code</mat-icon>
        Frontend Repo
      </a>
      <a
        mat-stroked-button
        [href]="project.links.backendRepo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mat-icon>code</mat-icon>
        Backend Repo
      </a>
    </div>
  </section>

  <mat-divider></mat-divider>

  <!-- ... weitere Sektionen -->
</div>
```

**Styling**:

```scss
.project-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .short-description {
    font-size: 1.25rem;
    color: #666;
    margin: 0 0 2rem 0;
    line-height: 1.6;
  }

  .tech-stack {
    margin-bottom: 2rem;

    mat-chip {
      font-size: 0.9rem;
      background: #f3f4f6;
      color: #555;

      &:hover {
        background: #667eea;
        color: white;
      }
    }
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
```

### 🔹 2. Problemstellung & Ziel

**Zweck**: Zeigt **Anforderungsverständnis**

**Inhalt**:

- Warum gibt es dieses Projekt?
- Welches Problem wird gelöst?
- Für wen ist es gedacht?

```typescript
readonly problemStatement = {
  why: 'Teams benötigen ein zentrales System zur Verwaltung von Aufgaben, Bugs und Features, um den Überblick zu behalten und effizient zusammenzuarbeiten.',
  problem: 'Klassische Tools sind oft zu komplex, langsam oder nicht auf die Bedürfnisse kleiner bis mittlerer Teams zugeschnitten.',
  target: 'Entwicklungsteams, Projektmanager und Stakeholder, die eine einfache, schnelle und übersichtliche Lösung suchen.',
};
```

```html
<section class="section">
  <h2>
    <mat-icon>help_outline</mat-icon>
    Problemstellung & Ziel
  </h2>
  <mat-card>
    <mat-card-content>
      <div class="info-block">
        <h3>Warum gibt es dieses Projekt?</h3>
        <p>{{ problemStatement.why }}</p>
      </div>
      <div class="info-block">
        <h3>Welches Problem wird gelöst?</h3>
        <p>{{ problemStatement.problem }}</p>
      </div>
      <div class="info-block">
        <h3>Für wen?</h3>
        <p>{{ problemStatement.target }}</p>
      </div>
    </mat-card-content>
  </mat-card>
</section>
```

**Styling**:

```scss
.section {
  margin-bottom: 4rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;

    mat-icon {
      color: #667eea;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }
  }

  .info-block {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 0.5rem 0;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      color: #555;
      margin: 0;
    }
  }
}
```

### 🔹 3. Features

**Zweck**: Überblick über **Funktionalität**

**Inhalt**: Grid mit Feature-Cards (Icon + Text)

```typescript
readonly features = [
  { icon: 'person', text: 'Authentifizierung & Rollen-Management (Admin, Manager, Developer, User)' },
  { icon: 'create', text: 'CRUD-Operationen für Issues, Projekte und Kommentare' },
  { icon: 'workspaces', text: 'Status-Workflows (Open → In Progress → Review → Closed)' },
  { icon: 'label', text: 'Kategorisierung (Bug, Feature, Task) und Prioritäten' },
  { icon: 'search', text: 'Filter- und Suchfunktionen mit Query-Builder' },
  { icon: 'assignment', text: 'Zuweisung von Issues an Team-Mitglieder' },
  { icon: 'comment', text: 'Kommentare und Activity-Logs für Nachverfolgbarkeit' },
  { icon: 'verified_user', text: 'Input-Validierung (Frontend & Backend) und Fehlerhandling' },
  { icon: 'notifications', text: 'E-Mail-Benachrichtigungen bei Status-Änderungen' },
];
```

```html
<section class="section">
  <h2>
    <mat-icon>extension</mat-icon>
    Features
  </h2>
  <div class="features-grid">
    @for (feature of features; track feature.text) {
    <mat-card class="feature-card">
      <mat-card-content>
        <mat-icon color="primary">{{ feature.icon }}</mat-icon>
        <p>{{ feature.text }}</p>
      </mat-card-content>
    </mat-card>
    }
  </div>
</section>
```

**Styling**:

```scss
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  .feature-card {
    mat-card-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      mat-icon {
        flex-shrink: 0;
        font-size: 1.75rem;
        width: 1.75rem;
        height: 1.75rem;
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #555;
      }
    }
  }
}
```

### 🔹 4. Architektur

**Zweck**: Zeigt **Systemdenken**

**Inhalt**: 4 Cards (Frontend, Backend, Datenbank, Kommunikation)

```typescript
readonly architecture = {
  frontend: {
    title: 'Frontend (Angular)',
    items: [
      'Standalone Components mit Signals API',
      'Reactive Forms mit Custom Validators',
      'RxJS für asynchrone State-Verwaltung',
      'Angular Material für UI-Komponenten',
      'Route Guards für Authentifizierung',
    ],
  },
  backend: {
    title: 'Backend (NestJS)',
    items: [
      'RESTful API mit modularer Architektur',
      'JWT-basierte Authentifizierung',
      'TypeORM für Datenbank-Zugriff',
      'Role-Based Access Control (RBAC)',
      'Global Exception Filter für Fehlerhandling',
    ],
  },
  database: {
    title: 'Datenbank (PostgreSQL)',
    items: [
      'Normalisierte Tabellen (Users, Projects, Issues, Comments)',
      'Foreign Keys für Datenintegrität',
      'Indizes für Performance-Optimierung',
      'Soft Deletes für Audit-Trail',
    ],
  },
  communication: {
    title: 'Kommunikation',
    items: [
      'REST API mit JSON-Payloads',
      'HTTP Interceptors für Auth-Token',
      'Error Handling mit Custom Errors',
      'CORS-Konfiguration',
    ],
  },
};
```

```html
<section class="section">
  <h2>
    <mat-icon>account_tree</mat-icon>
    Architektur
  </h2>
  <div class="architecture-grid">
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ architecture.frontend.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ul>
          @for (item of architecture.frontend.items; track item) {
          <li>{{ item }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>

    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ architecture.backend.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ul>
          @for (item of architecture.backend.items; track item) {
          <li>{{ item }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>

    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ architecture.database.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ul>
          @for (item of architecture.database.items; track item) {
          <li>{{ item }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>

    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ architecture.communication.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ul>
          @for (item of architecture.communication.items; track item) {
          <li>{{ item }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>
  </div>
</section>
```

**Styling**:

```scss
.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  mat-card {
    mat-card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #667eea;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #555;
        border-bottom: 1px solid #f0f0f0;

        &:last-child {
          border-bottom: none;
        }

        &::before {
          content: '→';
          margin-right: 0.5rem;
          color: #667eea;
          font-weight: bold;
        }
      }
    }
  }
}
```

### 🔹 5. Screenshots & UI-Flows

**Zweck**: Visueller Einblick in die Anwendung

**Inhalt**: Placeholder oder echte Screenshots

- Dashboard
- Detailansicht
- Formulare
- Tabellen

```html
<section class="section">
  <h2>
    <mat-icon>image</mat-icon>
    Screenshots & UI-Flows
  </h2>
  <mat-card>
    <mat-card-content>
      <div class="screenshots-placeholder">
        <mat-icon>photo_library</mat-icon>
        <p>Screenshots werden hier eingefügt (Dashboard, Detailansicht, Formulare, Tabellen)</p>
      </div>
    </mat-card-content>
  </mat-card>
</section>
```

**Styling**:

```scss
.screenshots-placeholder {
  text-align: center;
  padding: 4rem 2rem;
  background: #f9fafb;
  border-radius: 8px;

  mat-icon {
    font-size: 4rem;
    width: 4rem;
    height: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  p {
    color: #999;
    font-size: 1rem;
    margin: 0;
  }
}
```

**Alternative: Echte Screenshots einbinden**

```html
<div class="screenshots-grid">
  <img src="assets/screenshots/dashboard.png" alt="Dashboard Ansicht" loading="lazy" />
  <img src="assets/screenshots/issue-detail.png" alt="Issue Detail" loading="lazy" />
  <img src="assets/screenshots/kanban.png" alt="Kanban Board" loading="lazy" />
</div>
```

```scss
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}
```

### 🔹 6. Technische Details

**Zweck**: Zeigt **technische Tiefe**

**Inhalt**: 4 Cards (Modulstruktur, State-Handling, API-Design, DB-Modell)

```typescript
readonly technicalDetails = [
  {
    title: 'Modulstruktur',
    description: 'Feature-Module (Auth, Issues, Projects, Users) mit Lazy Loading und klarer Trennung von Presentation und Business Logic.',
  },
  {
    title: 'State-Handling',
    description: 'Angular Signals für reaktive UI-Updates, Services als Single Source of Truth, RxJS Observables für asynchrone Operationen.',
  },
  {
    title: 'API-Design',
    description: 'RESTful Endpoints mit klarer Ressourcen-Struktur, DTOs für Validation, Swagger-Dokumentation.',
  },
  {
    title: 'DB-Modell',
    description: 'User (id, email, role) → Project (id, name, description) → Issue (id, title, status, priority, assignee) → Comment (id, text, author).',
  },
];
```

```html
<section class="section">
  <h2>
    <mat-icon>code</mat-icon>
    Technische Details
  </h2>
  <div class="technical-details">
    @for (detail of technicalDetails; track detail.title) {
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ detail.title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{ detail.description }}</p>
      </mat-card-content>
    </mat-card>
    }
  </div>
</section>
```

**Styling**:

```scss
.technical-details {
  display: grid;
  gap: 1.5rem;

  mat-card {
    mat-card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #667eea;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #555;
      margin: 0;
    }
  }
}
```

### 🔹 7. Herausforderungen & Learnings

**Zweck**: ⭐ **Extrem stark für Interviews!**

**Inhalt**:

- Herausforderungen (Problem + Lösung)
- Learnings
- Verbesserungsmöglichkeiten

```typescript
readonly challenges = [
  {
    title: 'Role-Based Access Control',
    problem: 'Komplexe Berechtigungslogik: Wer darf was sehen/ändern?',
    solution: 'Custom Guards und Decorators in NestJS, Role-Checks auf Route- und Method-Level.',
  },
  {
    title: 'Performance bei vielen Issues',
    problem: 'Lange Ladezeiten bei großen Projekten mit hunderten Issues.',
    solution: 'Pagination, Lazy Loading, DB-Indizes und Query-Optimierung.',
  },
  {
    title: 'Formular-Validierung',
    problem: 'Konsistente Validierung zwischen Frontend und Backend.',
    solution: 'Shared DTOs (class-validator), Frontend verwendet Backend-Fehlermeldungen.',
  },
];

readonly learnings = [
  'Architektur-Patterns: Saubere Trennung von Concerns erleichtert Wartung und Testing erheblich.',
  'API-Design: Frühe Swagger-Dokumentation spart Zeit und reduziert Missverständnisse.',
  'Testing: Unit- und E2E-Tests von Anfang an einplanen, nicht nachträglich.',
];

readonly improvements = [
  'WebSocket-Integration für Echtzeit-Updates ohne Polling.',
  'Drag & Drop für Status-Änderungen (Kanban-Board).',
  'Erweiterte Reporting-Funktionen mit Diagrammen.',
];
```

```html
<section class="section">
  <h2>
    <mat-icon>psychology</mat-icon>
    Herausforderungen & Learnings
  </h2>

  <!-- Challenges -->
  <h3>Herausforderungen</h3>
  <div class="challenges">
    @for (challenge of challenges; track challenge.title) {
    <mat-card class="challenge-card">
      <mat-card-content>
        <h4>{{ challenge.title }}</h4>
        <p class="problem"><strong>Problem:</strong> {{ challenge.problem }}</p>
        <p class="solution"><strong>Lösung:</strong> {{ challenge.solution }}</p>
      </mat-card-content>
    </mat-card>
    }
  </div>

  <!-- Learnings -->
  <h3>Learnings</h3>
  <mat-card>
    <mat-card-content>
      <ul class="learnings-list">
        @for (learning of learnings; track learning) {
        <li>{{ learning }}</li>
        }
      </ul>
    </mat-card-content>
  </mat-card>

  <!-- Improvements -->
  <h3>Verbesserungsmöglichkeiten</h3>
  <mat-card>
    <mat-card-content>
      <ul class="improvements-list">
        @for (improvement of improvements; track improvement) {
        <li>{{ improvement }}</li>
        }
      </ul>
    </mat-card-content>
  </mat-card>
</section>
```

**Styling**:

```scss
.section {
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #444;
    margin: 2rem 0 1rem 0;
  }
}

.challenges {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;

  .challenge-card {
    mat-card-content {
      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        margin: 0 0 1rem 0;
      }

      p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0 0 0.75rem 0;

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          color: #667eea;
        }
      }

      .problem {
        color: #dc2626;

        strong {
          color: #dc2626;
        }
      }

      .solution {
        color: #059669;

        strong {
          color: #059669;
        }
      }
    }
  }
}

.learnings-list,
.improvements-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '✓';
      margin-right: 0.75rem;
      color: #059669;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
}

.improvements-list li::before {
  content: '💡';
  margin-right: 0.75rem;
}
```

---

## Bottom Navigation

**Zweck**: Einfache Navigation zurück zur Übersicht

```html
<div class="bottom-nav">
  <a mat-raised-button color="primary" routerLink="/projects">
    <mat-icon>arrow_back</mat-icon>
    Zurück zu Projekten
  </a>
</div>
```

```scss
.bottom-nav {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}
```

---

## Vollständiges TypeScript-Beispiel

Hier ist die komplette TypeScript-Komponente für Issue-Tracker:

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-issue-tracker',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './issue-tracker.html',
  styleUrl: './issue-tracker.scss',
})
export class IssueTracker {
  readonly project = {
    title: 'Issue-Tracker',
    shortDescription:
      'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features',
    techStack: ['Angular 21', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'RxJS', 'Angular Material'],
    links: {
      demo: 'https://issue-tracker-demo.example.com',
      frontendRepo: 'https://github.com/Ademdkr/issue-tracker-frontend',
      backendRepo: 'https://github.com/Ademdkr/issue-tracker-backend',
    },
  };

  readonly problemStatement = {
    why: 'Teams benötigen ein zentrales System zur Verwaltung von Aufgaben, Bugs und Features, um den Überblick zu behalten und effizient zusammenzuarbeiten.',
    problem:
      'Klassische Tools sind oft zu komplex, langsam oder nicht auf die Bedürfnisse kleiner bis mittlerer Teams zugeschnitten.',
    target:
      'Entwicklungsteams, Projektmanager und Stakeholder, die eine einfache, schnelle und übersichtliche Lösung suchen.',
  };

  readonly features = [
    {
      icon: 'person',
      text: 'Authentifizierung & Rollen-Management (Admin, Manager, Developer, User)',
    },
    { icon: 'create', text: 'CRUD-Operationen für Issues, Projekte und Kommentare' },
    { icon: 'workspaces', text: 'Status-Workflows (Open → In Progress → Review → Closed)' },
    { icon: 'label', text: 'Kategorisierung (Bug, Feature, Task) und Prioritäten' },
    { icon: 'search', text: 'Filter- und Suchfunktionen mit Query-Builder' },
    { icon: 'assignment', text: 'Zuweisung von Issues an Team-Mitglieder' },
    { icon: 'comment', text: 'Kommentare und Activity-Logs für Nachverfolgbarkeit' },
    { icon: 'verified_user', text: 'Input-Validierung (Frontend & Backend) und Fehlerhandling' },
    { icon: 'notifications', text: 'E-Mail-Benachrichtigungen bei Status-Änderungen' },
  ];

  readonly architecture = {
    frontend: {
      title: 'Frontend (Angular)',
      items: [
        'Standalone Components mit Signals API',
        'Reactive Forms mit Custom Validators',
        'RxJS für asynchrone State-Verwaltung',
        'Angular Material für UI-Komponenten',
        'Route Guards für Authentifizierung',
      ],
    },
    backend: {
      title: 'Backend (NestJS)',
      items: [
        'RESTful API mit modularer Architektur',
        'JWT-basierte Authentifizierung',
        'TypeORM für Datenbank-Zugriff',
        'Role-Based Access Control (RBAC)',
        'Global Exception Filter für Fehlerhandling',
      ],
    },
    database: {
      title: 'Datenbank (PostgreSQL)',
      items: [
        'Normalisierte Tabellen (Users, Projects, Issues, Comments)',
        'Foreign Keys für Datenintegrität',
        'Indizes für Performance-Optimierung',
        'Soft Deletes für Audit-Trail',
      ],
    },
    communication: {
      title: 'Kommunikation',
      items: [
        'REST API mit JSON-Payloads',
        'HTTP Interceptors für Auth-Token',
        'Error Handling mit Custom Errors',
        'CORS-Konfiguration',
      ],
    },
  };

  readonly technicalDetails = [
    {
      title: 'Modulstruktur',
      description:
        'Feature-Module (Auth, Issues, Projects, Users) mit Lazy Loading und klarer Trennung von Presentation und Business Logic.',
    },
    {
      title: 'State-Handling',
      description:
        'Angular Signals für reaktive UI-Updates, Services als Single Source of Truth, RxJS Observables für asynchrone Operationen.',
    },
    {
      title: 'API-Design',
      description:
        'RESTful Endpoints mit klarer Ressourcen-Struktur, DTOs für Validation, Swagger-Dokumentation.',
    },
    {
      title: 'DB-Modell',
      description:
        'User (id, email, role) → Project (id, name, description) → Issue (id, title, status, priority, assignee) → Comment (id, text, author).',
    },
  ];

  readonly challenges = [
    {
      title: 'Role-Based Access Control',
      problem: 'Komplexe Berechtigungslogik: Wer darf was sehen/ändern?',
      solution: 'Custom Guards und Decorators in NestJS, Role-Checks auf Route- und Method-Level.',
    },
    {
      title: 'Performance bei vielen Issues',
      problem: 'Lange Ladezeiten bei großen Projekten mit hunderten Issues.',
      solution: 'Pagination, Lazy Loading, DB-Indizes und Query-Optimierung.',
    },
    {
      title: 'Formular-Validierung',
      problem: 'Konsistente Validierung zwischen Frontend und Backend.',
      solution: 'Shared DTOs (class-validator), Frontend verwendet Backend-Fehlermeldungen.',
    },
  ];

  readonly learnings = [
    'Architektur-Patterns: Saubere Trennung von Concerns erleichtert Wartung und Testing erheblich.',
    'API-Design: Frühe Swagger-Dokumentation spart Zeit und reduziert Missverständnisse.',
    'Testing: Unit- und E2E-Tests von Anfang an einplanen, nicht nachträglich.',
  ];

  readonly improvements = [
    'WebSocket-Integration für Echtzeit-Updates ohne Polling.',
    'Drag & Drop für Status-Änderungen (Kanban-Board).',
    'Erweiterte Reporting-Funktionen mit Diagrammen.',
  ];
}
```

---

## Vollständiges SCSS-Beispiel

```scss
.project-detail {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.back-nav {
  margin-bottom: 2rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.project-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .short-description {
    font-size: 1.25rem;
    color: #666;
    margin: 0 0 2rem 0;
    line-height: 1.6;
  }

  .tech-stack {
    margin-bottom: 2rem;

    mat-chip-set {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    mat-chip {
      font-size: 0.9rem;
      background: #f3f4f6;
      color: #555;

      &:hover {
        background: #667eea;
        color: white;
      }
    }
  }

  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
}

mat-divider {
  margin: 3rem 0;
}

.section {
  margin-bottom: 4rem;

  h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;

    mat-icon {
      color: #667eea;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #444;
    margin: 2rem 0 1rem 0;
  }

  .info-block {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #667eea;
      margin: 0 0 0.5rem 0;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      color: #555;
      margin: 0;
    }
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  .feature-card {
    mat-card-content {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      mat-icon {
        flex-shrink: 0;
        font-size: 1.75rem;
        width: 1.75rem;
        height: 1.75rem;
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #555;
      }
    }
  }
}

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  mat-card {
    mat-card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #667eea;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #555;
        border-bottom: 1px solid #f0f0f0;

        &:last-child {
          border-bottom: none;
        }

        &::before {
          content: '→';
          margin-right: 0.5rem;
          color: #667eea;
          font-weight: bold;
        }
      }
    }
  }
}

.screenshots-placeholder {
  text-align: center;
  padding: 4rem 2rem;
  background: #f9fafb;
  border-radius: 8px;

  mat-icon {
    font-size: 4rem;
    width: 4rem;
    height: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  p {
    color: #999;
    font-size: 1rem;
    margin: 0;
  }
}

.technical-details {
  display: grid;
  gap: 1.5rem;

  mat-card {
    mat-card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #667eea;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #555;
      margin: 0;
    }
  }
}

.challenges {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;

  .challenge-card {
    mat-card-content {
      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        margin: 0 0 1rem 0;
      }

      p {
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0 0 0.75rem 0;

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          color: #667eea;
        }
      }

      .problem {
        color: #dc2626;

        strong {
          color: #dc2626;
        }
      }

      .solution {
        color: #059669;

        strong {
          color: #059669;
        }
      }
    }
  }
}

.learnings-list,
.improvements-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '✓';
      margin-right: 0.75rem;
      color: #059669;
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
}

.improvements-list li::before {
  content: '💡';
  margin-right: 0.75rem;
}

.bottom-nav {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .project-detail {
    padding: 1rem;
  }

  .project-header {
    h1 {
      font-size: 2rem;
    }

    .short-description {
      font-size: 1rem;
    }

    .action-buttons {
      flex-direction: column;

      a {
        width: 100%;
        justify-content: center;
      }
    }
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .features-grid,
  .architecture-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Komponente erstellen

```powershell
# Mit Angular CLI
ng generate component pages/projects/issue-tracker --skip-tests
ng generate component pages/projects/budget-tracker --skip-tests
```

---

## Best Practices

### 1. Datenorganisation

```typescript
// Gruppiere verwandte Daten in Objekten
readonly project = { title, description, techStack, links };
readonly problemStatement = { why, problem, target };
readonly architecture = { frontend, backend, database, communication };
```

### 2. Typsicherheit

```typescript
// Verwende Interfaces für komplexe Strukturen
interface Feature {
  icon: string;
  text: string;
}

interface Challenge {
  title: string;
  problem: string;
  solution: string;
}
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
        <!-- Beschreibende Attribute -->
        <a href="..." target="_blank" rel="noopener noreferrer">
          <!-- Icon Labels -->
          <mat-icon aria-label="Zurück">arrow_back</mat-icon></a
        >
      </h3>
    </h2>
  </h1>
</section>
```

### 4. Performance

```typescript
// Track-By in Loops
@for (item of items; track item.title) { }

// Lazy Loading für Bilder
<img src="..." loading="lazy" alt="...">
```

---

## Interview-Tipps

Wenn du über deine Projekt-Detailseiten sprichst:

### 1. Anforderungsverständnis betonen

"Ich habe zuerst analysiert, welches Problem das Projekt löst und für wen."

### 2. Architektur-Entscheidungen erklären

"Ich habe mich für NestJS entschieden, weil es eine klare modulare Struktur bietet."

### 3. Problem-Solving demonstrieren

"Bei der Performance-Optimierung habe ich Pagination und DB-Indizes implementiert."

### 4. Learnings teilen

"Ich habe gelernt, dass frühe Tests und Dokumentation viel Zeit sparen."

### 5. Verbesserungen identifizieren

"Nächstes Mal würde ich von Anfang an WebSockets für Echtzeit-Features einplanen."

### 6. Technische Tiefe zeigen

"Ich nutze TypeORM mit Query Builder für komplexe Abfragen und DTOs für Validation."

---

## Responsive Design

```scss
@media (max-width: 768px) {
  .project-detail {
    padding: 1rem;
  }

  .project-header {
    h1 {
      font-size: 2rem;
    }

    .action-buttons {
      flex-direction: column;

      a {
        width: 100%;
        justify-content: center;
      }
    }
  }

  .features-grid,
  .architecture-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Zusammenfassung

Projekt-Detailseiten sind **das Herzstück** deines Portfolios:

✅ **7 Sektionen** für vollständige Projektdarstellung  
✅ **Anforderungsverständnis** durch Problemstellung & Ziel  
✅ **Systemdenken** durch Architektur-Übersicht  
✅ **Technische Tiefe** durch Details zu Modulen, State, API, DB  
✅ **Problem-Solving** durch Herausforderungen & Lösungen  
✅ **Reflexion** durch Learnings & Verbesserungen  
✅ **Interview-Ready** mit konkreten Beispielen

Die Detailseiten zeigen, dass du:

- Anforderungen verstehst
- Architektur durchdenkst
- Technische Tiefe besitzt
- Probleme lösen kannst
- Reflektierst und lernst
- Verbesserungen identifizierst

👉 **Das überzeugt Arbeitgeber!**
