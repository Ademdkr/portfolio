# About-Seite Implementierungsanleitung

## Übersicht

Die About-Seite präsentiert die persönliche Geschichte, den Entwicklungsweg und die beruflichen Ziele. Ziel ist es, persönlich aber professionell zu bleiben – kein Roman, kein Lebenslauf-Dump.

**Route:** `/about`

## Struktur

### Komponenten-Dateien

- `src/app/pages/about/about.ts` - TypeScript Component
- `src/app/pages/about/about.html` - HTML Template
- `src/app/pages/about/about.scss` - SCSS Styling

### Sektionen

1. **Hero** - Persönliche Vorstellung mit Name und Fokus
2. **Mein Weg** - Timeline mit 3 wichtigen Schritten
3. **Arbeitsweise** - 4 Prinzipien in Card-Form
4. **Technische Interessen** - Chips mit Fokusthemen
5. **Mein Ziel** - Junior Developer Position

## TypeScript Implementation

### Interfaces

```typescript
interface TimelineStep {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkingPrinciple {
  icon: string;
  title: string;
  description: string;
}
```

### Component

```typescript
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly journey: TimelineStep[] = [
    {
      year: '2023',
      title: 'Umschulung zum Fachinformatiker',
      description:
        'Start der Umschulung mit Fokus auf Anwendungsentwicklung. Grundlagen in Java, Datenbanken und Softwareentwicklung.',
      icon: 'school',
    },
    {
      year: '2024',
      title: 'Vertiefung Full-Stack Entwicklung',
      description:
        'Intensive Beschäftigung mit modernen Web-Technologien: Angular, NestJS, TypeScript, PostgreSQL und MongoDB.',
      icon: 'code',
    },
    {
      year: '2024-2025',
      title: 'Praxisprojekte & Portfolio',
      description:
        'Entwicklung eigener Full-Stack Projekte (Issue-Tracker, Budget-Tracker) zur Anwendung und Vertiefung der erlernten Skills.',
      icon: 'rocket_launch',
    },
  ];

  readonly workingPrinciples: WorkingPrinciple[] = [
    {
      icon: 'auto_awesome',
      title: 'Clean Code',
      description: 'Lesbarer, wartbarer Code mit klarer Struktur und Dokumentation',
    },
    {
      icon: 'layers',
      title: 'Best Practices',
      description: 'Moderne Patterns, TypeScript, Type Safety und saubere Architektur',
    },
    {
      icon: 'psychology',
      title: 'Problemlösung',
      description: 'Systematisches Debugging, Recherche und kontinuierliches Lernen',
    },
    {
      icon: 'groups',
      title: 'Teamwork',
      description: 'Code Reviews, Dokumentation und klare Kommunikation',
    },
  ];

  readonly technicalInterests: string[] = [
    'Full-Stack Entwicklung',
    'REST API Design',
    'TypeScript & Type Safety',
    'Angular & RxJS',
    'NestJS & Node.js',
    'Datenbank-Design',
    'Clean Architecture',
    'DevOps & Docker',
  ];
}
```

### Datenstruktur

**journey**: Timeline-Array mit 3 Schritten

- Chronologische Darstellung des Entwicklungswegs
- Jahr, Titel, Beschreibung und Icon pro Schritt
- Fokus auf Umschulung → Vertiefung → Praxisprojekte

**workingPrinciples**: Array mit 4 Arbeitsprinzipien

- Icon-basierte Darstellung
- Kurze, prägnante Beschreibungen
- Zeigt professionelle Arbeitsweise

**technicalInterests**: String-Array mit 8 Fokusthemen

- Übersicht über technische Interessen
- Keine übermäßige Detailtiefe
- Zeigt Breite der Interessen

## HTML Template

### Struktur

```html
<div class="about-page">
  <!-- Hero Section -->
  <section class="about-hero">
    <div class="hero-content">
      <h1>Über mich</h1>
      <p class="intro">
        Hi, ich bin <strong>Adem Dokur</strong> – angehender Fachinformatiker für
        Anwendungsentwicklung mit Fokus auf <strong>Full-Stack Web-Entwicklung</strong>.
      </p>
      <p class="tagline">
        Vom Quereinsteiger zum Web-Developer durch strukturiertes Lernen und praxisnahe Projekte.
      </p>
    </div>
  </section>

  <!-- Journey Timeline -->
  <section class="journey-section">
    <h2>Mein Weg</h2>
    <div class="timeline">
      @for (step of journey; track step.year) {
      <div class="timeline-item">
        <div class="timeline-icon">
          <mat-icon>{{ step.icon }}</mat-icon>
        </div>
        <div class="timeline-content">
          <span class="timeline-year">{{ step.year }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
      }
    </div>
  </section>

  <!-- Working Principles -->
  <section class="working-principles">
    <h2>Arbeitsweise</h2>
    <div class="principles-grid">
      @for (principle of workingPrinciples; track principle.title) {
      <mat-card class="principle-card">
        <div class="principle-icon">
          <mat-icon>{{ principle.icon }}</mat-icon>
        </div>
        <h3>{{ principle.title }}</h3>
        <p>{{ principle.description }}</p>
      </mat-card>
      }
    </div>
  </section>

  <!-- Technical Interests -->
  <section class="interests-section">
    <h2>Technische Interessen</h2>
    <mat-chip-set class="interests-chips">
      @for (interest of technicalInterests; track interest) {
      <mat-chip>{{ interest }}</mat-chip>
      }
    </mat-chip-set>
  </section>

  <!-- Goal Section -->
  <section class="goal-section">
    <mat-card class="goal-card">
      <mat-card-content>
        <div class="goal-content">
          <mat-icon>flag</mat-icon>
          <div class="goal-text">
            <h3>Mein Ziel</h3>
            <p>
              Ich suche eine <strong>Junior Full-Stack Developer</strong> Position, in der ich mein
              erlerntes Wissen in einem professionellen Team einbringen und weiter ausbauen kann.
              Besonders interessiere ich mich für moderne Web-Technologien und saubere, wartbare
              Codebases.
            </p>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </section>
</div>
```

### Angular Control Flow

**@for Directives**: Angular 21 Syntax

- Timeline-Schritte iterieren über `journey` Array
- Working Principles iterieren über `workingPrinciples` Array
- Interests iterieren über `technicalInterests` Array

**Conditional Styling**: `<strong>` Tags für Hervorhebungen

- Name und Fokus im Hero-Bereich
- Position im Goal-Bereich

## SCSS Styling

### Base Layout

```scss
.about-page {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  section {
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 2.5rem;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }
  }
}
```

**Sektion-Überschriften:**

- Zentriert mit Underline-Effekt
- Gradient-Linie unter Überschrift
- Konsistenter Abstand zwischen Sektionen

### Hero Section

```scss
.about-hero {
  text-align: center;
  padding: 3rem 0;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro {
    font-size: 1.25rem;
    color: #333;
    line-height: 1.8;
    margin: 0 0 1rem 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    strong {
      color: #667eea;
      font-weight: 600;
    }
  }

  .tagline {
    font-size: 1.125rem;
    color: #666;
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
  }
}
```

**Gradient-Headline:** Gleicher Effekt wie auf anderen Seiten für Konsistenz

**Strukturierte Intro:** Name und Fokus hervorgehoben, Tagline als Ergänzung

### Journey Timeline

```scss
.journey-section {
  .timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: 1rem 0;

    &::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    }
  }

  .timeline-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    position: relative;
    z-index: 1;

    mat-icon {
      color: white;
      font-size: 28px;
      width: 28px;
      height: 28px;
    }
  }

  .timeline-content {
    flex: 1;
    padding-top: 0.5rem;

    .timeline-year {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 700;
      color: #667eea;
      background: #667eea20;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      margin-bottom: 0.75rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin: 0 0 0.75rem 0;
    }

    p {
      font-size: 1rem;
      color: #666;
      line-height: 1.7;
      margin: 0;
    }
  }
}
```

**Timeline-Design:**

- Vertikale Gradient-Linie verbindet alle Schritte
- Kreisförmige Icons mit Gradient-Background
- Jahr als Badge mit Akzentfarbe
- Flexbox-Layout für responsive Anpassung

### Working Principles

```scss
.working-principles {
  .principles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .principle-card {
    text-align: center;
    padding: 2rem 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    .principle-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin-bottom: 1.5rem;

      mat-icon {
        color: white;
        font-size: 32px;
        width: 32px;
        height: 32px;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin: 0 0 0.75rem 0;
    }

    p {
      font-size: 0.95rem;
      color: #666;
      line-height: 1.6;
      margin: 0;
    }
  }
}
```

**Grid-Layout:** Auto-fit für responsive Spaltenanzahl (2-4 Spalten je nach Viewport)

**Card-Hover:** Lift-Effekt mit Shadow für Interaktivität

### Technical Interests

```scss
.interests-section {
  text-align: center;

  .interests-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    mat-chip {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      transition: all 0.2s ease;

      &:hover {
        background: #667eea10;
        border-color: #667eea;
        transform: translateY(-2px);
      }
    }
  }
}
```

**Chip-Design:** Wrapped Chips mit Hover-Effekt, Akzentfarbe beim Hover

### Goal Section

```scss
.goal-section {
  .goal-card {
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border: 1px solid #667eea30;

    mat-card-content {
      padding: 2rem;
    }

    .goal-content {
      display: flex;
      gap: 2rem;
      align-items: flex-start;

      mat-icon {
        flex-shrink: 0;
        font-size: 3rem;
        width: 3rem;
        height: 3rem;
        color: #667eea;
      }

      .goal-text {
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 1rem 0;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #555;
          margin: 0;

          strong {
            color: #667eea;
            font-weight: 600;
          }
        }
      }
    }
  }
}
```

**Highlight-Card:** Gradient-Background und Border für visuelle Hervorhebung

**Icon + Text Layout:** Flexbox mit großem Flag-Icon links

## Features

### 1. Hero Section

- Persönliche Vorstellung mit Name
- Fokus auf Full-Stack Entwicklung
- Tagline: Quereinsteiger → Web-Developer

### 2. Journey Timeline

- 3 chronologische Schritte
- Jahr, Titel, Beschreibung pro Schritt
- Visuelle Verbindungslinie
- Icon-basierte Darstellung

### 3. Working Principles

- 4 Kernprinzipien als Cards
- Clean Code, Best Practices, Problemlösung, Teamwork
- Icon pro Prinzip
- Kurze, prägnante Beschreibungen

### 4. Technical Interests

- 8 Fokusthemen als Chips
- Zeigt technische Breite
- Interaktive Hover-Effekte

### 5. Goal Section

- Junior Developer Position
- Hervorgehoben durch Gradient-Background
- Flag-Icon für visuellen Fokus
- Konkrete Zielbeschreibung

## Responsive Design

### Desktop (> 768px)

- Volle Abstände und Padding
- Timeline mit voller Icon-Größe
- Principles-Grid mit 2-4 Spalten
- Horizontales Layout für Goal-Card

### Mobile (≤ 768px)

```scss
@media (max-width: 768px) {
  .about-page {
    padding: 2rem 1rem;

    section {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }
  }

  .about-hero {
    padding: 1.5rem 0;

    h1 {
      font-size: 2rem;
    }

    .intro {
      font-size: 1.125rem;
    }

    .tagline {
      font-size: 1rem;
    }
  }

  .journey-section {
    .timeline {
      &::before {
        left: 20px;
      }
    }

    .timeline-item {
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .timeline-icon {
      width: 48px;
      height: 48px;

      mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }
    }

    .timeline-content {
      h3 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.95rem;
      }
    }
  }

  .working-principles {
    .principles-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .principle-card {
      padding: 1.5rem 1rem;

      .principle-icon {
        width: 56px;
        height: 56px;

        mat-icon {
          font-size: 28px;
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  .interests-section {
    .interests-chips {
      mat-chip {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
      }
    }
  }

  .goal-section {
    .goal-card {
      mat-card-content {
        padding: 1.5rem;
      }

      .goal-content {
        flex-direction: column;
        gap: 1.5rem;

        mat-icon {
          font-size: 2.5rem;
          width: 2.5rem;
          height: 2.5rem;
        }

        .goal-text {
          h3 {
            font-size: 1.25rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
```

**Mobile Anpassungen:**

- Kleinere Font-Sizes
- Reduzierte Icon-Größen
- Single-Column Principles-Grid
- Vertikales Layout für Goal-Card
- Reduzierte Abstände

## Material Design Integration

### Verwendete Komponenten

- `MatCardModule`: Card-Container für Principles und Goal
- `MatIconModule`: Material Icons für Timeline, Principles, Goal
- `MatChipsModule`: Chip-Komponenten für Technical Interests

### Icons

- `school`: Umschulung
- `code`: Vertiefung Entwicklung
- `rocket_launch`: Praxisprojekte
- `auto_awesome`: Clean Code
- `layers`: Best Practices
- `psychology`: Problemlösung
- `groups`: Teamwork
- `flag`: Berufliches Ziel

## Best Practices

### 1. Content Strategy

- **Kurz und prägnant**: Keine langen Texte, keine Lebenslauf-Details
- **Persönlich**: Name, Weg, Ziele klar kommuniziert
- **Professionell**: Fokus auf relevante technische Themen

### 2. Visual Hierarchy

- Hero zieht Aufmerksamkeit
- Timeline zeigt chronologischen Weg
- Principles zeigen Arbeitsweise
- Goal schließt mit klarem Call-to-Action ab

### 3. Type Safety

- Strikte Interfaces für Timeline und Principles
- `readonly` Arrays für Immutability
- Type-safe Icon-Namen

### 4. Performance

- `track` in @for Loops
- Keine schweren Animationen
- Effizientes Grid-Layout

### 5. Accessibility

- Semantische HTML-Struktur
- Ausreichende Farbkontraste
- Material Design Komponenten
- Klare Hierarchie mit h1, h2, h3

## Erweiterungsmöglichkeiten

### 1. Download CV Button

```html
<button mat-raised-button color="primary">
  <mat-icon>download</mat-icon>
  Lebenslauf herunterladen
</button>
```

### 2. Zertifikate Section

- Abgeschlossene Kurse
- Udemy, Coursera, etc.
- Mit Badges oder Icons

### 3. Hobbies Section

- Nicht-technische Interessen
- Work-Life-Balance zeigen
- Persönlichkeit runden

### 4. Social Links

- GitHub, LinkedIn
- Als Icon-Buttons
- Im Hero oder als eigene Section

### 5. Timeline Animation

- Scroll-basierte Animation
- Schritte fade-in beim Scrollen
- IntersectionObserver API

## Integration in Portfolio

### Routing

Die About-Seite ist bereits in `app.routes.ts` integriert:

```typescript
{
  path: 'about',
  component: About,
}
```

### Navigation

Die Header-Navigation enthält bereits den Link:

```html
<a mat-button routerLink="/about">Über mich</a>
```

### Landing Page Preview

Die Landing Page kann einen "Mehr über mich" Button zur About-Seite enthalten.

## Zusammenfassung

Die About-Seite präsentiert die persönliche Geschichte professionell und zugänglich:

✅ Persönliche Vorstellung mit Name und Fokus  
✅ Journey Timeline mit 3 Schritten (Umschulung → Vertiefung → Praxisprojekte)  
✅ 4 Working Principles (Clean Code, Best Practices, Problemlösung, Teamwork)  
✅ 8 Technical Interests als Chips  
✅ Goal Section mit Junior Developer Position  
✅ Material Design mit Cards, Icons, Chips  
✅ Responsive Timeline und Grid-Layout  
✅ Type-safe TypeScript Implementation

Die Implementierung ist persönlich aber professionell, kurz aber informativ – genau richtig für ein Portfolio.
